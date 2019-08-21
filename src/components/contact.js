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
      <form name="Contact Form" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="Contact Form" />
      <div>
        <label>Your Name:</label>
        <input type="text" name="name" />
      </div>
      <div>
        <label>Your Email:</label>
        <input type="email" name="email" />
      </div>
      <div>
        <label>Message:</label>
        <textarea name="message" />
      </div>
      <button type="submit">Send</button>
    </form>
      <h2>kuwahara.mee@gmail.com</h2>
      <i class="fab fa-linkedin"></i>
      <i class="fab fa-github-square"></i>
      <i class="fab fa-instagram"></i>
    </div>
  )
}

export default Contact