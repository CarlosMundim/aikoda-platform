import { NextResponse } from 'next/server'
import { seedDatabase } from '@/lib/seedData'

export async function POST() {
  try {
    await seedDatabase()
    return NextResponse.json({ 
      success: true, 
      message: 'Database seeded successfully!' 
    })
  } catch (error) {
    console.error('Error seeding database:', error)
    return NextResponse.json(
      { error: 'Failed to seed database' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({ 
    message: 'Use POST to seed the database',
    note: 'This will clear existing data and populate with sample data'
  })
}