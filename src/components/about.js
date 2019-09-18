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
            Hi, I'm Asuka Kuwahara, a Web Developer based in Toronto. I love
            writing clean code and learning new technologies. Having recently
            finished my full-stack development program and Lighthouse Labs, I am
            currently available for full-time employment. Prior to this
            bootcamp, I worked as a translator. I had been interested in
            programming before long and I found this blog post on how she
            changed her career to Frontend developer with no background in tech,
            and I decided to follow her path, I figured I like coding! I love
            the "aha" moment in coding and am passionate about making process
            efficient.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
