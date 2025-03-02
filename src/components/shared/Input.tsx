'use client';

import { ChangeEvent, forwardRef } from 'react';

interface InputProps {
  id: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  label?: string;
  error?: string;
  required?: boolean;
  className?: string;
  disabled?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      name,
      type = 'text',
      value,
      onChange,
      placeholder,
      label,
      error,
      required = false,
      className = '',
      disabled = false,
    },
    ref
  ) => {
    const baseStyles = 'w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#7C5CFF]';
    const errorStyles = error ? 'border-red-500' : 'border-gray-300';
    const disabledStyles = disabled ? 'bg-gray-100 cursor-not-allowed' : '';
    
    const inputStyles = `${baseStyles} ${errorStyles} ${disabledStyles} ${className}`;
    
    return (
      <div className="w-full">
        {label && (
          <label htmlFor={id} className="block text-sm font-medium text-[#2D2D2D] mb-1">
            {label} {required && <span className="text-red-500">*</span>}
          </label>
        )}
        <input
          ref={ref}
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          className={inputStyles}
        />
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input; 