import React from 'react'
import Compare from '../Components/Compare'
import Hero from '../Components/Hero';
import heroImg from "../media/features.jpg";

const Features = () => {
  const heroData = {
    img: `${heroImg}`,
    heading: "Our Key Features",
    title: "Experience The Power of our Innovative Features",
    description:
      "Discover the many benefits of our feature-rich platform.",
  };
  return (
    <div>
      <Hero data={heroData} />
      <Compare />
    </div>
  )
}

export default Features