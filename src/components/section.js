import React from 'react';
import '../app.css';
import { Button } from './button';
import './section.css';
import Typical from 'react-typical'


function Section() {
  return (
    <div className="hero-container">
      <h1>Hi, I'm Aubrey Gunn.</h1>
      <p>I'm a{' '}
      <Typical
          loop={Infinity}
          wrapper="b"
          steps={[
            'developer  💻',
            1000,
            'massage therapist 👐',
            1000,
            'cat enthusiest 🐈',
            1000,
            'problem solver 🤝',
            1000,
          ]}
        />
      </p>
      <div className="hero-btns">
        <Button className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Projects
        </Button>
      </div>
    </div>
  )
}

export default Section;