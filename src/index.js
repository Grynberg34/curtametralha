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
import ScrollToTop from "./helpers/ScrollToTop";
import ReactGA from "react-ga";

const TRACKING_ID = "G-PVWM04C4C7";
ReactGA.initialize(TRACKING_ID);


ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <ScrollToTop />
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


