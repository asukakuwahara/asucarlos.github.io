import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

//import components and scss
import Image from "./image"
import "../styles/layout.scss"
import "../styles/about.module.scss"


const About = ({ children }) => {
  return (
    <div>
      <h1>About</h1>
      <div style={{ maxWidth: `500px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <p>Hi, I'm Asuka Kuwahara.</p>
      <p>I'm a web developer based in Toronto. I love writing clean code and </p>
      <p>Having recently finished my full-stack development program and Lighthouse Labs, I am currently available for full-time employment.</p>
    </div>
  )
}

export default About