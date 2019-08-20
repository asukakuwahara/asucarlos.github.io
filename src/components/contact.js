import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

//import components and scss
import "../styles/layout.scss"
import style from "../styles/contact.module.scss"


const Contact = ({ children }) => {
  return (
    <div className={style.contactContainer} id="contact">
      <h1>Contact me</h1>
      <a href="/">this is Contact</a>
      <h2>kuwahara.mee@gmail.com</h2>
      
    </div>
  )
}

export default Contact