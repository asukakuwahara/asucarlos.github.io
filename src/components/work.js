import React from "react"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithubSquare, faFigma } from "@fortawesome/free-brands-svg-icons"
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
            <a href={live} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faEye} />
              View live
            </a>
          )}
          {github.includes("https://github.com") ? (
            <a href={github} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithubSquare} />
              See code
            </a>
          ) : (
            <a href={github} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faFigma} />
              See Design
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default Work
