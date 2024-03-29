import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route  } from 'react-router-dom'
import Erro from './pages/Erro/erro_url';
import CadastroVideo from './pages/cadastro/Video/cadastro_video'
import Home from './pages/Home/App';
import CadastroCategoria from './pages/cadastro/Categoria';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component = {Home} exact/>
      <Route path="/cadastro/video" component = {CadastroVideo}/>
      <Route path="/cadastro/categoria" component = {CadastroCategoria}/>
      <Route component = {Erro} />
    </Switch>
  </BrowserRouter>,
    
  document.getElementById('root')
);


