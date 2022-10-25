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
      <img id="programacao__1" src="/programacao/3.png" alt="" />
      <img id="programacao__2" src="/programacao/2.png" alt="" />
      <img id="programacao__3" src="/programacao/4.png" alt="" />
    </div>
  )
  
}

export default Programação
