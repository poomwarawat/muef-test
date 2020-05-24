import React, { useEffect } from "react";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";
import API from "../../API/API";

const Search = (props) => {
  const getALlUser = () => {
    API.get("/admin/get-user").then((res) => {
      props.handleSearch(res.data);
    });
  };
  const getAllStudent = () => {
    API.get("/admin/get-student").then((res) => {
      props.handleSearch(res.data);
    });
  };
  useEffect(() => {
    if (props.type === "student") {
      getALlUser();
    } else {
      getAllStudent();
    }
  }, []);
  const handelOnChange = (e) => {
    const data = new FormData();
    data.append("data", e.target.value);
    if (e.target.value !== "" && props.type === "user") {
      API.post("/admin/search-user", data).then((res) => {
        if (res.data.not === true) {
          props.handleSearch({ not: "ไม่พบข้อมูลผู้ใช้งาน" });
        } else {
          props.handleSearch(res.data);
        }
      });
    } else if (e.target.value !== "" && props.type === "std") {
      API.post("/admin/search-student", data).then((res) => {
        if (res.data.not === true) {
          props.handleSearch({ not: "ไม่พบข้อมูลผู้ใช้งาน" });
        } else {
          props.handleSearch(res.data);
        }
      });
    } else {
      if (props.type === "user") {
        getALlUser();
      } else {
        getAllStudent();
      }
    }
  };
  return (
    <div>
      <InputGroup>
        <Input
          placeholder="ค้นหาโดย ชื่อ นามสกุล ชื่อผู้ใช้งาน เลขไอดี"
          onChange={handelOnChange}
        />
        <InputGroupAddon addonType="append">
          <InputGroupText>Search</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
};

export default Search;
