import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from './components/App';
import Home2 from './components/Home2';
import Programação from './components/Programação';
import Seminários from './components/Seminários';
import Sessões from './components/Sessões';
import {store, persistor} from './store.js';
import { PersistGate } from 'redux-persist/integration/react';
import 'bootstrap/dist/css/bootstrap.min.css';



ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home2 />}></Route>
          <Route path="/v1/" element={<App />}></Route>
          <Route path="/v1/programacao" element={<Programação />}></Route>
          <Route path="/v1/seminarios" element={<Seminários />}></Route>
          <Route path="/v1/sessoes" element={<Sessões />}></Route>
        </Routes>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.querySelector('#root')
);


