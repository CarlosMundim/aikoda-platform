import React from 'react'

interface SAPSelectOption {
  value: string
  label: string
}

interface SAPSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: SAPSelectOption[]
  error?: boolean
  helperText?: string
}

export function SAPSelect({ options, error, helperText, className = '', ...props }: SAPSelectProps) {
  return (
    <div className="w-full">
      <select
        className={`sap-input ${error ? 'border-red-500' : ''} ${className}`}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {helperText && (
        <p className={`mt-1 text-sm ${error ? 'text-red-600' : 'text-gray-500'}`}>
          {helperText}
        </p>
      )}
    </div>
  )
}