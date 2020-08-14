import axios from "axios";

const serverArr = ["http://localhost:4000", "http://localhost:4000"];
var url = "";

function randomserver() {
  const rm = Math.floor(Math.random() * 2);
  url = serverArr[rm];
  //   console.log(url);
}
randomserver();

export default axios.create({
  baseURL: "http://103.86.48.136:443",
});

// https://muef-testv2.herokuapp.com/
// http://localhost:4000
