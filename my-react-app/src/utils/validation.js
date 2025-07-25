// Email validation
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Phone validation
export const isValidPhone = (phone) => {
  const phoneRegex = /^\+?[\d\s-()]+$/;
  return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
};

// Egyptian phone validation
export const isValidEgyptianPhone = (phone) => {
  const cleaned = phone.replace(/\D/g, '');
  const egyptianPhoneRegex = /^(20)?(10|11|12|15)\d{8}$/;
  return egyptianPhoneRegex.test(cleaned);
};

// Name validation
export const isValidName = (name) => {
  return name.trim().length >= 2 && /^[a-zA-Z\s'-]+$/.test(name);
};

// Date validation
export const isValidDate = (date) => {
  const d = new Date(date);
  return d instanceof Date && !isNaN(d);
};

// Future date validation
export const isFutureDate = (date) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const checkDate = new Date(date);
  checkDate.setHours(0, 0, 0, 0);
  return checkDate > today;
};

// Time validation
export const isValidTime = (time) => {
  const timeRegex = /^(0?[1-9]|1[0-2]):[0-5][0-9]\s?(AM|PM|am|pm)$/;
  return timeRegex.test(time);
};

// Time range validation
export const isValidTimeRange = (startTime, endTime) => {
  const start = new Date(`2000-01-01 ${startTime}`);
  const end = new Date(`2000-01-01 ${endTime}`);
  return end > start;
};

// Required field validation
export const isRequired = (value) => {
  if (typeof value === 'string') return value.trim().length > 0;
  if (Array.isArray(value)) return value.length > 0;
  return value !== null && value !== undefined;
};

// Min length validation
export const hasMinLength = (value, minLength) => {
  return value.length >= minLength;
};

// Max length validation
export const hasMaxLength = (value, maxLength) => {
  return value.length <= maxLength;
};

// Number range validation
export const isInRange = (value, min, max) => {
  const num = Number(value);
  return !isNaN(num) && num >= min && num <= max;
};

// URL validation
export const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

// Booking form validation
export const validateBookingForm = (data) => {
  const errors = {};

  // Full Name
  if (!isRequired(data.fullName)) {
    errors.fullName = 'Full name is required';
  } else if (!isValidName(data.fullName)) {
    errors.fullName = 'Please enter a valid name';
  }

  // Email
  if (!isRequired(data.email)) {
    errors.email = 'Email is required';
  } else if (!isValidEmail(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  // Phone
  if (!isRequired(data.phone)) {
    errors.phone = 'Phone number is required';
  } else if (!isValidEgyptianPhone(data.phone)) {
    errors.phone = 'Please enter a valid Egyptian phone number';
  }

  // Yacht
  if (!isRequired(data.yacht)) {
    errors.yacht = 'Please select a yacht';
  }

  // Date
  if (!isRequired(data.date)) {
    errors.date = 'Date is required';
  } else if (!isValidDate(data.date)) {
    errors.date = 'Please select a valid date';
  } else if (!isFutureDate(data.date)) {
    errors.date = 'Please select a future date';
  }

  // Event Type
  if (!isRequired(data.eventType)) {
    errors.eventType = 'Please select an event type';
  }

  // Time validation
  if (!isRequired(data.startingHour)) {
    errors.startingHour = 'Starting time is required';
  } else if (!isValidTime(data.startingHour)) {
    errors.startingHour = 'Please select a valid time';
  }

  if (!isRequired(data.endingHour)) {
    errors.endingHour = 'Ending time is required';
  } else if (!isValidTime(data.endingHour)) {
    errors.endingHour = 'Please select a valid time';
  } else if (data.startingHour && !isValidTimeRange(data.startingHour, data.endingHour)) {
    errors.endingHour = 'Ending time must be after starting time';
  }

  return errors;
};

// Contact form validation
export const validateContactForm = (data) => {
  const errors = {};

  // Name
  if (!isRequired(data.name)) {
    errors.name = 'Name is required';
  } else if (!isValidName(data.name)) {
    errors.name = 'Please enter a valid name';
  }

  // Email
  if (!isRequired(data.email)) {
    errors.email = 'Email is required';
  } else if (!isValidEmail(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  // Phone (optional but validate if provided)
  if (data.phone && !isValidPhone(data.phone)) {
    errors.phone = 'Please enter a valid phone number';
  }

  // Subject
  if (!isRequired(data.subject)) {
    errors.subject = 'Subject is required';
  } else if (!hasMinLength(data.subject, 3)) {
    errors.subject = 'Subject must be at least 3 characters';
  }

  // Message
  if (!isRequired(data.message)) {
    errors.message = 'Message is required';
  } else if (!hasMinLength(data.message, 10)) {
    errors.message = 'Message must be at least 10 characters';
  } else if (!hasMaxLength(data.message, 1000)) {
    errors.message = 'Message must be less than 1000 characters';
  }

  return errors;
};

// Newsletter form validation
export const validateNewsletterForm = (data) => {
  const errors = {};

  if (!isRequired(data.email)) {
    errors.email = 'Email is required';
  } else if (!isValidEmail(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  return errors;
};

// Review form validation
export const validateReviewForm = (data) => {
  const errors = {};

  // Name
  if (!isRequired(data.name)) {
    errors.name = 'Name is required';
  }

  // Email
  if (!isRequired(data.email)) {
    errors.email = 'Email is required';
  } else if (!isValidEmail(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  // Rating
  if (!isRequired(data.rating)) {
    errors.rating = 'Please select a rating';
  } else if (!isInRange(data.rating, 1, 5)) {
    errors.rating = 'Rating must be between 1 and 5';
  }

  // Review
  if (!isRequired(data.review)) {
    errors.review = 'Review is required';
  } else if (!hasMinLength(data.review, 10)) {
    errors.review = 'Review must be at least 10 characters';
  }

  return errors;
};

// Create a validator function
export const createValidator = (rules) => {
  return (data) => {
    const errors = {};

    Object.keys(rules).forEach(field => {
      const fieldRules = rules[field];
      const value = data[field];

      for (const rule of fieldRules) {
        const error = rule(value, data);
        if (error) {
          errors[field] = error;
          break; // Stop at first error for this field
        }
      }
    });

    return errors;
  };
};

// Validation rules factory
export const rules = {
  required: (message = 'This field is required') => 
    (value) => !isRequired(value) ? message : null,
  
  email: (message = 'Please enter a valid email') => 
    (value) => value && !isValidEmail(value) ? message : null,
  
  minLength: (length, message) => 
    (value) => value && !hasMinLength(value, length) 
      ? message || `Must be at least ${length} characters` 
      : null,
  
  maxLength: (length, message) => 
    (value) => value && !hasMaxLength(value, length) 
      ? message || `Must be no more than ${length} characters` 
      : null,
  
  phone: (message = 'Please enter a valid phone number') => 
    (value) => value && !isValidPhone(value) ? message : null,
  
  egyptianPhone: (message = 'Please enter a valid Egyptian phone number') => 
    (value) => value && !isValidEgyptianPhone(value) ? message : null,
  
  futureDate: (message = 'Please select a future date') => 
    (value) => value && !isFutureDate(value) ? message : null,
  
  custom: (validator, message) => 
    (value, data) => !validator(value, data) ? message : null
};