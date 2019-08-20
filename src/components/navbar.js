import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import headerStyle from "../styles/header.module.scss"

const Navbar = ({ siteTitle }) => (
  <nav>
      <h2>
      <Link to="/" className={headerStyle.navbarLink}>
        About
      </Link>
      </h2>
      <h2>      
      <Link to="/" className={headerStyle.navbarLink}>
        Work
      </Link>
      </h2>
      <h2>
      <Link to="/" className={headerStyle.navbarLink}>
        Contact
      </Link>
      </h2>
  </nav>
)

export default Navbar