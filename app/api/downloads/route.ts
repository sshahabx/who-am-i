import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const DATA_FILE = path.join(process.cwd(), 'data', 'downloads.json')

// Ensure data directory exists
function ensureDataDir() {
  const dataDir = path.join(process.cwd(), 'data')
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true })
  }
}

// Read download counts from file
function readDownloads() {
  ensureDataDir()
  try {
    if (fs.existsSync(DATA_FILE)) {
      const data = fs.readFileSync(DATA_FILE, 'utf-8')
      return JSON.parse(data)
    }
  } catch (error) {
    console.error('Error reading downloads:', error)
  }
  // Initialize with Kubernetes at 7 downloads
  return { kubernetes: 7 }
}

// Write download counts to file
function writeDownloads(data: Record<string, number>) {
  ensureDataDir()
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2))
  } catch (error) {
    console.error('Error writing downloads:', error)
  }
}

// GET - Fetch download counts
export async function GET() {
  const downloads = readDownloads()
  return NextResponse.json(downloads)
}

// POST - Increment download count
export async function POST(request: Request) {
  try {
    const { projectId } = await request.json()
    
    if (!projectId) {
      return NextResponse.json({ error: 'Project ID required' }, { status: 400 })
    }

    const downloads = readDownloads()
    downloads[projectId] = (downloads[projectId] || 0) + 1
    writeDownloads(downloads)

    return NextResponse.json({ 
      projectId, 
      count: downloads[projectId] 
    })
  } catch (error) {
    console.error('Error incrementing download:', error)
    return NextResponse.json({ error: 'Failed to increment download' }, { status: 500 })
  }
}
