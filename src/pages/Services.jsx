import React from 'react'
import ServicesHeroSection from '../components/services/ServicesHeroSection'
import CTASection from '../components/services/CTASection'
import ServicesTechnologiesWeUse from '../components/services/ServicesTechnologiesWeUse'
import WhyChooseAdmireSoftech from '../components/services/WhyChooseAdmireSoftech'

function Services() {
  return (
    <div>
      <ServicesHeroSection/>
      <ServicesTechnologiesWeUse />
      <WhyChooseAdmireSoftech />
      <CTASection />
    </div>
  )
}

export default Services