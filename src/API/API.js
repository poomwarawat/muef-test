import axios from "axios";

const serverArr = [
  "https://muef-testv2.herokuapp.com/",
  "https://muef-testv2.herokuapp.com/",
];
var url = "";

function randomserver() {
  const rm = Math.floor(Math.random() * 2);
  url = serverArr[rm];
  //   console.log(url);
}
randomserver();

export default axios.create({
  baseURL: `${url}`,
});

// https://muef-testv2.herokuapp.com/
// http://localhost:4000
