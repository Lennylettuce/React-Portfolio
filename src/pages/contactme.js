import React from "react";
import "../../app.css";
import Footer from "../Footer";
import Contact from "../contactform"

export default function Contact() {
  return (
    <>
      <h1 className="contact">Contact me</h1>
      {/* <Contact /> */}
      
      <h1 className="contactinfo">agunn369@gmail.com</h1>
      <h2 className="contactinfo">555.555.5555</h2>
      <h2 className="contactinfo">St.Louis, Mo.</h2>
      
      <Footer />
    </>
  )

}
