import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api", // your backend url
});

export default api;
