import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

//import components and scss
import "../styles/layout.scss"
import style from "../styles/footer.module.scss"


const Footer = ({ children }) => {
  return (
    <footer className={style.footer}>
      © {new Date().getFullYear()}, Asuka Kuwahara
    </footer>
  )
}

export default Footer