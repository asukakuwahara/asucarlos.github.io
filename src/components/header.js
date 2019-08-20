import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import headerStyle from "../styles/header.module.scss"
import Navbar from "./navbar"

const Header = ({ siteTitle }) => (
  <header className={headerStyle.bgHeader}>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
    <h1>Asuka Kuwahara</h1>
    <h2>Web Developer</h2>

    <Navbar />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
