import React, { useState } from 'react';
import { useResponsive } from '../../../hooks/useResponsive';

export const BookingForm = () => {
  const { isMobile, isTablet, isDesktop } = useResponsive();
  
  const [formData, setFormData] = useState({
    fullName: '',
    yacht: '',
    phone: '+20',
    date: '',
    email: '',
    eventType: '',
    startingHour: '',
    endingHour: '',
  });

  const yachtOptions = [
    'BELLA - Luxury Yacht',
    'ZEIN - Speed Yacht',
    'VIDA - Family Yacht',
    'LIBERTY - Premium Yacht'
  ];

  const eventTypes = [
    'Wedding',
    'Birthday Party',
    'Corporate Event',
    'Anniversary',
    'Private Party',
    'Other'
  ];

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM',
    '05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM'
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <section className="relative rounded-2xl overflow-hidden">
      <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} items-center gap-8 lg:gap-12`}>
        
        {/* Form Section */}
        <div className={`${isMobile ? 'w-full order-2' : 'flex-1'} p-6 md:p-8 lg:p-12`}>
          {/* Header */}
          <div className="mb-8">
            <p className="font-['Marcellus'] text-[#a18c6d] text-sm tracking-[1.5px] mb-4">
              YACHT BOOKING
            </p>
            <h2 className="font-['Marcellus'] text-black text-3xl md:text-4xl lg:text-5xl">
              Book Your Dream Yacht
            </h2>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Row 1: Name & Yacht */}
            <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-4`}>
              <div>
                <label className="block text-[#4b4d4e] text-sm mb-2">Full name</label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border border-[#183f5e33] rounded-lg focus:outline-none focus:border-[#003950] transition-colors"
                  required
                />
              </div>
              
              <div>
                <label className="block text-[#4b4d4e] text-sm mb-2">Yacht</label>
                <select
                  value={formData.yacht}
                  onChange={(e) => handleInputChange('yacht', e.target.value)}
                  className="w-full px-4 py-3 border border-[#183f5e33] rounded-lg focus:outline-none focus:border-[#003950] transition-colors appearance-none bg-white"
                  required
                >
                  <option value="">Select your yacht</option>
                  {yachtOptions.map((yacht, idx) => (
                    <option key={idx} value={yacht}>{yacht}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Row 2: Phone & Date */}
            <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-4`}>
              <div>
                <label className="block text-[#4b4d4e] text-sm mb-2">Phone</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="+20"
                  className="w-full px-4 py-3 border border-[#183f5e33] rounded-lg focus:outline-none focus:border-[#003950] transition-colors"
                  required
                />
              </div>
              
              <div>
                <label className="block text-[#4b4d4e] text-sm mb-2">Date</label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => handleInputChange('date', e.target.value)}
                  className="w-full px-4 py-3 border border-[#183f5e33] rounded-lg focus:outline-none focus:border-[#003950] transition-colors"
                  required
                />
              </div>
            </div>

            {/* Row 3: Email & Event Type */}
            <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-4`}>
              <div>
                <label className="block text-[#4b4d4e] text-sm mb-2">Your Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="Enter Email"
                  className="w-full px-4 py-3 border border-[#183f5e33] rounded-lg focus:outline-none focus:border-[#003950] transition-colors"
                  required
                />
              </div>
              
              <div>
                <label className="block text-[#4b4d4e] text-sm mb-2">Event Type</label>
                <select
                  value={formData.eventType}
                  onChange={(e) => handleInputChange('eventType', e.target.value)}
                  className="w-full px-4 py-3 border border-[#183f5e33] rounded-lg focus:outline-none focus:border-[#003950] transition-colors appearance-none bg-white"
                  required
                >
                  <option value="">Select event type</option>
                  {eventTypes.map((type, idx) => (
                    <option key={idx} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Row 4: Start & End Time */}
            <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-4`}>
              <div>
                <label className="block text-[#4b4d4e] text-sm mb-2">Starting hour</label>
                <select
                  value={formData.startingHour}
                  onChange={(e) => handleInputChange('startingHour', e.target.value)}
                  className="w-full px-4 py-3 border border-[#183f5e33] rounded-lg focus:outline-none focus:border-[#003950] transition-colors appearance-none bg-white"
                  required
                >
                  <option value="">Select starting hour</option>
                  {timeSlots.map((time, idx) => (
                    <option key={idx} value={time}>{time}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-[#4b4d4e] text-sm mb-2">Ending hour</label>
                <select
                  value={formData.endingHour}
                  onChange={(e) => handleInputChange('endingHour', e.target.value)}
                  className="w-full px-4 py-3 border border-[#183f5e33] rounded-lg focus:outline-none focus:border-[#003950] transition-colors appearance-none bg-white"
                  required
                >
                  <option value="">Select ending hour</option>
                  {timeSlots.map((time, idx) => (
                    <option key={idx} value={time}>{time}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full md:w-auto px-12 py-4 bg-[#183f5e] text-white font-medium rounded-lg hover:bg-[#2a5a7a] transition-all duration-300 transform hover:scale-105"
            >
              BOOK NOW
            </button>
          </form>
        </div>

        {/* Image Section */}
        <div className={`${isMobile ? 'w-full order-1' : 'w-1/3 lg:w-2/5'}`}>
          <img
            src="/images/yachts/liberty/liberty-111.webp"
            alt="Liberty yacht booking"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Background Decoration */}
      {!isMobile && (
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#a18c6d]/10 rounded-full blur-3xl" />
      )}
    </section>
  );
};