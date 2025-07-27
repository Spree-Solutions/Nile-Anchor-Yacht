import React, { forwardRef } from 'react';
import styles from './Select.module.css';

export const Select = forwardRef(({
  label,
  name,
  value,
  onChange,
  onBlur,
  options = [],
  placeholder = 'Select an option',
  error,
  helperText,
  required = false,
  disabled = false,
  multiple = false,
  className = '',
  selectClassName = '',
  ...props
}, ref) => {
  const hasError = !!error;

  return (
    <div className={`${styles.selectWrapper} ${className}`}>
      {label && (
        <label 
          htmlFor={name}
          className={`${styles.label} ${required ? styles.required : ''}`}
        >
          {label}
        </label>
      )}

      <div className={`${styles.selectContainer} ${hasError ? styles.error : ''}`}>
        <select
          ref={ref}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
          required={required}
          multiple={multiple}
          className={`${styles.select} ${selectClassName}`}
          aria-invalid={hasError}
          aria-describedby={hasError ? `${name}-error` : undefined}
          {...props}
        >
          {!multiple && placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          
          {options.map((option, index) => (
            <option 
              key={option.value || index} 
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>

        <span className={styles.arrow}>
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </div>

      {(error || helperText) && (
        <span 
          id={`${name}-error`}
          className={`${styles.message} ${hasError ? styles.errorMessage : styles.helperText}`}
        >
          {error || helperText}
        </span>
      )}
    </div>
  );
});

Select.displayName = 'Select';