import "../scss/seminarios.scss";
import Menu from './Menu';
import Logo2 from './Logo2';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Seminários() {

  return (
    <div id="seminarios">
      <Menu />
      <Logo2 id="logo__seminarios" />
      <div className="seminarios" style={{backgroundImage: `url('/background2.png')`}}>

        <Container fluid>
          <Row>
            <Col md={3}></Col>
            <Col md={6}>
              
              <h1 className="seminarios__title">Seminários</h1>

              <div className="seminarios__seminario">
                <h1 className="seminarios__seminario__info">Quarta, 02 de novembro, 11h30</h1>
                <h2 className="seminarios__seminario__title">CURTA-METRAGEM NO BRASIL CONTEMPORÂNEO: VARIAÇÕES ESTILÍSTICAS</h2>
                <h3 className="seminarios__seminario__text"><span className="seminarios__seminario__text--bold">Seminaristas:</span> Ewerton Belico, Felipe André Silva, Mariana Queen</h3>
                <p className="seminarios__seminario__paragraph">Ao contrastarmos os dois momentos de boom do curta-metragem no Brasil, vemos que ambos se deram por transformações tecnológicas - antes, a popularização do super-8 e, mais recentemente, o advento do cinema digital. essas tecnologias abriram novas possibilidades de modos de produzir cinema, o que se expressou, de formas variadas, nas características estilísticas das filmografias. são transformações imbricadas, também, nas mudanças sociais, políticas e culturais de cada época, tanto no país quanto num contexto transnacional.
                  <br/><br/>
                  Quais metamorfoses estilísticas encontramos nos dois períodos articulados em nossa curadoria experimental? como o olhar do cinema acompanha o fio da história de um país? como as formas coletivas de fazer filmes se refletem nas variações estilísticas e na dimensão de autoria das obras?
                </p>

                <div className="seminarios__seminario__wrapper">
                  <iframe src="https://www.youtube.com/embed/kIHGx7sK98c"
                  frameBorder='0'
                  allow='autoplay; encrypted-media'
                  allowFullScreen
                  title='video'
                  />
                </div>

              </div>

              <div className="seminarios__seminario">
                <h1 className="seminarios__seminario__info">Sexta, 04 de novembro, 11h30</h1>
                <h2 className="seminarios__seminario__title">CURTA-METRAGISMO COMO OFÍCIO ONTEM E HOJE</h2>
                <h3 className="seminarios__seminario__text"><span className="seminarios__seminario__text--bold">Seminaristas:</span> Gustavo Maan, Maria Bogado, Nayla Guerra</h3>
                <p className="seminarios__seminario__paragraph">Criada em 1975, a chamada lei do curta determinou a inclusão de curtas nacionais na programação das salas de cinema brasileiras, destinando um percentual da bilheteria aos realizadores. à época, a lei representou a culminância da luta em defesa do curta-metragismo como ofício, com forte atuação de coletivos como a ABD e a Corcina.
                  <br/><br/>
                  Com a experiência do cinema digital, a dimensão laboral do cinema foi profundamente transformada. atualmente, apesar da intensa produção nos últimos 20 anos, o cinema de curta duração sofre com a falta de políticas para circulação dos filmes, formação de público e profissionalização dos realizadores.
                  <br/><br/>
                  Podemos falar, hoje, do curta-metragismo como ofício? como pensar relações laborais e políticas públicas que considerem a singularidade dessa forma do cinema? como criar bases materiais que possibilitem a existência do trabalhador curta-metragista? qual a situação estética, política e laboral do curta-metragismo brasileiro nos períodos investigados pela mostra?
                </p>

                <div className="seminarios__seminario__wrapper">
                  <iframe src="https://www.youtube.com/embed/O0H2V4ZS24Q"
                  frameBorder='0'
                  allow='autoplay; encrypted-media'
                  allowFullScreen
                  title='video'
                  />
                </div>

              </div>

              <div className="seminarios__seminario">
                <h1 className="seminarios__seminario__info">Sábado, 05 de novembro, 11h30</h1>
                <h2 className="seminarios__seminario__title">CINEMA E RELAÇÕES DE CLASSE</h2>
                <h3 className="seminarios__seminario__text"><span className="seminarios__seminario__text--bold">Seminaristas:</span> Aiano Bemfica, Mariana Souto, Rodrigo Abreu Pinto</h3>
                <p className="seminarios__seminario__paragraph">Se o cinema da retomada, na virada do século, reduziu as tensões econômicas e sociais ao plano das tipicidades culturais e exotismos, de modo a encontrarmos personagens que ‘vivem a vida’, mas não ousam ‘produzir a vida’, nos últimos 20 anos se proliferaram filmes que se estruturam pela relação, quase sempre conflituosa, entre diferentes classes sociais. cineastas das novas gerações, que surgiram a partir de meados dos anos 2000, passam a reivindicar, no campo das narrativas e formas, a figuração das condições de classe numa sociedade desigual. 
                  <br/><br/>
                  O que o curta-metragem brasileiro tem a dizer sobre a luta de classes? quais são os marcos teóricos, dramáticos, estéticos dessa reinvenção das formas de mostrar as classes sociais? como o cinema nacional reagiu às profundas transformações no campo do trabalho e, por conseguinte, na estrutura da sociedade de classes do país?
                </p>

                <div className="seminarios__seminario__wrapper">
                  <iframe src="https://www.youtube.com/embed/l72FgVOSUYo"
                  frameBorder='0'
                  allow='autoplay; encrypted-media'
                  allowFullScreen
                  title='video'
                  />
                </div>

              </div>
              
            </Col>
          </Row>
        </Container>

      </div>  

      <img id="seminarios__1" src="/seminarios/1.png" alt="" />
      <img id="seminarios__2" src="/seminarios/2.png" alt="" />

    </div>
  )
  
}

export default Seminários
