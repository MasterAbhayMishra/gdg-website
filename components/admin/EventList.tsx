'use client'

import { useState, useEffect } from 'react'

interface Event {
  id: number
  name: string
  date: string
  location: string
}

export default function EventList() {
  const [events, setEvents] = useState<Event[]>([])

  useEffect(() => {
    // In a real application, you would fetch this data from an API
    const mockEvents: Event[] = [
      { id: 1, name: 'Tech Conference 2023', date: '2023-09-15', location: 'San Francisco, CA' },
      { id: 2, name: 'Music Festival', date: '2023-07-22', location: 'Austin, TX' },
      { id: 3, name: 'Food & Wine Expo', date: '2023-10-05', location: 'New York, NY' },
    ]
    setEvents(mockEvents)
  }, [])

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Event List</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Name</th>
            <th className="border p-2">Date</th>
            <th className="border p-2">Location</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.id}>
              <td className="border p-2">{event.name}</td>
              <td className="border p-2">{event.date}</td>
              <td className="border p-2">{event.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

