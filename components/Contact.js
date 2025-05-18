import { useState } from 'react';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real implementation, you would send this data to a server
    // For now, we'll just simulate a successful submission
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Thank you for your message! We will get back to you soon.'
    });
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };
  
  const faqs = [
    {
      question: "What time is check-in and check-out?",
      answer: "Check-in is at 3:00 PM and check-out is at 11:00 AM. Early check-in or late check-out may be available upon request."
    },
    {
      question: "Is there parking available?",
      answer: "Yes, we offer free parking for our guests on the property."
    },
    {
      question: "Are pets allowed?",
      answer: "We're sorry, but pets are not allowed at our property to ensure comfort for all guests."
    },
    {
      question: "Is Wi-Fi available?",
      answer: "Yes, complimentary high-speed Wi-Fi is available throughout the property."
    },
    {
      question: "How far is the property from the beach?",
      answer: "The nearest beach is approximately a 10-minute drive from the property."
    }
  ];
  
  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions or need more information? Reach out to us and we'll be happy to help.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            
            {formStatus.submitted && (
              <div className={`mb-6 p-4 rounded-lg ${formStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {formStatus.message}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number (optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
          
          {/* Contact Info & FAQs */}
          <div>
            {/* Contact Info */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <PhoneIcon className="w-6 h-6 text-primary mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <a href="tel:+18762150611" className="text-gray-600 hover:text-primary transition-colors">
                      +1 (876) 215-0611
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <EnvelopeIcon className="w-6 h-6 text-primary mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a href="mailto:info@thenorwich.com" className="text-gray-600 hover:text-primary transition-colors">
                      info@thenorwich.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPinIcon className="w-6 h-6 text-primary mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium">Address</h4>
                    <p className="text-gray-600">
                      The Norwich, Port Antonio, Jamaica
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* FAQs */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-6">Frequently Asked Questions</h3>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index}>
                    <h4 className="font-semibold text-lg mb-2">{faq.question}</h4>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 