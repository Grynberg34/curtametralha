import "../scss/home.scss";
import { Link } from "react-router-dom";

function Home() {

  return (
    <div className="home" style={{backgroundImage: `url('/background-cinza.png')`}}>
      <img className="home__logo tilt-in-top-1" src="/logo.png" alt=""></img>

      <div className="home__menu flip-in-hor-bottom" style={{backgroundImage: `url('/home/background-menu.png')`}}>
        <Link className="home__menu__link" to="/">Programação</Link>
        <Link className="home__menu__link" to="/">Sessões</Link>
        <Link className="home__menu__link" to="/">Seminários</Link>
      </div>

      <img id="home_1" src="/home/textura_metal.png" alt=""></img>
      <img id="home_2" src="/home/mancha.png" alt=""></img>
      <img id="home_3" src="/home/papel_amassado.png" alt=""></img>
      <img id="home_4" src="/home/papel_de_bala.png" alt=""></img>
      <img id="home_5" src="/home/rasgo3.png" alt=""></img>
      <img id="home_6" src="/home/placa_x.png" alt=""></img>
      <img id="home_7" className="flicker-3" src="/home/plaquinha_seta.png" alt=""></img>
      <img id="home_8" className="flicker-1" src="/home/0frame_curta1.png" alt=""></img>
      <img id="home_9" className="flicker-5" src="/home/0frame_curta2.png" alt=""></img>
    </div>
  )
  
}

export default Home
