import React from 'react'
import Hero from '../Components/Hero';
import heroImg from "../media/contact.jpg";

const Contact = () => {
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
      Contact
      </div>
  )
}

export default Contact