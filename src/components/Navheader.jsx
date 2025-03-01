import { FaInstagram, FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa"
import logo from "../assets/logo.png"

const Navheader = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/donalene-tocmo-23b4342b3/"><FaLinkedin/></a>
        <a href="https://github.com/dntcss25"><FaGithub/></a>
        <a href="https://www.instagram.com/dntcsss/"><FaInstagram/></a>
        <a href="https://www.facebook.com/dntcsss"><FaFacebook/></a>
      </div>
    </nav>
  )
}

export default Navheader
