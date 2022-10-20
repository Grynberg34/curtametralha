import { connect } from 'react-redux';
import { store } from '../store';
import { GetSessions } from '../actions';
import "../scss/listasessoes.scss";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ListaSessoes(props) {
  var sessoes = props.sessoes;

  if (sessoes === null) {
    store.dispatch(GetSessions())

    return (
      <div></div>
    )

  } else {
    return (
      <Container fluid>
        <Row>
          <Col md={3}></Col>
          <Col md={6}>
            
            <div className="lista-sessoes">

              <h1 className="lista-sessoes__title">PROGRAMAÇÃO</h1>

              { sessoes.map( (sessao) => 
                <div key={sessao.id} className="lista-sessoes__sessao" style={{backgroundImage: `url('/programacao/background-sessao.png')`}}>
                  <h1 className="lista-sessoes__sessao__info">{sessao.data} | {sessao.hora} | {sessao.local}</h1>
                  <h2 className="lista-sessoes__sessao__nome">{sessao.nome}</h2>
                  <h3 className="lista-sessoes__sessao__extra">{sessao.extra}</h3>
                  <h4 className="lista-sessoes__sessao__classificacao">Classificação: {sessao.classificação}</h4>

                  { sessao.filmes.map( (filme) =>
                  
                    <div className="lista-sessoes__sessao__filme">
                      <h1 className="lista-sessoes__sessao__filme__title">{filme.nome}  <span className="lista-sessoes__sessao__filme__info">{filme.direção}  |  {filme.estado}  |  {filme.ano}  |  {filme.duração}</span> </h1>
                    </div>

                  )}

                </div>
              )}

            </div>
          </Col>
        </Row>
      </Container>
    )
  }


} 
  

  

function mapStateToProps(state) {
  return {
    sessoes: state.sessoes
  }
}

export default connect(
  mapStateToProps
)(ListaSessoes);