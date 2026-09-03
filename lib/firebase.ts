import { initializeApp, getApps, getApp } from 'firebase/app'
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDocs,
  deleteDoc,
  query,
  orderBy,
  limit,
  serverTimestamp,
  Timestamp,
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBu-7FCZq75Dwinsh0msPW4JowIGyleWuk',
  authDomain: 'real-climber-ayan-1234.firebaseapp.com',
  projectId: 'real-climber-ayan-1234',
  storageBucket: 'real-climber-ayan-1234.firebasestorage.app',
  messagingSenderId: '1074725311322',
  appId: '1:1074725311322:web:be31c96c45a7da7c1b5963',
}

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
export const db = getFirestore(app)

export interface HolderSnapshotDoc {
  id?: string
  date: string
  dateId: string
  timestamp: number | Timestamp
  holders: number
  marketCap?: number
  bnbRaised?: number
  growthPct?: number
}

const COLLECTION_NAME = 'qyona_holder'

/**
 * Get YYYY-MM-DD string key for a Date object
 */
function getFormattedDateId(d: Date): string {
  const yyyy = d.getFullYear()
  const mm = String(d.getMonth() + 1).padStart(2, '0')
  const dd = String(d.getDate()).padStart(2, '0')
  return `${yyyy}-${mm}-${dd}`
}

/**
 * Convert YYYY-MM-DD to Short Label (e.g. '2026-09-03' -> 'Sep 3')
 */
function formatDateIdToLabel(dateId: string): string {
  const parts = dateId.split('-')
  if (parts.length === 3) {
    const y = parseInt(parts[0], 10)
    const m = parseInt(parts[1], 10) - 1
    const d = parseInt(parts[2], 10)
    const dateObj = new Date(y, m, d)
    return dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  }
  return dateId
}

/**
 * Clean up legacy invalid documents in Firestore qyona_holder collection
 */
export async function cleanupLegacyDocs() {
  try {
    const colRef = collection(db, COLLECTION_NAME)
    const querySnapshot = await getDocs(colRef)
    const dateIdRegex = /^\d{4}-\d{2}-\d{2}$/

    querySnapshot.forEach(async (d) => {
      const data = d.data()
      // If doc ID or dateId is not a valid YYYY-MM-DD, delete legacy artifact
      if (!dateIdRegex.test(d.id) && (!data.dateId || !dateIdRegex.test(data.dateId))) {
        try {
          await deleteDoc(doc(db, COLLECTION_NAME, d.id))
        } catch {
          // Quiet fallback
        }
      }
    })
  } catch (err) {
    console.error('Failed to cleanup legacy docs:', err)
  }
}

/**
 * Seed initial 7-day historical documents (last 6 days + today) into Firestore `qyona_holder`
 */
export async function seedInitialHolderHistoryIfEmpty(currentHolders: number = 4) {
  try {
    const colRef = collection(db, COLLECTION_NAME)
    const existingDocs = await getDocs(colRef)

    // Filter valid dateId docs
    const validCount = existingDocs.docs.filter((d) => /^\d{4}-\d{2}-\d{2}$/.test(d.id)).length

    // If already seeded with 7 or more valid daily documents, return
    if (validCount >= 7) return

    const now = new Date()
    // Progression leading up to currentHolders (e.g. 4)
    const pastCounts = [1, 1, 2, 2, 3, 3, currentHolders]

    for (let i = 6; i >= 0; i--) {
      const pastDate = new Date(now.getTime() - i * 24 * 60 * 60 * 1000)
      const dateId = getFormattedDateId(pastDate)
      const dateLabel = formatDateIdToLabel(dateId)
      const holderCount = pastCounts[6 - i] || currentHolders

      const docRef = doc(db, COLLECTION_NAME, dateId)
      await setDoc(
        docRef,
        {
          date: dateLabel,
          dateId,
          timestamp: pastDate.getTime(),
          createdServerAt: serverTimestamp(),
          holders: holderCount,
          marketCap: 4425,
          bnbRaised: 0.205367,
        },
        { merge: true }
      )
    }
  } catch (err) {
    console.error('Failed to seed initial holder history in qyona_holder:', err)
  }
}

/**
 * Record/update today's daily holder snapshot into Firestore collection `qyona_holder`
 */
export async function saveHolderSnapshot(data: {
  holders: number
  marketCap?: number
  bnbRaised?: number
}) {
  try {
    const now = new Date()
    const dateId = getFormattedDateId(now)
    const dateLabel = formatDateIdToLabel(dateId)

    const docRef = doc(db, COLLECTION_NAME, dateId)
    await setDoc(
      docRef,
      {
        date: dateLabel,
        dateId,
        timestamp: now.getTime(),
        updatedServerAt: serverTimestamp(),
        holders: data.holders,
        marketCap: data.marketCap || 0,
        bnbRaised: data.bnbRaised || 0,
      },
      { merge: true }
    )
  } catch (err) {
    console.error('Failed to save holder snapshot to Firestore qyona_holder:', err)
  }
}

/**
 * Fetch historical holder snapshots from Firestore collection `qyona_holder`,
 * guaranteeing EXACTLY 1 RECORD PER CALENDAR DATE with strict YYYY-MM-DD sorting.
 */
export async function getHolderHistoryFromFirestore(limitCount: number = 7): Promise<HolderSnapshotDoc[]> {
  try {
    const colRef = collection(db, COLLECTION_NAME)
    const querySnapshot = await getDocs(colRef)
    const dateIdRegex = /^\d{4}-\d{2}-\d{2}$/

    // Group documents by valid YYYY-MM-DD dateId
    const dateMap = new Map<string, HolderSnapshotDoc>()

    querySnapshot.forEach((d) => {
      const data = d.data()
      const dateKey = data.dateId || (dateIdRegex.test(d.id) ? d.id : null)

      // Only include valid YYYY-MM-DD daily records
      if (dateKey && dateIdRegex.test(dateKey)) {
        const timestamp = Number(data.timestamp || 0)
        const holders = Math.max(Number(data.holders || 0), 1)

        if (!dateMap.has(dateKey) || (dateMap.get(dateKey)?.timestamp as number || 0) < timestamp) {
          dateMap.set(dateKey, {
            id: d.id,
            date: formatDateIdToLabel(dateKey),
            dateId: dateKey,
            timestamp,
            holders,
            marketCap: Number(data.marketCap || 0),
            bnbRaised: Number(data.bnbRaised || 0),
          })
        }
      }
    })

    // Convert map to array and sort chronologically by dateId string ascending
    const uniqueDailyDocs = Array.from(dateMap.values()).sort((a, b) =>
      a.dateId.localeCompare(b.dateId)
    )

    // Return the last limitCount (7) unique daily records
    return uniqueDailyDocs.slice(-limitCount)
  } catch (err) {
    console.error('Failed to fetch holder history from Firestore qyona_holder:', err)
    return []
  }
}
