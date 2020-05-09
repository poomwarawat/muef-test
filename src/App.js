import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Home from './page/Home'
import ShowStudent from './page/ShowStudent'
import NotFound from './page/NotFound'
import MenuTest from './page/MenuTest'
import INH from './component/Feed/MUEF101/INH'
import SHF from './component/Feed/MUEF101/SHF'
import EC from './component/Feed/MUEF101/EC'
import WM from './component/Feed/MUEF101/WM'
import PO from './component/Feed/MUEF101/PO'
import Admin from './page/Admin'

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/ShowStudent" component={ShowStudent}/>
        <Route path="/MUEF-TEST-101/:name" component={MenuTest} exact/>
        <Route path="/MUEF-TEST-101/:name/INH" component={INH}/>
        <Route path="/MUEF-TEST-101/:name/SHF" component={SHF}/>
        <Route path="/MUEF-TEST-101/:name/EC" component={EC}/>
        <Route path="/MUEF-TEST-101/:name/WM" component={WM}/>
        <Route path="/MUEF-TEST-101/:name/PO" component={PO}/>
        <Route path="/Admin" component={Admin}/>
        <Route path='*' exact={true} component={NotFound} />
      </Switch>      
    </div>
  );
}

export default App;
