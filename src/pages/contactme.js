import React from 'react';
import '../../app.css';
import Footer from '../footer';
import Form from '../contact';

export default function Contact() {
  return (
    <>
      <h1 className="contact">Contact me</h1>
      { <Form /> }
      
      <h1 className="contactinfo">agunn@gmail.com</h1>
      <h2 className="contactinfo">555.555.5555</h2>
      <h2 className="contactinfo">STL, MO.</h2>
      
      <Footer />
    </>
  )

}

