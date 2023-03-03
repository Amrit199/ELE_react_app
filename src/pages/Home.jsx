import React from 'react'
import Faq from '../Components/Faq'
import GetStarted from '../Components/GetStarted'
import Guide from '../Components/Guide'
import Hero from '../Components/Hero'
import Properties from '../Components/Properties'
import heroImg from "../media/hero_illustration.png";


const Home = () => {
  const heroData = {
    img: `${heroImg}`,
    heading: "Welcome to Site",
    title: "Save money on your electricity bills",
    description: "Compare plans from top providers and find the best deal for you.",
  }
  return (
    <div>
      <Hero data={heroData}/>
      <Guide />
      <Properties />
      <Faq />
      <GetStarted />
    </div>
  )
}

export default Home