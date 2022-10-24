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
                <h2 className="seminarios__seminario__title">CURTA-METRAGEM NO BRASIL CONTEMPOR NEO: VARIAÇÕES ESTILÍSTICAS</h2>
                <h3 className="seminarios__seminario__text"><span className="seminarios__seminario__text--bold">Seminaristas:</span> Ewerton Belico, Felipe André Silva, Mariana Queen</h3>
              </div>

              <div className="seminarios__seminario">
                <h1 className="seminarios__seminario__info">Sexta, 04 de novembro, 11h30</h1>
                <h2 className="seminarios__seminario__title">CURTA-METRAGISMO COMO OFÍCIO ONTEM E HOJE</h2>
                <h3 className="seminarios__seminario__text"><span className="seminarios__seminario__text--bold">Seminaristas:</span> Gustavo Maan, Maria Bogado, Nayla Guerra</h3>
              </div>

              <div className="seminarios__seminario">
                <h1 className="seminarios__seminario__info">Sábado, 05 de novembro, 11h30</h1>
                <h2 className="seminarios__seminario__title">CINEMA E RELAÇÕES DE CLASSE</h2>
                <h3 className="seminarios__seminario__text"><span className="seminarios__seminario__text--bold">Seminaristas:</span> Aiano Bemfica, Mariana Souto, Rodrigo Abreu Pinto</h3>
              </div>
              
            </Col>
          </Row>
        </Container>

      </div>      
    </div>
  )
  
}

export default Seminários
