import React, { useState, useEffect } from "react";
import Start101 from "./MUEF101/Start101";
import { Button } from "reactstrap";
import { Link, Redirect } from "react-router-dom";
import API from "../../API/API";

const TestingMenu = (props) => {
  const url = window.location.href;
  const urlnew = url.split("/");
  const lastQuestion = url.split("?");
  const [result, setResult] = useState(true);
  const [redirect, setRedirect] = useState(false);
  const codeId = urlnew[4];

  useEffect(() => {
    if (lastQuestion[1] === "mode=PO") {
      setResult(false);
    }
    API.get(`/get-state-result/${codeId}`).then((res) => {
      if (res.data.result) {
        console.log(res.data.result);
        setResult(false);
      }
    });
  }, []);
  if (redirect) {
    const splitCode = lastQuestion[0].split("/");
    return <Redirect to={`/MUEF-TEST-101/${splitCode[4]}/result`} />;
  }
  const handleSave = () => {
    setRedirect(true);
  };
  return (
    <div>
      {props.std && (
        <h3>
          สวัสดีคุณ {props.username} ขณะนี้คุณกำลังทำแบบประเมินของ{" "}
          {props.std.fname} {props.std.lname} ชุดที่ {props.test}
        </h3>
      )}
      <div>
        <div className="mt-4">
          <h3>คำชี้แจง</h3>
          <p>
            เริ่มทำแบบประเมินจากหัวข้อแรก
            เมื่อทำหัวข้อแรกเสร็จจึงสามารถทำหัวข้อต่อไปได้
          </p>
          <p>
            หากทำแบบประเมินครบแล้วไม่สามารถกดปุ่ม "บันทึกผลและดูคะแนน"
            กรุณากดรีเฟรซ (Refresh)
          </p>
        </div>
        {props.std && <Start101 std={props.std} />}
        <div className="back-menu">
          <div>
            <Link to="/ShowStudent/MUEF101">
              <Button color="light" outline>
                ย้อนกลับ
              </Button>
            </Link>
          </div>
          <div>
            <Button onClick={handleSave} disabled={result} color="light">
              บันทึกผลและดูคะแนน
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestingMenu;
