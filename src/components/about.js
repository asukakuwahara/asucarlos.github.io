import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

//import components and scss
import Image from "../elements/profile_image"
import "../styles/layout.scss"
import style from "../styles/about.module.scss"

const About = ({ children }) => {
  return (
    <div className={style.aboutContainer} id="about">
      <h1 className={style.aboutHeader}>About</h1>
      <div className={style.aboutContentContainer}>
        <div className={style.aboutImgContainer}>
          <Image />
        </div>
        <div className={style.aboutDescription}>
          <p>
            Hi, I'm Asuka Kuwahara, a Software Developer based in Toronto. I
            love writing clean code and learning new technologies. Having
            recently finished my full-stack development program and Lighthouse
            Labs, I am currently available for full-time employment. Prior to
            this bootcamp, I worked as a translator. I had been interested in
            programming before long and I found this blog post on how she
            changed her career to Frontend developer with no background in tech,
            and I decided to follow her path, I figured I like coding! I love
            the "aha" moment in coding and am passionate about making process
            efficient.
          </p>
        </div>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        style={{ display: "block", transform: "translateY(1%)" }}
      >
        <path
          fill="#B2B2B2"
          fill-opacity="1"
          d="M0,160L60,144C120,128,240,96,360,112C480,128,600,192,720,234.7C840,277,960,299,1080,282.7C1200,267,1320,213,1380,186.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </div>
  )
}

export default About
