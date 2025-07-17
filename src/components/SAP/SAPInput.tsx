import React from 'react'

interface SAPInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
  helperText?: string
}

export function SAPInput({ error, helperText, className = '', ...props }: SAPInputProps) {
  return (
    <div className="w-full">
      <input
        className={`sap-input ${error ? 'border-red-500' : ''} ${className}`}
        {...props}
      />
      {helperText && (
        <p className={`mt-1 text-sm ${error ? 'text-red-600' : 'text-gray-500'}`}>
          {helperText}
        </p>
      )}
    </div>
  )
}