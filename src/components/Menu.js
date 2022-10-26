import { connect } from 'react-redux';
import { store } from '../store';
import { OpenCloseMenu } from '../actions';
import { Link } from "react-router-dom";
import "../scss/menu.scss";

function Menu(props) {

  var open = props.open;

  function openClose() {
    open = !open;

    store.dispatch(OpenCloseMenu(open))

  }

  if (open === false) {
    return (
      <img onClick={openClose} className="icon flicker-in-1" src="/menu.png" alt=""></img>
    )
  } else {
    return (
      <div className="open flicker-in-1" style={{backgroundImage: `url('/background-menu2.png')`}}>
          <img onClick={openClose} className="open__close" src="/close.png" alt=""></img>
          <Link onClick={openClose}  to="/sessoes-presenciais" className="open__link">Sessões presenciais</Link>
          <Link onClick={openClose}  to="/exibicoes-online" className="open__link">Exibições online</Link>
          <Link onClick={openClose}  to="/seminarios" className="open__link">Seminários</Link>
      </div>
    )
  }
} 
  

  

function mapStateToProps(state) {
  return {
    open: state.open
  }
}

export default connect(
  mapStateToProps
)(Menu);