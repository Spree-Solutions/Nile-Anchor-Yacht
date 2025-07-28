import React, { forwardRef } from 'react';
import styles from './Input.module.css';

export const Input = forwardRef(({
  label,
  name,
  type = 'text',
  value,
  onChange,
  onBlur,
  onFocus,
  placeholder,
  error,
  helperText,
  required = false,
  disabled = false,
  readOnly = false,
  autoComplete,
  icon,
  iconPosition = 'left',
  className = '',
  inputClassName = '',
  ...props
}, ref) => {
  const hasError = !!error;

  return (
    <div className={`${styles.inputWrapper} ${className}`}>
      {label && (
        <label 
          htmlFor={name}
          className={`${styles.label} ${required ? styles.required : ''}`}
        >
          {label}
        </label>
      )}

      <div className={`${styles.inputContainer} ${hasError ? styles.error : ''}`}>
        {icon && iconPosition === 'left' && (
          <span className={`${styles.icon} ${styles.iconLeft}`}>
            {icon}
          </span>
        )}

        <input
          ref={ref}
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
          required={required}
          autoComplete={autoComplete}
          className={`${styles.input} ${icon ? styles[`has${iconPosition}Icon`] : ''} ${inputClassName}`}
          aria-invalid={hasError}
          aria-describedby={hasError ? `${name}-error` : undefined}
          {...props}
        />

        {icon && iconPosition === 'right' && (
          <span className={`${styles.icon} ${styles.iconRight}`}>
            {icon}
          </span>
        )}
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

Input.displayName = 'Input';