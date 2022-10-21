import "../scss/logo.scss";
import { Link } from "react-router-dom";

function Logo() {

  return (
    <Link to="/v1/">
      <img id="logo" className="flicker-in-1" src="/logo-menor2.png" alt="" />
    </Link>
  )
  
}

export default Logo
