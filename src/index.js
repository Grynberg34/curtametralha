import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from './components/App';
import Programação from './components/Programação';
import Seminários from './components/Seminários';
import Sessões from './components/Sessões';
import Exibições from './components/Exibições';
import {store, persistor} from './store.js';
import { PersistGate } from 'redux-persist/integration/react';
import 'bootstrap/dist/css/bootstrap.min.css';



ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/sessoes-presenciais" element={<Programação />}></Route>
          <Route path="/seminarios" element={<Seminários />}></Route>
          <Route path="/exibicoes-online" element={<Sessões />}></Route>
          <Route path="/v1/exibicoes" element={<Exibições />}></Route>
        </Routes>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.querySelector('#root')
);


