import React from 'react'
import Hero from '../Components/Hero';
import heroImg from "../media/contact.jpg";

const Contact = () => {
  const heroData = {
    img: `${heroImg}`,
    heading: "Get In Touch",
    title: "Contact Us",
    description:
      "Have a question or a comment? We'd love to hear from you.",
  };
  return (
    <div>
      <Hero data={heroData} />
      Contact
      </div>
  )
}

export default Contact