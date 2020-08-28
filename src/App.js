import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./page/Home";
import ShowStudent from "./page/ShowStudent";
import NotFound from "./page/NotFound";
import MenuTest from "./page/MenuTest";
import MenuTest2 from "./page/MenuTest2";
import INH from "./component/Feed/MUEF101/INH";
import SHF from "./component/Feed/MUEF101/SHF";
import EC from "./component/Feed/MUEF101/EC";
import WM from "./component/Feed/MUEF101/WM";
import PO from "./component/Feed/MUEF101/PO";
import INH2 from "./component/Feed/MUEF102/INH";
import SHF2 from "./component/Feed/MUEF102/SHF";
import EC2 from "./component/Feed/MUEF102/EC";
import WM2 from "./component/Feed/MUEF102/WM";
import PO2 from "./component/Feed/MUEF102/PO";
import Admin from "./page/Admin";
import TestResult from "./component/Feed/TestResult";
import TestResult2 from "./component/Feed/TestResult102";
import UserList from "./component/Admin/UserList";
import StudentList from "./component/Admin/StudentList";
import Csvupload from "./component/Admin/csv/csvupload";
import Edit from "./component/Feed/EditStudent/Edit";
import PrivateRoute from "./component/privateRoute";
import CreatePDF from "./component/PDF/CreatePDF";
import About from "./page/About";
import Contact from "./page/Contact";
import Technicalterms from "./component/Home/details/Technicalterms";
import Instruction from "./component/Home/details/Instruction";
import Aboutresult from "./component/Home/details/Aboutresult";
import EdituserAdmin from "./component/Admin/EdituserAdmin";
import EditInfomation from "./component/Admin/EditInfomation";
import Dashboard from "./page/Dashboard";
import Report from "./page/Report";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/pdf" component={CreatePDF} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/technicalterms" component={Technicalterms} />
        <Route path="/instruction" component={Instruction} />
        <Route path="/aboutresult" component={Aboutresult} />
        <PrivateRoute
          path="/Admin/edit_admin"
          exact
          component={EdituserAdmin}
        />
        <PrivateRoute path="/admin/dashboard" component={Dashboard} />
        <PrivateRoute path="/Admin/edit_admin/:id" component={EditInfomation} />
        <PrivateRoute path="/ShowStudent" component={ShowStudent} />
        <PrivateRoute path="/MUEF-TEST-101/:name" component={MenuTest} exact />
        <PrivateRoute path="/MUEF-TEST-101/:name/INH" component={INH} />
        <PrivateRoute path="/MUEF-TEST-101/:name/SHF" component={SHF} />
        <PrivateRoute path="/MUEF-TEST-101/:name/EC" component={EC} />
        <PrivateRoute path="/MUEF-TEST-101/:name/WM" component={WM} />
        <PrivateRoute path="/MUEF-TEST-101/:name/PO" component={PO} />
        <PrivateRoute
          path="/MUEF-TEST-101/:name/result"
          component={TestResult}
        />
        <PrivateRoute path="/MUEF-TEST-102/:name" component={MenuTest2} exact />
        <PrivateRoute path="/MUEF-TEST-102/:name/INH" component={INH2} />
        <PrivateRoute path="/MUEF-TEST-102/:name/SHF" component={SHF2} />
        <PrivateRoute path="/MUEF-TEST-102/:name/EC" component={EC2} />
        <PrivateRoute path="/MUEF-TEST-102/:name/WM" component={WM2} />
        <PrivateRoute path="/MUEF-TEST-102/:name/PO" component={PO2} />
        <PrivateRoute
          path="/MUEF-TEST-102/:name/result"
          component={TestResult2}
        />
        <PrivateRoute path="/Admin" component={Admin} exact />
        <PrivateRoute path="/Admin/user-list" component={UserList} />
        <PrivateRoute path="/Admin/teacher-list" component={StudentList} />
        <PrivateRoute path="/Admin/upload-csv" component={Csvupload} />
        <PrivateRoute path="/edit/:id/" component={Edit} />
        <Route path="*" exact={true} component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
