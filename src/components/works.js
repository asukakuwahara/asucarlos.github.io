import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons"
import { faEye } from "@fortawesome/free-solid-svg-icons"

//import components and scss
import style from "../styles/work.module.scss"
import Work from "./work"

const Works = ({ children }) => {
  const data = useStaticQuery(graphql`
    {
      allProjectsJson {
        edges {
          node {
            name
            tech_stack
            description
            live
            github
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  const projects = data.allProjectsJson.edges

  return (
    <div className={style.workContainer} id="work">
      <h1 className={style.workHeader}>Work</h1>
      {projects.map(({ node: project }) => {
        const name = project.name
        const description = project.description
        const tech_stack = project.tech_stack
        const live = project.live
        const github = project.github
        const image = project.image.childImageSharp.fluid

        return (
          <Work
            name={name}
            description={description}
            tech_stack={tech_stack}
            live={live}
            github={github}
            image={image}
          />
        )
      })}
    </div>
  )
}

export default Works
