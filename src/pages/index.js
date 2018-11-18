import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import Hero from '../components/Hero'
import Arrow from '../components/Arrow'
import AboutMe from '../components/AboutMe'
import Projects from '../components/Projects'
import ContactMe from '../components/ContactMe'

const IndexPage = () => (
  <Layout>
    <div class='main'>
      <Hero />
      <Arrow />
      <AboutMe />
      <Arrow />
      <Projects />
      <Arrow />
      <ContactMe />      
    </div>
  </Layout>
)

export default IndexPage
