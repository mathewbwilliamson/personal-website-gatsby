import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Navbar from '../components/Navbar';
import Image from '../components/image';
import Hero from '../components/Hero';
import Arrow from '../components/Arrow';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import WorkWithMe from '../components/WorkWithMe';


const IndexPage = ({ data }) => {
  const techStack = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'React',
    'Redux',
    'NodeJS',
    'Express',
    'GraphQL',
    'GatsbyJS',
    'NextJS',
    'Python',
    'MongoDB',
    'PostgreSQL'
  ]


  return (<Layout>
    <div className='main'>
      <Hero />
      <AboutMe techStack={techStack} />
      <Projects data={data} />
      <Skills techStack={techStack} />
      <WorkWithMe data={data} />
    </div>
  </Layout>)
}

export default IndexPage;

export const screenshot = graphql`
  fragment screenshot on File {
    childImageSharp {
      fluid(maxWidth: 2160) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
`

export const icon = graphql`
  fragment icon on File {
    childImageSharp {
      fluid(maxWidth: 48) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    linkedin: file(relativePath: { eq: "images/linkedin.svg" }) {
      ...screenshot
    }
    email: file(relativePath: { eq: "images/email.svg" }) {
      ...icon
    }
    noteful: file(relativePath: { eq: "images/noteful-app-ss.jpg" }) {
      ...screenshot
    }
    leadlifecycle: file(relativePath: { eq: "images/Dashboard.png" }) {
      ...screenshot
    }
    github: file(relativePath: { eq: "images/github-circle.svg" }) {
      ...icon
    }
    portfolio: file(relativePath: { eq: "images/portfolioImage.png" }) {
      ...screenshot
    }
  }
`