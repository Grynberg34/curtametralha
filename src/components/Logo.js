import "../scss/logo.scss";
import { Link } from "react-router-dom";

function Logo() {

  return (
    <Link to="/">
      <img id="logo" className="flicker-in-1" src="/logo-menor.png" alt="" />
    </Link>
  )
  
}

export default Logo
