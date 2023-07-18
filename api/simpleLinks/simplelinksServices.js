import axios from "axios";
import { cookies } from "next/dist/client/components/headers";

//creating axios instace
const instance = axios.create({
  baseURL: process.env.baseUrl,
});

export async function Getlinks(user) {
  try {
    const req = await instance.get(`/api/simplelink/get/${user}`, {
      withCredentials: true,
    });
    return req.data;
  } catch (error) {
    throw new Error(error);
  }
}
