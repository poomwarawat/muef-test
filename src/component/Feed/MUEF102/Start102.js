import React, { useState, useEffect } from "react";
import { Button, Container } from "reactstrap";
import { Link } from "react-router-dom";
import API from "../../../API/API";
import SpinComp from "../../SpinComp";

var count = 0;

const Start102 = (props) => {
  const codeId = props.std.codeId;
  count += 1;
  const [inh, setINH] = useState(true);
  const [shf, setSHF] = useState(true);
  const [ec, setEC] = useState(true);
  const [wm, setWM] = useState(true);
  const [po, setPO] = useState(true);

  useEffect(() => {
    API.get(`/get-score-state-102/${codeId}`).then((res) => {
      if (res.data.INH === false) {
        setINH(false);
      }
      if (res.data.INH === true) {
        setINH(true);
        setSHF(false);
      }
      if (res.data.SHF === true) {
        setSHF(true);
        setEC(false);
      }
      if (res.data.EC === true) {
        setEC(true);
        setWM(false);
      }
      if (res.data.WM === true) {
        setWM(true);
        setPO(false);
      }
      if (res.data.PO === true) {
        setPO(true);
      }
    });
  }, []);
  const menulist = () => {
    if (count < 2) {
      return <SpinComp />;
    } else {
      return (
        <Container>
          <Link to={`/MUEF-TEST-102/${codeId}/INH`}>
            <Button
              id="INH_BTN"
              disabled={inh}
              className="w-100 mt-2"
              color="light"
            >
              พฤติกรรมด้านการยับยั้ง
            </Button>
          </Link>
          <Link to={`/MUEF-TEST-102/${codeId}/SHF`}>
            <Button
              id="SHF_BTN"
              disabled={shf}
              className="w-100 mt-2"
              color="light"
            >
              พัฒนาการด้านการเปลี่ยน/ความยืดหยุ่นในการคิด
            </Button>
          </Link>
          <Link to={`/MUEF-TEST-102/${codeId}/EC`}>
            <Button
              id="EC_BTN"
              disabled={ec}
              className="w-100 mt-2"
              color="light"
            >
              พัฒนาการด้านการควบคุมอารมณ์
            </Button>
          </Link>
          <Link to={`/MUEF-TEST-102/${codeId}/WM`}>
            <Button
              id="WM_BTN"
              disabled={wm}
              className="w-100 mt-2"
              color="light"
            >
              พัฒนาการด้านความจำขณะทำงาน
            </Button>
          </Link>
          <Link to={`/MUEF-TEST-102/${codeId}/PO`}>
            <Button
              id="PO_BTN"
              disabled={po}
              className="w-100 mt-2"
              color="light"
            >
              พัฒนาการด้านการวางแผนจัดการ
            </Button>
          </Link>
        </Container>
      );
    }
  };
  return <div className="mt-4">{menulist()}</div>;
};

export default Start102;
