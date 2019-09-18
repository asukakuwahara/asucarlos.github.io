import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons"
import { faEye } from "@fortawesome/free-solid-svg-icons"

//import components and scss
import style from "../styles/work.module.scss"

const Work = ({ name, description, image, github, live, tech_stack }) => {
  return (
    <div className={style.eachWorkContainer}>
      <div className={style.workImgContainer}>
        <Img fluid={image} alt={name} />
      </div>
      <div className={style.workDescContainer}>
        <h2 className={style.workTitle}>{name}</h2>
        <p className={style.workTechstack}>{tech_stack}</p>
        <p className={style.workDescription}>{description}</p>
        <div className={style.workLinkContainer}>
          {live !== "" && (
            <a href={live} target="_blank">
              <FontAwesomeIcon icon={faEye} />
              View live
            </a>
          )}
          <a href={github} target="_blank">
            <FontAwesomeIcon icon={faGithubSquare} />
            See code
          </a>
        </div>
      </div>
    </div>
  )
}

export default Work
