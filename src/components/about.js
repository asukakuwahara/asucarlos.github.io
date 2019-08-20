import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

//import components and scss
import Image from "./image"
import "../styles/layout.scss"
import style from "../styles/about.module.scss"


const About = ({ children }) => {
  return (
    <div className={style.aboutContainer}>
      <h1 className={style.aboutHeader}>About</h1>
        <div className={style.aboutContentContainer}>
          <div className={style.aboutImgContainer}>
            <Image />
          </div>
          <div className={style.aboutDescription}>
            <p>Hi, I'm Asuka Kuwahara. I'm a web developer based in Toronto. I love writing clean code and... Having recently finished my full-stack development program and Lighthouse Labs, I am currently available for full-time employment.</p>
            <button>Download Resume</button>
          </div>
      </div>
    </div>
  )
}

export default About