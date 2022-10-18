import "../scss/programacao.scss";
import { Link } from "react-router-dom";
import Menu from './Menu';

function Programação() {

  return (
    <div className="programacao" style={{backgroundImage: `url('/background3.png')`}}>
      <Menu />
    </div>
  )
  
}

export default Programação
