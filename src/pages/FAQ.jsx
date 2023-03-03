import React from 'react'
import Hero from '../Components/Hero';
import heroImg from "../media/faq.jpg";
import Faq from '../Components/Faq'

const FAQ = () => {
  const heroData = {
    img: `${heroImg}`,
    heading: "FAQ",
    title: "Frequently Asked Question",
    description:
      "Get answers to common questions about our products, services and policies.",
  };
  return (
    <div>
      <Hero data={heroData} />
      <Faq />
    </div>
  )
}

export default FAQ