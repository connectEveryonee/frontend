import axios from "axios";
//creating axios instace
axios.defaults.withCredentials = true;
const instance = axios.create({
  baseURL: process.env.baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export async function CheckuserName(name) {
  const user = instance
    .post("/api/user/searchUsername", { userName: name })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err.response;
    });
  return user;
}

export async function GetUser({name,token}) {
  const user = instance
    .post("/api/user/getUser", { userName: name })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err.response;
    });
  return user;
}
