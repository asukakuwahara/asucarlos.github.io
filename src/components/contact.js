import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithubSquare,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

//import components and scss
import "../styles/layout.scss"
import style from "../styles/contact.module.scss"

const Contact = ({ children }) => {
  const contactInfo = {
    email: "kuwahara.mee@gmail.com",
    linkedin: "https://www.linkedin.com/in/asuka-kuwahara/",
    github: "https://github.com/asucarlos",
    instagram: "https://www.instagram.com/askarlosnaps/",
  }

  return (
    <div className={style.contactContainer} id="contact">
      <h1>Contact me</h1>
      <div className={style.iconsContainer}>
        <div className={style.iconContainer}>
          <a href={"mailto:" + `${contactInfo.email}`}>
            <FontAwesomeIcon icon={faEnvelope} />
            <p>{contactInfo.email}</p>
          </a>
        </div>
        <div className={style.iconContainer}>
          <a href={contactInfo.linkedin} target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
            <p>@asuka-kuwahara</p>
          </a>
        </div>
        <div className={style.iconContainer}>
          <a href={contactInfo.github} target="_blank">
            <FontAwesomeIcon icon={faGithubSquare} />
            <p>@asucarlos</p>
          </a>
        </div>
        <div className={style.iconContainer}>
          <a href={contactInfo.instagram} target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
            <p>@askarlosnaps</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
