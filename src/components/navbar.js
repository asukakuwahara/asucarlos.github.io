import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import headerStyle from "../styles/header.module.scss"

const Navbar = ({ siteTitle }) => (
  <nav>
    <h1 className={headerStyle.title} style={{ margin: 0 }}>
      <Link
        to="/"
        style={{
          textDecoration: `none`,
        }}
      >
        About
      </Link>
      <Link
        to="/"
        style={{
          textDecoration: `none`,
        }}
      >
        Work
      </Link>
      <Link
        to="/"
        style={{
          textDecoration: `none`,
        }}
      >
        Contact
      </Link>
    </h1>
  </nav>
)

export default Navbar