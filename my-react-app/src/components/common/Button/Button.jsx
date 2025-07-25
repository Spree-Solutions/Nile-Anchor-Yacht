import React from 'react';
import styles from './Button.module.css';

export const Button = ({ 
  children, 
  variant = 'primary', // primary, secondary, outline, ghost
  size = 'medium', // small, medium, large
  type = 'button',
  disabled = false,
  loading = false,
  onClick,
  className = '',
  icon,
  iconPosition = 'right', // left, right
  ...props 
}) => {
  const buttonClasses = `
    ${styles.button}
    ${styles[variant]}
    ${styles[size]}
    ${disabled || loading ? styles.disabled : ''}
    ${className}
  `;

  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={buttonClasses}
      {...props}
    >
      {loading ? (
        <>
          <span className={styles.loader} />
          <span>Loading...</span>
        </>
      ) : (
        <>
          {icon && iconPosition === 'left' && (
            <span className={styles.iconLeft}>{icon}</span>
          )}
          {children}
          {icon && iconPosition === 'right' && (
            <span className={styles.iconRight}>{icon}</span>
          )}
        </>
      )}
    </button>
  );
};