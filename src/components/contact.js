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
      <div className={style.iconContainer}>
      <a href={"mailto:" + "kuwahara.mee@gmail.com"}>        
        <i class="far fa-envelope"></i>
        <p>kuwahara.mee@gmail.com</p>
      </a>
      <a href="https://www.linkedin.com/in/asuka-kuwahara/" target="_blank">
        <i class="fab fa-linkedin"></i>
        <p>@asuka-kuwahara</p>
      </a>

      <a href="https://github.com/asucarlos" target="_blank">
        <i class="fab fa-github-square"></i>
        <p>@asucarlos</p>
      </a>
      <a href="https://www.instagram.com/askarlosnaps/" target="_blank">
      <i class="fab fa-instagram"></i>
      <p>@askarlosnaps</p>
      </a>
      </div>
    </div>
  )
}

export default Contact