import axios from "axios";

const api = axios.create({
  baseURL: "https://files-uploader-zm1n.onrender.com/api", // your backend url
});

export default api;
