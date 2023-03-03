import React from 'react'
import Compare from '../Components/Compare'
import Hero from '../Components/Hero';
import heroImg from "../media/features.jpg";

const Features = () => {
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
      <Compare />
    </div>
  )
}

export default Features