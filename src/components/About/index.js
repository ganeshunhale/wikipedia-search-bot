import { useEffect, useState } from 'react'
// import Loader from 'react-loaders'
import "././aboutComponents/style.css";
import "././aboutComponents/stars.css";
import AnimatedLetters from '../AnimatedLetters'

import './index.css';

import Intro from './aboutComponents/Intro'
import SkillsAndcube from './aboutComponents/SkillsAndcube';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])


  return (
    <>
      <div style={{ width: "100vw", height: "100vh" }}>
        <div className="bg-image background" style={{ zIndex: "1", width: "100%", height: "100%" }}  >
          <div id="stars" />
          <div id="stars2" />
          <div id="stars3" />
          <Intro></Intro>
          <div className="bg-image background2" style={{ position: "relative", }}>
            <div id="stars" />
            <div id="stars2" />
            <div id="stars3" />
            <SkillsAndcube></SkillsAndcube>
          </div>

          {/* <div className="text-zone"> */}
          {/* <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1> */}

          {/* <p>
            I'm very ambitious front-end developer looking for a role in
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I'm quietly confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p>
            If I need to define myself in one sentence that would be a family
            person, father of a beautiful daughter, a sports fanatic,
            photography enthusiast, and tech-obsessed!!!
          </p> */}
          {/* </div> */}

        </div></div>
      {/* <Loader type="pacman" /> */}
    </>
  )
}

export default About
