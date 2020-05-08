import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Home from './page/Home'
import ShowStudent from './page/ShowStudent'
import NotFound from './page/NotFound'
import MenuTest from './page/MenuTest'

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/ShowStudent" component={ShowStudent}/>
        <Route path="/MUEF-TEST-101/:name" component={MenuTest}/>
        <Route path='*' exact={true} component={NotFound} />
      </Switch>      
    </div>
  );
}

export default App;
