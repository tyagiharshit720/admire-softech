import React from 'react'
import ContactHeroSection from '../components/contact/ContactHeroSection'
import ContactForm from '../forms/ContactForm'
import ContactInfo from '../components/contact/ContactInfo'
import ContactBenefits from '../components/contact/ContactBenefits'
import MapSection from '../components/contact/MapSection'

function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
        <ContactHeroSection />
        {/* Two-column section (Form + Info) */}
        <section className="py-20 animate-fade-in-up">
            <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16">
                {/* Left: Contact Form */}
                <ContactForm />
        
                {/* Right: Info */}
                <div>
                    <ContactInfo />           
                </div>
            </div>
        </section>
        <ContactBenefits />
        <MapSection />
    </div>
  )
}

export default Contact