import React, { useState } from 'react';
import Swal from 'sweetalert2';

const GetAQuote = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    const nameRegex = /^[a-zA-Z\s]{2,}$/;
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    else if (!nameRegex.test(formData.name.trim())) newErrors.name = 'Enter a valid name';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!emailRegex.test(formData.email)) newErrors.email = 'Enter a valid email';

    const phoneTrimmed = formData.phone.replace(/\D/g, ''); // Remove non-digits
    if (!phoneTrimmed) newErrors.phone = 'Phone is required';
    else if (phoneTrimmed.length !== 10) newErrors.phone = 'Enter a valid 10-digit phone number';

    if (!formData.service) newErrors.service = 'Please select a service';

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' })); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log('Quote Request Submitted:', formData);

    Swal.fire({
      title: 'Thank you!',
      text: 'We have received your quote request.',
      icon: 'success',
      timer: 3000,
      showConfirmButton: false,
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-100 py-12 px-4">
      <div className="max-w-2xl mx-auto bg-white shadow-2xl rounded-xl p-10">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Get a Quote</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className={`w-full border ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              } rounded-md p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none`}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className={`w-full border ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              } rounded-md p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. 9876543210"
              className={`w-full border ${
                errors.phone ? 'border-red-500' : 'border-gray-300'
              } rounded-md p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none`}
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>

          {/* Service */}
          <div>
            <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-1">
              Service Required
            </label>
            <select
              name="service"
              id="service"
              value={formData.service}
              onChange={handleChange}
              className={`w-full border ${
                errors.service ? 'border-red-500' : 'border-gray-300'
              } rounded-md p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white`}
            >
              <option value="">-- Select a Service --</option>
              <option value="web_design">Web Design</option>
              <option value="app_development">App Development</option>
              <option value="digital_marketing">Digital Marketing</option>
              <option value="seo">SEO Services</option>
            </select>
            {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service}</p>}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">
              Additional Information
            </label>
            <textarea
              name="message"
              id="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us more about your project..."
              className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            ></textarea>
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-md"
            >
              Request Quote
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetAQuote;



// import React, { useState } from 'react';

// const GetAQuote = () => {
//   const [formData, setFormData] = useState({
//     purpose: '',
//     name: '',
//     email: '',
//     phone: '',
//     service: '',
//     position: '',
//     otherPosition: '',
//     message: '',
//     file: null,
//   });

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;

//     if (name === 'file') {
//       setFormData(prev => ({ ...prev, file: files[0] }));
//     } else {
//       setFormData(prev => ({ ...prev, [name]: value }));
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const finalData = {
//       ...formData,
//       position:
//         formData.position === 'other'
//           ? formData.otherPosition
//           : formData.position,
//     };

//     console.log('Form submitted:', finalData);
//     if (formData.file) {
//       console.log('Uploaded file:', formData.file.name);
//     }

//     alert('Thank you! We have received your request.');

//     setFormData({
//       purpose: '',
//       name: '',
//       email: '',
//       phone: '',
//       service: '',
//       position: '',
//       otherPosition: '',
//       message: '',
//       file: null,
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 py-10 px-4">
//       <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
//         <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Let’s Connect</h2>
//         <form onSubmit={handleSubmit} className="space-y-5">
//           {/* Purpose */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Purpose</label>
//             <select
//               name="purpose"
//               value={formData.purpose}
//               onChange={handleChange}
//               required
//               className="mt-1 block w-full rounded-md border border-gray-300 p-2"
//             >
//               <option value="">-- Select Purpose --</option>
//               <option value="quote">Get a Quote</option>
//               <option value="hiring">Hiring Inquiry</option>
//             </select>
//           </div>

//           {/* Name */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Name</label>
//             <input
//               type="text"
//               name="name"
//               required
//               value={formData.name}
//               onChange={handleChange}
//               className="mt-1 block w-full rounded-md border border-gray-300 p-2"
//               placeholder="Your full name"
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Email</label>
//             <input
//               type="email"
//               name="email"
//               required
//               value={formData.email}
//               onChange={handleChange}
//               className="mt-1 block w-full rounded-md border border-gray-300 p-2"
//               placeholder="you@example.com"
//             />
//           </div>

//           {/* Phone */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Phone</label>
//             <input
//               type="tel"
//               name="phone"
//               required
//               value={formData.phone}
//               onChange={handleChange}
//               className="mt-1 block w-full rounded-md border border-gray-300 p-2"
//               placeholder="+91 XXXXX-XXXXX"
//             />
//           </div>

//           {/* Quote section */}
//           {formData.purpose === 'quote' && (
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Service Required</label>
//               <select
//                 name="service"
//                 value={formData.service}
//                 onChange={handleChange}
//                 required
//                 className="mt-1 block w-full rounded-md border border-gray-300 p-2"
//               >
//                 <option value="">-- Select Service --</option>
//                 <option value="web_design">Web Design</option>
//                 <option value="app_development">App Development</option>
//                 <option value="digital_marketing">Digital Marketing</option>
//                 <option value="seo">SEO Services</option>
//               </select>
//             </div>
//           )}

//           {/* Hiring Section */}
//           {formData.purpose === 'hiring' && (
//             <>
//               {/* Position Dropdown */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Position You're Hiring For</label>
//                 <select
//                   name="position"
//                   value={formData.position}
//                   onChange={handleChange}
//                   required
//                   className="mt-1 block w-full rounded-md border border-gray-300 p-2"
//                 >
//                   <option value="">-- Select Position --</option>
//                   <option value="frontend_dev">Frontend Developer</option>
//                   <option value="backend_dev">Backend Developer</option>
//                   <option value="ui_ux">UI/UX Designer</option>
//                   <option value="project_manager">Project Manager</option>
//                   <option value="other">Other</option>
//                 </select>
//               </div>

//               {/* If Other */}
//               {formData.position === 'other' && (
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Other Position</label>
//                   <input
//                     type="text"
//                     name="otherPosition"
//                     value={formData.otherPosition}
//                     onChange={handleChange}
//                     required
//                     className="mt-1 block w-full rounded-md border border-gray-300 p-2"
//                     placeholder="Please specify"
//                   />
//                 </div>
//               )}

//               {/* File Upload */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Upload Job Description (PDF/DOC)
//                 </label>
//                 <input
//                   type="file"
//                   name="file"
//                   accept=".pdf,.doc,.docx"
//                   onChange={handleChange}
//                   required
//                   className="mt-1 block w-full text-sm text-gray-600"
//                 />
//               </div>
//             </>
//           )}

//           {/* Message */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Message</label>
//             <textarea
//               name="message"
//               rows="4"
//               value={formData.message}
//               onChange={handleChange}
//               className="mt-1 block w-full rounded-md border border-gray-300 p-2"
//               placeholder="Tell us a bit more..."
//             ></textarea>
//           </div>

//           {/* Submit */}
//           <div className="text-center">
//             <button
//               type="submit"
//               className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md transition duration-200"
//             >
//               Submit Request
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default GetAQuote;
