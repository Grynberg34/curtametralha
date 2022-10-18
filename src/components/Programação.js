import "../scss/programacao.scss";
import Menu from './Menu';
import Logo from './Logo';

function Programação() {

  return (
    <div className="programacao" style={{backgroundImage: `url('/background3.png')`}}>
      <Menu />
      <Logo />
    </div>
  )
  
}

export default Programação
