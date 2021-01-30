import React from "react"
import { useStaticQuery, graphql } from "gatsby"

//import components and scss
import style from "../styles/work.module.scss"
import Work from "./work"

const Works = () => {
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
            key={name}
            name={name}
            description={description}
            tech_stack={tech_stack}
            live={live}
            github={github}
            image={image}
          />
        )
      })}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        style={{ display: "block", transform: "translateY(1%)" }}
      >
        <path
          fill="#454745"
          fillOpacity="1"
          d="M0,64L60,64C120,64,240,64,360,101.3C480,139,600,213,720,229.3C840,245,960,203,1080,160C1200,117,1320,75,1380,53.3L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </div>
  )
}

export default Works
