import React from 'react'

interface SAPButtonProps {
  variant: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  disabled?: boolean
  onClick?: () => void
  children: React.ReactNode
  className?: string
}

export function SAPButton({ 
  variant, 
  size = 'md', 
  loading = false, 
  disabled = false, 
  onClick, 
  children,
  className = ''
}: SAPButtonProps) {
  return (
    <button
      className={`sap-button ${variant} ${size} ${className}`}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading && <div className="sap-loading"></div>}
      {children}
    </button>
  )
}

export default SAPButton