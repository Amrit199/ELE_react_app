import React from 'react'
import Properties from '../Components/Properties'
import Hero from '../Components/Hero';
import heroImg from "../media/services.jpg";

const Services = () => {
  const heroData = {
    img: `${heroImg}`,
    heading: "Our Services",
    title: "What We Offer",
    description:
      "Explore our range of services designed",
  };
  return (
    <div>
      <Hero data={heroData} />
      <Properties />
    </div>
  )
}

export default Services