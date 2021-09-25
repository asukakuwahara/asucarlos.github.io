import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithubSquare,
  faLinkedin,
  faDev,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import style from "../styles/contact.module.scss"

const Contact = () => {
  const contactInfo = {
    email: "kuwahara.mee@gmail.com",
    linkedin: "https://www.linkedin.com/in/asuka-kuwahara/",
    github: "https://github.com/asukakuwahara",
    devTo: "https://dev.to/asucarlos",
  }

  return (
    <div className={style.contactContainer} id="contact">
      <h1>Contact me</h1>
      <div className={style.iconsContainer}>
        <div className={style.iconContainer}>
          <a
            href={`mailto: ${contactInfo.email}`}
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} />
            <p>{contactInfo.email}</p>
          </a>
        </div>
        <div className={style.iconContainer}>
          <a href={contactInfo.linkedin} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
            <p>@asuka-kuwahara</p>
          </a>
        </div>
        <div className={style.iconContainer}>
          <a href={contactInfo.github} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithubSquare} />
            <p>@asucarlos</p>
          </a>
        </div>
        <div className={style.iconContainer}>
          <a href={contactInfo.devTo} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faDev} />
            <p>@asucarlos</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
