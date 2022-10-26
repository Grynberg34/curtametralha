import { connect } from 'react-redux';
import { store } from '../store';
import { GetSessions } from '../actions';
import { GetFilmLink } from '../actions';
import "../scss/exibicoes.scss";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Menu from './Menu';
import Logo2 from './Logo2';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

function Exibições(props) {
  var sessoes = props.sessoes;
  var link = props.link;

  console.log(link)

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (link) => {
    store.dispatch(GetFilmLink(link))
    setShow(true)
  };

  if (sessoes === null) {
    store.dispatch(GetSessions())

    return (
      <div>
      </div>
    )

  } else {
    return (
      <div className="exibicoes" style={{backgroundImage: `url('/background5.png')`}}>
        <Container fluid>
          <Row>
            <Col md={2}></Col>
            <Col md={8}>

              <Menu />
              <Logo2 />

              { sessoes.map( (sessao) => 
                  <div key={sessao.id} className="exibicoes__sessao">
                    <h1 className="exibicoes__sessao__title">{sessao.nome}</h1>

                    <Row>

                      { sessao.filmes.map( (filme) => 
                    
                        <Col key={filme.nome} md={3} className="exibicoes__show">
                          {filme.online !== undefined? 
                              <div className="exibicoes__sessao__filme" onClick={() => handleShow(filme.online.link)}>
                                <h2 className="exibicoes__sessao__filme__nome">{filme.nome}</h2>
                                <h3 className="exibicoes__sessao__filme__ano">{filme.ano}</h3>
                                <h4 className="exibicoes__sessao__filme__direção">{filme.direção}</h4>

                              </div>
                            : <span></span> 
                          }
                        </Col>
                        
                      )}


                    </Row>


                  </div>
              )}

            </Col>
          </Row>
        </Container>


        <Modal size="xl"  show={show} onHide={handleClose} className="exibicoes__modal">
          <iframe src={link}
          frameBorder='0'
          allow='autoplay; encrypted-media'
          allowFullScreen
          title='video'
          height="600px"
          />
          <button className="close" onClick={handleClose}>VOLTAR</button>
        </Modal>

      </div>
    )
  }


} 
  

  

function mapStateToProps(state) {
  return {
    sessoes: state.sessoes,
    link: state.link
  }
}

export default connect(
  mapStateToProps
)(Exibições);