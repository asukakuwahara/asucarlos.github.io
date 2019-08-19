import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

//import components and scss
import "../styles/layout.scss"
import "../styles/work.module.scss"


const Contact = ({ children }) => {
  return (
    <div>
      <h1>Contact me</h1>
      <a href="/">this is Contact</a>
    </div>
  )
}

export default Contact