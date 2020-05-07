import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Home from './page/Home'
import ShowStudent from './page/ShowStudent'

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/ShowStudent" component={ShowStudent}/>
      </Switch>      
    </div>
  );
}

export default App;
