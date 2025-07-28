// Mock API delay for realistic loading states
const delay = (ms = 1000) => new Promise(resolve => setTimeout(resolve, ms));

// Mock success/error responses
const mockResponse = (data, success = true, message = '') => ({
  success,
  data: success ? data : null,
  message: message || (success ? 'Success' : 'Error occurred'),
  timestamp: new Date().toISOString()
});

// Booking API (mock)
export const bookingAPI = {
  // Submit booking request
  submitBooking: async (bookingData) => {
    await delay(1500);
    
    // Simulate random success (90% success rate)
    const success = Math.random() > 0.1;
    
    if (success) {
      const bookingId = `BK${Date.now()}`;
      return mockResponse({
        bookingId,
        status: 'pending',
        ...bookingData,
        createdAt: new Date().toISOString()
      }, true, 'Booking submitted successfully');
    } else {
      throw new Error('Booking service temporarily unavailable');
    }
  },

  // Check availability
  checkAvailability: async (yacht, date, startTime, endTime) => {
    await delay(800);
    
    // Simulate availability check
    const isAvailable = Math.random() > 0.3; // 70% availability
    
    return mockResponse({
      yacht,
      date,
      startTime,
      endTime,
      isAvailable,
      alternativeTimes: isAvailable ? [] : [
        { start: '10:00 AM', end: '2:00 PM' },
        { start: '3:00 PM', end: '7:00 PM' }
      ]
    });
  },

  // Get booking by ID
  getBooking: async (bookingId) => {
    await delay(500);
    
    return mockResponse({
      bookingId,
      status: 'confirmed',
      yacht: 'BELLA',
      date: '2024-12-25',
      startTime: '2:00 PM',
      endTime: '6:00 PM',
      totalAmount: 8000,
      deposit: 2400,
      createdAt: new Date().toISOString()
    });
  }
};

// Contact API (mock)
export const contactAPI = {
  // Submit contact form
  submitContact: async (contactData) => {
    await delay(1200);
    
    const success = Math.random() > 0.05; // 95% success rate
    
    if (success) {
      return mockResponse({
        ticketId: `CT${Date.now()}`,
        ...contactData,
        status: 'received',
        createdAt: new Date().toISOString()
      }, true, 'Your message has been sent successfully');
    } else {
      throw new Error('Failed to send message. Please try again.');
    }
  },

  // Subscribe to newsletter
  subscribeNewsletter: async (email) => {
    await delay(800);
    
    return mockResponse({
      email,
      subscribed: true,
      subscribedAt: new Date().toISOString()
    }, true, 'Successfully subscribed to newsletter');
  }
};

// Review API (mock)
export const reviewAPI = {
  // Submit review
  submitReview: async (reviewData) => {
    await delay(1000);
    
    return mockResponse({
      reviewId: `RV${Date.now()}`,
      ...reviewData,
      status: 'pending',
      createdAt: new Date().toISOString()
    }, true, 'Thank you for your review');
  },

  // Get reviews
  getReviews: async (filters = {}) => {
    await delay(600);
    
    // Mock reviews data
    const reviews = [
      {
        id: 1,
        author: 'John Doe',
        rating: 5,
        text: 'Amazing experience!',
        date: '2024-11-20',
        verified: true
      },
      {
        id: 2,
        author: 'Jane Smith',
        rating: 4,
        text: 'Great service, beautiful yacht',
        date: '2024-11-15',
        verified: true
      }
    ];
    
    return mockResponse({
      reviews,
      total: reviews.length,
      page: 1,
      pageSize: 10
    });
  }
};

// Analytics API (mock)
export const analyticsAPI = {
  // Track page view
  trackPageView: async (page) => {
    // In real app, this would send to analytics service
    console.log('Page view tracked:', page);
    return Promise.resolve();
  },

  // Track event
  trackEvent: async (category, action, label, value) => {
    console.log('Event tracked:', { category, action, label, value });
    return Promise.resolve();
  },

  // Track conversion
  trackConversion: async (type, value) => {
    console.log('Conversion tracked:', { type, value });
    return Promise.resolve();
  }
};

// Local Storage helpers
export const storage = {
  // Get item from localStorage
  get: (key) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error('Error getting from storage:', error);
      return null;
    }
  },

  // Set item in localStorage
  set: (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.error('Error setting storage:', error);
      return false;
    }
  },

  // Remove item from localStorage
  remove: (key) => {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error('Error removing from storage:', error);
      return false;
    }
  },

  // Clear all localStorage
  clear: () => {
    try {
      localStorage.clear();
      return true;
    } catch (error) {
      console.error('Error clearing storage:', error);
      return false;
    }
  }
};

// Session Storage helpers
export const session = {
  get: (key) => {
    try {
      const item = sessionStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error('Error getting from session:', error);
      return null;
    }
  },

  set: (key, value) => {
    try {
      sessionStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.error('Error setting session:', error);
      return false;
    }
  },

  remove: (key) => {
    try {
      sessionStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error('Error removing from session:', error);
      return false;
    }
  },

  clear: () => {
    try {
      sessionStorage.clear();
      return true;
    } catch (error) {
      console.error('Error clearing session:', error);
      return false;
    }
  }
};

// Form data persistence
export const formPersistence = {
  save: (formId, data) => {
    return session.set(`form_${formId}`, {
      data,
      savedAt: new Date().toISOString()
    });
  },

  load: (formId) => {
    const saved = session.get(`form_${formId}`);
    if (saved && saved.data) {
      // Check if saved data is not too old (24 hours)
      const savedTime = new Date(saved.savedAt);
      const now = new Date();
      const hoursDiff = (now - savedTime) / (1000 * 60 * 60);
      
      if (hoursDiff < 24) {
        return saved.data;
      } else {
        session.remove(`form_${formId}`);
      }
    }
    return null;
  },

  clear: (formId) => {
    return session.remove(`form_${formId}`);
  }
};