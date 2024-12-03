'use client'

import { useState } from 'react'
import EventList from '../admin/EventList'
import AddEventForm from '../admin/AddEventForm'
import UserManagement from '../admin/UserManagement'
import Analytics from '../admin/Analytics'

type Tab = 'events' | 'users' | 'analytics'

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<Tab>('events')

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      <div className="flex mb-6">
        <button
          className={`mr-4 px-4 py-2 rounded ${activeTab === 'events' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('events')}
        >
          Events
        </button>
        <button
          className={`mr-4 px-4 py-2 rounded ${activeTab === 'users' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('users')}
        >
          Users
        </button>
        <button
          className={`px-4 py-2 rounded ${activeTab === 'analytics' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('analytics')}
        >
          Analytics
        </button>
      </div>
      {activeTab === 'events' && (
        <div>
          <EventList />
          <AddEventForm />
        </div>
      )}
      {activeTab === 'users' && <UserManagement />}
      {activeTab === 'analytics' && <Analytics />}
    </div>
  )
}

