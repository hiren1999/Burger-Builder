import axios from "axios";

const instance = axios.create({
  baseURL: "https://my-burger-f485b-default-rtdb.firebaseio.com/",
});

export default instance;
