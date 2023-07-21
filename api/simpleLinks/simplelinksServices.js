import axios from "axios";

//creating axios instace
const instance = axios.create({
  baseURL: process.env.baseUrl,
  withCredentials: true,
});

export async function Getlinks(user) {
  
  try {
    const req = await instance.get(`/api/simplelink/get/${user}`, {});
    return req.data;
  } catch (error) {
    throw new Error(error);
  }
}


