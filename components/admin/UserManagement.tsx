'use client'

import { useState, useEffect } from 'react'

interface User {
  id: number
  name: string
  email: string
  role: string
}

export default function UserManagement() {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    // In a real application, you would fetch this data from an API
    const mockUsers: User[] = [
      { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor' },
      { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Viewer' },
    ]
    setUsers(mockUsers)
  }, [])

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">User Management</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border p-2">{user.name}</td>
              <td className="border p-2">{user.email}</td>
              <td className="border p-2">{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

