import React, { useState} from 'react';
import type { FormEvent, ChangeEvent } from 'react';
import { FaTimes, FaUser, FaEnvelope, FaPhone, FaCalendarAlt, FaUserFriends, FaGlobeAfrica } from 'react-icons/fa';

interface EnquirePopupProps {
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  destination: string;
  travelDates: string;
  travelers: string;
  message: string;
}

const EnquirePopup: React.FC<EnquirePopupProps> = ({ onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    destination: '',
    travelDates: '',
    travelers: '1',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Replace with your Formspree form ID
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID_HERE', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          subject: `Safari Enquiry: ${formData.name} - ${formData.destination || 'No destination specified'}`
        })
      });

      if (response.ok) {
        setSubmitted(true);
        // Reset form after success
        setFormData({
          name: '',
          email: '',
          phone: '',
          destination: '',
          travelDates: '',
          travelers: '1',
          message: ''
        });
        
        // Close the popup after 3 seconds
        setTimeout(() => {
          onClose();
        }, 3000);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to submit form');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
      console.error('Form submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
      <div className="bg-white shadow-2xl overflow-hidden w-full max-w-2xl relative">
        {/* Move this button to be the first element in the container */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-[#c2a75c] transition z-50"
          aria-label="Close enquiry form"
        >
          <FaTimes className="text-2xl" />
        </button>
        
        <div className="h-40 bg-gradient-to-r from-[#c2a75c] to-[#a99252] relative overflow-hidden">
          {/* Add pointer-events-none to background image */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506260408121-e353d10b87c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-20 pointer-events-none" />
          <div className="relative z-10 h-full flex flex-col items-center justify-center p-4 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Plan Your Safari Adventure</h2>
            <p className="text-center max-w-md">Our experts will help you create the perfect safari experience</p>
          </div>
        </div>
        
        <div className="p-6 md:p-8">
          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
              {error}
            </div>
          )}
          
          {submitted ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Thank You!</h3>
              <p className="text-gray-600">Your enquiry has been submitted. Our safari experts will contact you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {/* Name Field */}
                <div className="relative">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <div className="relative">
                    <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c2a75c] focus:border-[#c2a75c] transition"
                      placeholder="John Doe"
                    />
                  </div>
                </div>
                
                {/* Email Field */}
                <div className="relative">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                  <div className="relative">
                    <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c2a75c] focus:border-[#c2a75c] transition"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                {/* Phone Field */}
                <div className="relative">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <div className="relative">
                    <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c2a75c] focus:border-[#c2a75c] transition"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>
                
                {/* Destination Field */}
                <div className="relative">
                  <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
                  <div className="relative">
                    <FaGlobeAfrica className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <select
                      id="destination"
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c2a75c] focus:border-[#c2a75c] transition appearance-none bg-white"
                    >
                      <option value="">Select Destination</option>
                      <option value="kenya">Kenya</option>
                      <option value="tanzania">Tanzania</option>
                      <option value="uganda">Uganda</option>
                      <option value="rwanda">Rwanda</option>
                      <option value="south-africa">South Africa</option>
                      <option value="botswana">Botswana</option>
                    </select>
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Travel Dates */}
                <div className="relative">
                  <label htmlFor="travelDates" className="block text-sm font-medium text-gray-700 mb-1">Travel Dates</label>
                  <div className="relative">
                    <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      id="travelDates"
                      name="travelDates"
                      value={formData.travelDates}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c2a75c] focus:border-[#c2a75c] transition"
                      placeholder="Approximate dates of travel"
                      onFocus={(e) => (e.target.type = 'date')}
                      onBlur={(e) => (e.target.type = 'text')}
                    />
                  </div>
                </div>
                
                {/* Number of Travelers */}
                <div className="relative">
                  <label htmlFor="travelers" className="block text-sm font-medium text-gray-700 mb-1">Number of Travelers</label>
                  <div className="relative">
                    <FaUserFriends className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <select
                      id="travelers"
                      name="travelers"
                      value={formData.travelers}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c2a75c] focus:border-[#c2a75c] transition appearance-none bg-white"
                    >
                      {Array.from({ length: 10 }, (_, i) => i + 1).map(num => (
                        <option key={num} value={num.toString()}>{num} {num === 1 ? 'Person' : 'People'}</option>
                      ))}
                      <option value="10+">10+ People</option>
                    </select>
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Message Field */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c2a75c] focus:border-[#c2a75c] transition"
                  placeholder="Tell us about your dream safari, special requests, or questions..."
                ></textarea>
              </div>
              
              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-[#c2a75c] hover:bg-[#a99252] text-white font-semibold py-3 px-6 rounded-lg transition flex items-center justify-center ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  'Send Enquiry'
                )}
              </button>
            </form>
          )}
        </div>
        
        <div className="bg-gray-50 px-6 py-4 text-center text-sm text-gray-500 border-t">
          <p>Your information is secure. We'll never share your details with third parties.</p>
        </div>
      </div>
    </div>
  );
};

export default EnquirePopup;