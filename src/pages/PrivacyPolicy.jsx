import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">
        At Admire Softech, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
      <p className="mb-4">We may collect personal information such as your name, email address, phone number, and company details when you:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Fill out a contact form</li>
        <li>Request a quote or consultation</li>
        <li>Subscribe to our newsletter</li>
        <li>Engage our services</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
      <p className="mb-4">
        We use your personal data to provide and improve our services, including:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Responding to inquiries</li>
        <li>Sending updates or marketing emails (with your consent)</li>
        <li>Managing and delivering our services</li>
        <li>Improving website functionality and user experience</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Data Security</h2>
      <p className="mb-4">
        We use industry-standard measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Sharing Your Information</h2>
      <p className="mb-4">
        We do not sell, trade, or rent your personal information. We may share data with trusted third parties only when necessary for providing our services or complying with the law.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Your Rights</h2>
      <p className="mb-4">
        You may request access to, correction of, or deletion of your personal information at any time by contacting us.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us at: <br />
        <strong>Email:</strong> info@admiresoftech.com
      </p>
    </div>
  );
};

export default PrivacyPolicy;
