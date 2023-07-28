import CartButton from "../CartButton/CartButton"
import SearchBar from "../SearchBar/SearchBar"
import { FaLinkedinIn, FaGithub, FaFileDownload } from "react-icons/fa"
import { Link } from "react-router-dom"

import "./Header.css"

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="links">
          <Link to="https://www.linkedin.com/in/ivan-lima-dev/" target="_blank">< FaLinkedinIn /></Link >
          <Link to="https://github.com/ivanlima096" target="_blank">< FaGithub /></Link >
          <Link to="https://drive.google.com/file/d/1wEXAyjiYbv0yeUiVuH0xJaLoO9mue3GC/view?usp=drive_link" target="_blank">< FaFileDownload /></Link >
        </div>
        <SearchBar />
        <CartButton />
      </div>
    </header >
  )
}