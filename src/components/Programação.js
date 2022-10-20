import "../scss/programacao.scss";
import Menu from './Menu';
import Logo from './Logo';
import ListaSessoes from './ListaSessoes';

function Programação() {

  return (
    <div className="programacao" style={{backgroundImage: `url('/background3.png')`}}>
      <Menu />
      <Logo />
      <ListaSessoes />
    </div>
  )
  
}

export default Programação
