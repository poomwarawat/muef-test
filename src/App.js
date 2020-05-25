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

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/ShowStudent" component={ShowStudent} />
        <Route path="/MUEF-TEST-101/:name" component={MenuTest} exact />
        <Route path="/MUEF-TEST-101/:name/INH" component={INH} />
        <Route path="/MUEF-TEST-101/:name/SHF" component={SHF} />
        <Route path="/MUEF-TEST-101/:name/EC" component={EC} />
        <Route path="/MUEF-TEST-101/:name/WM" component={WM} />
        <Route path="/MUEF-TEST-101/:name/PO" component={PO} />
        <Route path="/MUEF-TEST-101/:name/result" component={TestResult} />
        <Route path="/MUEF-TEST-102/:name" component={MenuTest2} exact />
        <Route path="/MUEF-TEST-102/:name/INH" component={INH2} />
        <Route path="/MUEF-TEST-102/:name/SHF" component={SHF2} />
        <Route path="/MUEF-TEST-102/:name/EC" component={EC2} />
        <Route path="/MUEF-TEST-102/:name/WM" component={WM2} />
        <Route path="/MUEF-TEST-102/:name/PO" component={PO2} />
        <Route path="/MUEF-TEST-102/:name/result" component={TestResult2} />
        <Route path="/Admin" component={Admin} exact />
        <Route path="/Admin/user-list" component={UserList} />
        <Route path="/Admin/teacher-list" component={StudentList} />
        <Route path="/Admin/upload-csv" component={Csvupload} />
        <Route path="/edit/:id/" component={Edit} />
        <Route path="*" exact={true} component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
