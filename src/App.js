import React from 'react';
import './global.css';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import CommunityTalents from './components/CommunityTalents/CommunityTalents';
import Organizers from './components/Organizers/Organizers';
import CommunityProjects from './components/CommunityProjects/CommunityProjects';
import NewsLetter from './components/Newsletter/NewsLetter'
import Footer from './components/Footer/Footer';




export default function App () {

  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <CommunityTalents />
      <Organizers />
      <CommunityProjects />
      <NewsLetter />
      <Footer />
    </>
  )
}