import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import headerStyle from "../styles/header.module.scss"
import { StaticQuery, useStaticQuery, graphql } from "gatsby"
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons"
import Navbar from "./navbar"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "images/header.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          <header className={headerStyle.bgHeader}>
            <div className={headerStyle.title}>
              <h1>Asuka Kuwahara</h1>
              <h2>Web Developer</h2>
            </div>
            <Link to="#about" className={headerStyle.scrollButton}>
              <FontAwesomeIcon icon={faAngleDoubleDown} />
            </Link>
            <Navbar />
          </header>
        </BackgroundImage>
      )
    }}
  />
)

const Header = styled(BackgroundSection)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`

export default Header
