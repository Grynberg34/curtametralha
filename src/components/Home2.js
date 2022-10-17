import "../scss/home2.scss";

function Home2() {

  return (
    <div className="home2" style={{backgroundImage: `url('/background3.png')`}}>
      <img id="embreve" className="home__logo" src="/logo3.png" alt=""></img>

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

export default Home2
