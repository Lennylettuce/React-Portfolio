import React from "react";
import "../../app.css";
import  { Container } from "@material-ui/core";
import Footer from "../components/footer";

export default function Aboutme () {
    return (
        <>
        <h1 className="about-me">About Me</h1>
        <Container className="info">
          <p className="info-para"> Full Stack Web Development student at Washington University, MO. Through this program I have gained skills of a frontend and backend web developer by utilizing the latest technologies in this field.
          </p>
          <br></br>
          <p> Skills include: JavaScript ES6+, HTML5, CSS3, RESTful Design, React, Node.js, Express.js, jQuery, Handlebars, Bootstrap, MongoDB/Mongoose, MySQL/Sequelize, Heroku, Git.</p>
          // <img className="head-shot" src="/images/me.jpg" alt="head-shot"></img>
        </Container>
  
        <Footer />
      </>
    )
}
