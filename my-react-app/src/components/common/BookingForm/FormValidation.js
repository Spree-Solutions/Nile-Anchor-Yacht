export const validateBookingForm = (values) => {
  const errors = {};

  // Full Name
  if (!values.fullName.trim()) {
    errors.fullName = 'Full name is required';
  } else if (values.fullName.trim().length < 3) {
    errors.fullName = 'Full name must be at least 3 characters';
  }

  // Yacht
  if (!values.yacht) {
    errors.yacht = 'Please select a yacht';
  }

  // Phone
  const phoneRegex = /^\+20\d{9,10}$/;
  if (!values.phone) {
    errors.phone = 'Phone number is required';
  } else if (!phoneRegex.test(values.phone)) {
    errors.phone = 'Please enter a valid Egyptian phone number';
  }

  // Date
  if (!values.date) {
    errors.date = 'Date is required';
  } else {
    const selectedDate = new Date(values.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (selectedDate < today) {
      errors.date = 'Date cannot be in the past';
    }
  }

  // Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!emailRegex.test(values.email)) {
    errors.email = 'Please enter a valid email address';
  }

  // Event Type
  if (!values.eventType) {
    errors.eventType = 'Please select an event type';
  }

  // Time Validation
  if (!values.startingHour) {
    errors.startingHour = 'Starting hour is required';
  }

  if (!values.endingHour) {
    errors.endingHour = 'Ending hour is required';
  }

  if (values.startingHour && values.endingHour) {
    const start = new Date(`2000-01-01 ${values.startingHour}`);
    const end = new Date(`2000-01-01 ${values.endingHour}`);
    
    if (end <= start) {
      errors.endingHour = 'Ending hour must be after starting hour';
    }
  }

  return errors;
};