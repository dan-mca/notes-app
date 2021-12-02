import axios from "axios";

export default axios.create({
  baseURL: "https://notes-memo.herokuapp.com/api",
  headers: { "Content-type": "application/json"}
});