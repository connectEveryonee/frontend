import axios from "axios";

//creating axios instace
const instance = axios.create({
  baseURL: process.env.baseUrl,
  withCredentials: true,
});

export async function Getlinks(userInfo) {
  try {
    const req = await instance.get(`/api/simplelink/get/${userInfo}`, {
      headers: {
        // Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    console.log(req.data[0].SimpleLink.links);
    return req.data[0].SimpleLink.links;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}
