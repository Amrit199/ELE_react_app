import React from 'react'
import Properties from '../Components/Properties'
import Hero from '../Components/Hero';
import heroImg from "../media/services.jpg";

const Services = () => {
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
      <Properties />
    </div>
  )
}

export default Services