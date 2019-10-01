import { Link, StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import navStyle from "../styles/navbar.module.scss"
import Logo from "../elements/logo"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav>
      <Link to="/" className={navStyle.imgContainer}>
        <Logo />
      </Link>
      <div className={navStyle.lines} onClick={() => setMenuOpen(!menuOpen)}>
        <span className={navStyle.line}></span>
        <span className={navStyle.line}></span>
        <span className={navStyle.line}></span>
      </div>
      <h2 className={navStyle.navbarLink}>
        <Link to="#about">About</Link>
      </h2>
      <h2 className={navStyle.navbarLink}>
        <Link to="#work">Work</Link>
      </h2>
      <h2 className={navStyle.navbarLink}>
        <Link to="#contact">Contact</Link>
      </h2>
      {menuOpen && (
        <div>
          <h2>
            <Link to="#about">About</Link>
          </h2>
          <h2>
            <Link to="#work">Work</Link>
          </h2>
          <h2>
            <Link to="#contact">Contact</Link>
          </h2>
        </div>
      )}
    </nav>
  )
}

export default Navbar
