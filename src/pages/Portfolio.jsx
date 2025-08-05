import React from 'react'
import PortfolioHero from '../components/portfolio/PortfolioHero'
import Projects from '../components/portfolio/projects'
import ProblemSolutionSection from '../components/portfolio/ProblemSolutionSection'

const Portfolio = () => {
  return (
    <div>
        <PortfolioHero />
        <ProblemSolutionSection />
        <Projects />
    </div>
  )
}

export default Portfolio;