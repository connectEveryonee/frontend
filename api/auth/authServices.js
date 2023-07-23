import { store } from "@/redux/store";
import axios from "axios";
//creating axios instace
const instance = axios.create({
  baseURL: process.env.baseUrl,
});

//signin/login service
export async function LoginApi(body) {
  try {
    const req = await instance({
      url: "/api/auth/login",
      method: "post",
      data: {
        email: body.email,
        password: body.password,
      },
      withCredentials: true,
    }).catch((err) => {
      return err;
    });
    if (req.status == 401) {
      return req;
    }

    return req;
  } catch (error) {
    console.log(error);
  }
}

//register/signup service
export async function RegisterApi(body) {
  const req = await instance({
    method: "post",
    url: "/api/auth/register/",
    data: body,
  })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });

  return req;
}

export async function Logout() {
  const req = await instance({
    method: "get",
    url: "/api/auth/logout",
    withCredentials: true,
  })
    .then((data) => {
      return data.status;
    })
    .catch((err) => {
      return err;
    })
    .finally((data) => {
      return data;
    });

  return req;
}
