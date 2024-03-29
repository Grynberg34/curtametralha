import "../scss/home.scss";
import { Link } from "react-router-dom";

function Home() {

  return (
    <div className="home" style={{backgroundImage: `url('/background3.png')`}}>
      <img className="home__logo" src="/logo.png" alt=""></img>

      <div className="home__menu">
        <img className="home__menu__img" src="/home/background-menu.png" alt="" />
        <Link className="home__menu__link" to="/sessoes-presenciais">Sessões Presenciais</Link>
        <Link className="home__menu__link" to="/exibicoes-online">Exibições online</Link>
        <Link className="home__menu__link" to="/seminarios">Seminários</Link>
      </div>

      <img id="home_1" src="/home/x.png" alt=""></img>
      <img id="home_2" src="/home/rasgo.png" alt=""></img>
      <img id="home_3" src="/home/seta.png" alt=""></img>
      <img id="home_4" src="/home/papel_de_bala.png" alt=""></img>
      <img id="home_5" src="/home/bituca.png" alt=""></img>
      <video id="home_6" autoPlay="1" loop="1" muted="1" src="/home/video1.mp4"></video>
      <video id="home_7" autoPlay="1" loop="1" muted="1" src="/home/video2.mp4"></video>
      <video id="home_8" autoPlay="1" loop="1" muted="1" src="/home/video3.mp4"></video>

    </div>
  )
  
}

export default Home
