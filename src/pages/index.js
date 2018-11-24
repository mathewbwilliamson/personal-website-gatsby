import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Navbar from '../components/Navbar'
import Image from '../components/image'
import Hero from '../components/Hero'
import Arrow from '../components/Arrow'
import AboutMe from '../components/AboutMe'
import Projects from '../components/Projects'
import WorkWithMe from '../components/WorkWithMe'

const IndexPage = () => (
  <Layout>
    <div class='main'>
      <Hero />
      {/* <Arrow /> */}
      <AboutMe />
      {/* <Arrow /> */}
      <Projects />
      {/* <Arrow /> */}
      <WorkWithMe />      
    </div>
  </Layout>
)

export default IndexPage

// export const pageQuery = graphql`
//   query {
//     linkedin: file(relativePath: { eq: "images/linkedin.svg" }) {
//       ...squareImage
//     }
//     github: file(relativePath: { eq: "images/github-circle.svg" }) {
//       ...squareImage
//     }
//     email: file(relativePath: { eq: "images/email.svg" }) {
//       ...squareImage
//     }
//     resume: file(relativePath: { eq: "images/file-pdf-box.svg" }) {
//       ...squareImage
//     }
//   }
// `