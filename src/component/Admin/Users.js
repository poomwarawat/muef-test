import React from "react";
import { Table } from "reactstrap";

const Users = (props) => {
  console.log(props.type);
  var users = [];
  if (props.userlist.length > 0) {
    users = users.concat(props.userlist);
  }
  return (
    <div>
      {props.type === "user" ? (
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>ชื่อผู้ใช้งาน</th>
              <th>ชื่อ</th>
              <th>นามสกุล</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 &&
              users.map((user, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{user.id}</th>
                    <td>{user.username}</td>
                    <td>{user.fname}</td>
                    <td>{user.lname}</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      ) : (
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>ชื่อ</th>
              <th>นามสกุล</th>
              <th>ชื่อเล่น</th>
              <th>เพศ</th>
              <th>วันเกิด</th>
              <th>เลขที่</th>
              <th>ห้อง</th>
              <th>โรงเรียน</th>
              <th>จังหวัด</th>
              <th>คุณครู</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 &&
              users.map((user, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{user.stdId}</th>
                    <td>{user.fname}</td>
                    <td>{user.lname}</td>
                    <td>{user.nname}</td>
                    <td>{user.gender}</td>
                    <td>{user.birthday}</td>
                    <td>{user.stdCode}</td>
                    <td>{user.stdRoom}</td>
                    <td>{user.schoolname}</td>
                    <td>{user.province}</td>
                    <td>{user.user}</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      )}{" "}
    </div>
  );
};

export default Users;
