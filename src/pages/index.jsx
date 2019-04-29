import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/avatar.jpg'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hello, <br /> I'm Ben Mizes.
        </BigTitle>
        <Subtitle>I'm a real estate investor and entrepreneur.</Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Clever Real Estate"
            link="https://Listwithclever.com"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            Founder and CEO. Sell your home and save thousands.
          </ProjectCard>
          <ProjectCard
            title="Arch Buyers"
            link="https://www.archbuyers.com"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            Multifamily Real Estate Fund with 22 units and $1.5mm assets under management
          </ProjectCard>
          <ProjectCard
            title="Medium"
            link="https://www.medium.com/@benmizes"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            I write about startups, investing, and personal finance
          </ProjectCard>
          <ProjectCard
            title="Drizzle SMS"
            link="https://www.behance.net/gallery/38068151/Eagle"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            Drizzle was the first app that paid you for every text you sent and received. Over 50,000 downloads in our first 3 months. 
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="Ben Mizes" />
          <AboutSub>
            Do or do not. There is no try.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
       I'm Ben. I'm a real estate investor that focuses on Multifamily real estate in St. Louis, and the Founder of Clever Real Estate.
          Clever let's anyone list their home for a flat fee of $3,000, or 1% if their home is more expensive.
          In my free time I like St. Louis Blues Hockey, Camping, and my dog. 
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:ben@movewithclever.com">Hi</a> or find me on other platforms:{' '}
            <a href="https://medium.com/@benmizes">Medium</a> &{' '}
            <a href="https://www.listwithclever.com/">Clever</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019 by Gatsby Starter Portfolio Cara.{' '}
          <a href="https://github.com/LekoArts/gatsby-starter-portfolio-cara">Github Repository</a>. Made by{' '}
          <a href="https://www.lekoarts.de">LekoArts</a>.
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
