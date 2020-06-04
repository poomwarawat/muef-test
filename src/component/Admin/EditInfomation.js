import React, { useState, useEffect } from "react";
import Header from "../Home/Header";
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";
import API from "../../API/API";

const EditInfomation = (props) => {
  const id = props.match.params.id;
  const [data, setData] = useState({ firstname: "", lastname: "" });
  const [user, setUser] = useState([]);
  const [password, setPassword] = useState("");
  useEffect(() => {
    async function FetchUserData() {
      const result = await API.get(`/admin/get-user-data/${id}`);
      const userdata = await result.data;
      setUser(userdata);
    }
    FetchUserData();
  }, []);
  const handleChangeData = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setData({ ...data, [id]: value });
  };
  const updateData = (e) => {
    e.preventDefault();
    async function POST_NEW_PROFILE() {
      const formdata = new FormData();
      formdata.append("firstname", data.firstname);
      formdata.append("lastname", data.lastname);
      formdata.append("id", id);
      const fetchapi = await API.post("/admin/update-profile", formdata);
      const result = fetchapi.data;
      if (result.update) {
        alert("อัพเดตข้อมูลสำเร็จ");
      }
      console.log(result);
    }
    POST_NEW_PROFILE();
  };
  const updatePassword = (e) => {
    e.preventDefault();
    async function POST_NEW_PASSWORD() {
      const formdata = new FormData();
      formdata.append("password", password);
      formdata.append("id", id);
      const fetchapi = await API.post("/admin/update-password", formdata);
      const result = fetchapi.data;
      if (result.update) {
        alert("แก้ไขรหัสผ่านเสร็จสิ้น");
      }
    }
    POST_NEW_PASSWORD();
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div className="edit-infomation-page">
      <Header />
      <Container>
        <div className="edit-infomation-component">
          {user.length > 0 ? (
            <div>
              <h1>
                ขณะนี้คุณกำลังแก้ไขข้อมูลของ {user[0].fname} {user[0].lname}
              </h1>
              <Form>
                <FormGroup>
                  <Label for="name">ชื่อ</Label>
                  <Input
                    placeholder="กรุณาระบุชื่อ"
                    id="firstname"
                    onChange={handleChangeData}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="lastname">นามสกุล</Label>
                  <Input
                    placeholder="กรุณาระบุนามสกุล"
                    id="lastname"
                    onChange={handleChangeData}
                  />
                </FormGroup>
                <Button onClick={updateData} type="submit" color="primary">
                  อัพเดทข้อมูล
                </Button>
              </Form>
              <div className="mt-4">
                <h1>แก้ไขรหัสผ่าน</h1>
                <hr style={{ backgroundColor: "white" }} />
                <Form>
                  <FormGroup>
                    <Label for="newpassword">รหัสผ่าน</Label>
                    <Input
                      onChange={handleChangePassword}
                      placeholder="กรุณาระบุรหัสผ่านที่ต้องการตั้ง"
                    />
                    <Button
                      onClick={updatePassword}
                      className="mt-3"
                      type="submit"
                      color="primary"
                    >
                      อัพเดทรหัสผ่าน
                    </Button>
                  </FormGroup>
                </Form>
              </div>
            </div>
          ) : null}
        </div>
      </Container>
    </div>
  );
};

export default EditInfomation;
