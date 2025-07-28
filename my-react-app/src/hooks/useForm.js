import { useState, useCallback } from 'react';

export const useForm = (initialValues = {}, options = {}) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { 
    validate, 
    onSubmit,
    validateOnChange = true,
    validateOnBlur = true 
  } = options;

  // Handle input change
  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setValues(prev => ({
      ...prev,
      [name]: newValue
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }

    // Validate on change if enabled
    if (validateOnChange && validate) {
      const fieldError = validate({ [name]: newValue })[name];
      if (fieldError) {
        setErrors(prev => ({
          ...prev,
          [name]: fieldError
        }));
      }
    }
  }, [errors, validate, validateOnChange]);

  // Handle input blur
  const handleBlur = useCallback((e) => {
    const { name } = e.target;
    
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));

    // Validate on blur if enabled
    if (validateOnBlur && validate) {
      const fieldError = validate(values)[name];
      if (fieldError) {
        setErrors(prev => ({
          ...prev,
          [name]: fieldError
        }));
      }
    }
  }, [values, validate, validateOnBlur]);

  // Handle form submission
  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate all fields
    if (validate) {
      const validationErrors = validate(values);
      setErrors(validationErrors);
      
      // Mark all fields as touched
      const allTouched = Object.keys(values).reduce((acc, key) => ({
        ...acc,
        [key]: true
      }), {});
      setTouched(allTouched);

      // If there are errors, don't submit
      if (Object.keys(validationErrors).length > 0) {
        setIsSubmitting(false);
        return;
      }
    }

    // Call onSubmit callback
    if (onSubmit) {
      try {
        await onSubmit(values);
        // Reset form on successful submission
        resetForm();
      } catch (error) {
        console.error('Form submission error:', error);
      }
    }

    setIsSubmitting(false);
  }, [values, validate, onSubmit]);

  // Reset form
  const resetForm = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
  }, [initialValues]);

  // Set field value
  const setFieldValue = useCallback((name, value) => {
    setValues(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  // Set field error
  const setFieldError = useCallback((name, error) => {
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  }, []);

  // Set multiple values
  const setMultipleValues = useCallback((newValues) => {
    setValues(prev => ({
      ...prev,
      ...newValues
    }));
  }, []);

  return {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
    setFieldValue,
    setFieldError,
    setMultipleValues,
    isValid: Object.keys(errors).length === 0,
    isDirty: JSON.stringify(values) !== JSON.stringify(initialValues)
  };
};

// Custom hook for field array (dynamic form fields)
export const useFieldArray = (name, initialValue = []) => {
  const [fields, setFields] = useState(initialValue);

  const append = useCallback((value) => {
    setFields(prev => [...prev, value]);
  }, []);

  const prepend = useCallback((value) => {
    setFields(prev => [value, ...prev]);
  }, []);

  const remove = useCallback((index) => {
    setFields(prev => prev.filter((_, i) => i !== index));
  }, []);

  const move = useCallback((from, to) => {
    setFields(prev => {
      const newFields = [...prev];
      const item = newFields.splice(from, 1)[0];
      newFields.splice(to, 0, item);
      return newFields;
    });
  }, []);

  const replace = useCallback((index, value) => {
    setFields(prev => {
      const newFields = [...prev];
      newFields[index] = value;
      return newFields;
    });
  }, []);

  const reset = useCallback(() => {
    setFields(initialValue);
  }, [initialValue]);

  return {
    fields,
    append,
    prepend,
    remove,
    move,
    replace,
    reset
  };
};