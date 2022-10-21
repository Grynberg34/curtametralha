import "../scss/sessoes.scss";
import Menu from './Menu';
import Logo2 from './Logo2';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Sessões() {

  return (
    <div className="sessoes" style={{backgroundImage: `url('/background5.png')`}}>
      <Menu />
      <Logo2 />

      <Container fluid>
        <Row>
          <Col md={3}></Col>
          <Col md={6}>
            
            <h1 className="sessoes__title">EM BREVE</h1>

            
          </Col>
        </Row>
      </Container>

    </div>
  )
  
}

export default Sessões
