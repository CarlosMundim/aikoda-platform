'use client'
import { useState } from 'react'
import Link from 'next/link'
import '../../../styles/globals.css'

export default function SystemConfiguration() {
  const [config, setConfig] = useState({
    siteName: '人材管理プラットフォーム',
    maxFileSize: '5MB',
    sessionTimeout: '30分',
    emailNotifications: true,
    maintenanceMode: false
  })

  return (
    <div className="container">
      {/* HOME Button - Top */}
      <div className="mb-6">
        <Link href="/" className="btn btn-outline">
          ホーム<br />
          <span className="text-xs">HOME</span>
        </Link>
      </div>
      
      <div className="system-config-container">
      <div className="config-header">
        <Link href="/" className="back-link">← ホームに戻る / Back to Home</Link>
        <h1 className="page-title">システム設定 / System Configuration</h1>
      </div>
      <div className="config-sections">
        <div className="config-section">
          <h2>基本設定 / Basic Settings</h2>
          <div className="config-item">
            <label>サイト名 / Site Name</label>
            <input type="text" value={config.siteName} onChange={(e) => setConfig({...config, siteName: e.target.value})} />
          </div>
          <div className="config-item">
            <label>最大ファイルサイズ / Max File Size</label>
            <input type="text" value={config.maxFileSize} onChange={(e) => setConfig({...config, maxFileSize: e.target.value})} />
          </div>
          <div className="config-item">
            <label>セッションタイムアウト / Session Timeout</label>
            <input type="text" value={config.sessionTimeout} onChange={(e) => setConfig({...config, sessionTimeout: e.target.value})} />
          </div>
        </div>
        <div className="config-section">
          <h2>通知設定 / Notification Settings</h2>
          <div className="config-item">
            <label>
              <input 
                type="checkbox" 
                checked={config.emailNotifications} 
                onChange={(e) => setConfig({...config, emailNotifications: e.target.checked})} 
              />
              メール通知 / Email Notifications
            </label>
          </div>
          <div className="config-item">
            <label>
              <input 
                type="checkbox" 
                checked={config.maintenanceMode} 
                onChange={(e) => setConfig({...config, maintenanceMode: e.target.checked})} 
              />
              メンテナンスモード / Maintenance Mode
            </label>
          </div>
        </div>
      </div>
      <div className="config-actions">
        <button className="save-btn">保存 / Save</button>
        <button className="reset-btn">リセット / Reset</button>
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
