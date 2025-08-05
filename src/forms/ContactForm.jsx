import React, { useState } from 'react';
import { Send } from 'lucide-react';
import Swal from 'sweetalert2';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); 
  };

 const validate = () => {
  let newErrors = {};

  if (!formData.name.trim()) {
    newErrors.name = 'Full Name is required';
  } else if (!/^[A-Za-z ]+$/.test(formData.name.trim())) {
    newErrors.name = 'Name should only contain letters and spaces';
  }

  // Validate Email
  if (!formData.email.trim()) {
    newErrors.email = 'Email is required';
  } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(formData.email)) {
    newErrors.email = 'Enter a valid email address';
  }

  // Validate Service
  if (!formData.service.trim()) {
    newErrors.service = 'Please select a service';
  }

  // Validate Message
  if (!formData.message.trim()) {
    newErrors.message = 'Message is required';
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      Swal.fire({
        icon: 'error',
        title: 'Validation Error',
        text: 'Please correct the errors before submitting.',
        confirmButtonColor: '#e53e3e'
      });
      return;
    }

    Swal.fire({
      icon: 'success',
      title: 'Message Sent!',
      text: "Thanks for reaching out. We'll get back to you shortly.",
      confirmButtonColor: '#6366f1'
    });

    setFormData({
      name: '',
      email: '',
      company: '',
      service: '',
      message: ''
    });
    setErrors({});
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-4" >
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
      <p className="text-gray-600 mb-4 text-lg leading-relaxed">
        Fill out the form below and we'll get back to you within 24 hours
      </p>

      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 border outline-none ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              } rounded-lg focus:ring-2 focus:ring-indigo-500`}
              placeholder="Your full name"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 border outline-none ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              } rounded-lg focus:ring-2 focus:ring-indigo-500`}
              placeholder="your@email.com"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="Your company"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Service Interest *</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 border outline-none ${
                errors.service ? 'border-red-500' : 'border-gray-300'
              } rounded-lg focus:ring-2 focus:ring-indigo-500`}
            >
              <option value="">Select a service</option>
              <option value="website-development">Website Development</option>
              <option value="seo-optimization">SEO Optimization</option>
              <option value="both">Both Website & SEO</option>
              <option value="consultation">Free Consultation</option>
            </select>
            {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service}</p>}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
          <textarea
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleInputChange}
            className={`w-full px-4 py-2 border outline-none ${
              errors.message ? 'border-red-500' : 'border-gray-300'
            } rounded-lg focus:ring-2 focus:ring-indigo-500 resize-none`}
            placeholder="Tell us about your project and requirements..."
          />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>

        <button
          type="submit"
          className="w-2/5 mx-auto bg-gradient-to-r from-indigo-600 to-orange-500 hover:from-indigo-700 hover:to-orange-600 text-white px-8 py-2 rounded-lg font-semibold text-lg transition-transform transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
        >
          <Send className="h-5 w-5" />
          <span>Send Message</span>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
