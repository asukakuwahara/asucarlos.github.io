import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import headerStyle from "../styles/header.module.scss"
import Navbar from "./navbar"

const Header = ({ siteTitle }) => (
  <header className={headerStyle.bgHeader}>
    <div className={headerStyle.title}>
      <h1>Asuka Kuwahara</h1>
      <h2>Web Developer</h2>
    </div>
    <Navbar />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
