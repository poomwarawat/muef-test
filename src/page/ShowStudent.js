import React from 'react';
import Header from '../component/Home/Header'
import Showstudent from '../component/Feed/ShowStudent'
import { Route } from 'react-router-dom'
import Tutorial from '../component/Feed/Tutorial'
import Checklist from '../component/Feed/Checklist'

const ShowStudent = () => {
    return (
        <div className="Show-Student">
            <Header/>            
            <Route path="/ShowStudent" component={Showstudent} exact/>
            <Route path="/ShowStudent/tutorial" component={Tutorial}/>
            <Route path="/ShowStudent/Checklist" component={Checklist}/>
        </div>
    );
}

export default ShowStudent;
