import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';

import Header from "./components/header/Header"
import Lancamentos from './pages/lancamentos/Lancamentos';
import Populares from './pages/Populares/Populares';
import Sobre from './pages/sobre/Sobre';
import Busca from './pages/busca/Busca';
import Serie from './pages/serie/Serie';
import Filme from './pages/filme/Filme';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Lancamentos} />
            <Route path="/lancamentos" component={Lancamentos} />
            <Route path="/populares" component={Populares} />
            <Route path="/sobre" component={Sobre} />
            <Route path="/serie/:serieId" component={Serie} />
            <Route path="/busca" component={Busca} />
            <Route path="/filme/:filmeId" component={Filme}/>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
