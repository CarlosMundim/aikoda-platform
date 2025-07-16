'use client'
import { useState } from 'react'
import Link from 'next/link'
import '../../../styles/globals.css'

export default function AdminUserManagement() {
  const [users] = useState([
    { id: 1, name: '管理者太郎', role: 'admin', email: 'admin@company.com', status: 'active' },
    { id: 2, name: 'HR花子', role: 'hr', email: 'hr@company.com', status: 'active' }
  ])

  return (
    <div className="container">
      {/* HOME Button - Top */}
      <div className="mb-6">
        <Link href="/" className="btn btn-outline">
          ホーム<br />
          <span className="text-xs">HOME</span>
        </Link>
      </div>
      
      <div className="admin-users-container">
      <div className="admin-header">
        <Link href="/" className="back-link">← ホームに戻る / Back to Home</Link>
        <h1 className="page-title">ユーザー管理 / Admin User Management</h1>
      </div>
      <div className="users-table">
        <table>
          <thead>
            <tr>
              <th>名前 / Name</th>
              <th>役割 / Role</th>
              <th>メール / Email</th>
              <th>ステータス / Status</th>
              <th>操作 / Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.role}</td>
                <td>{user.email}</td>
                <td>{user.status}</td>
                <td>
                  <button className="edit-btn">編集</button>
                  <button className="delete-btn">削除</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* HOME Button - Bottom */}
      <div className="mt-8 text-center">
        <Link href="/" className="btn btn-outline">
          ホーム<br />
          <span className="text-xs">HOME</span>
        </Link>
      </div>
    </div>
    </div>
  )
}
