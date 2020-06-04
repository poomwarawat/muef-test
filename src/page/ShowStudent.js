import React from "react";
import Header from "../component/Home/Header";
import Showstudent from "../component/Feed/ShowStudent";
import { Route } from "react-router-dom";
import Tutorial from "../component/Feed/Tutorial";
import Checklist from "../component/Feed/Checklist";
import ChecklistAdmin from "../component/Feed/ChecklistAdmin";
import PrivateRoute from "../component/privateRoute";

const ShowStudent = () => {
  return (
    <div className="Show-Student">
      <Header />
      <PrivateRoute path="/ShowStudent/MUEF101" component={Showstudent} exact />
      <PrivateRoute path="/ShowStudent/MUEF102" component={Showstudent} exact />
      <PrivateRoute path="/ShowStudent/tutorial" component={Tutorial} />
      <PrivateRoute path="/ShowStudent/Checklist" component={Checklist} />
      <PrivateRoute
        path="/ShowStudent/ChecklistAdmin"
        component={ChecklistAdmin}
      />
    </div>
  );
};

export default ShowStudent;
