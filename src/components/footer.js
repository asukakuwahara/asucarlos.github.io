import React from "react"
import "../styles/layout.scss"
import style from "../styles/footer.module.scss"

const Footer = () => {
  return (
    <footer className={style.footer}>
      © {new Date().getFullYear()}, Asuka Kuwahara
    </footer>
  )
}

export default Footer
