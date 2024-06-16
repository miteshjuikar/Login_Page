import React from 'react'
import logo from "../assets/logo.svg";
import style from "../Style_Files/Navbar.module.css"

export default function Navbar() {
  return (
    <div className={style.mainDiv} >
        <div className={style.image}>
            <img src={logo} alt="Logo Image" />
        </div>
        <div className={style.anchar}>
            <a href="/">Tickets</a>
            <a href="/">New Tickets</a>
            <a href="/">Reports</a>
        </div>
        <div className={style.anchar}>
            <a href="/">Login</a>
        </div>
    </div>
  )
}
