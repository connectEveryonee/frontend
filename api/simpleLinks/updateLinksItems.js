import axios from "axios";

const instance = axios.create({
  baseURL: process.env.baseUrl,
});
export async function UpdateLinks(links) {
  try {
    const req = await instance.post("api/simplelink/updateLink", links, {
      withCredentials: true,
    });
    return req.data;
  } catch (error) {
    console.log(error);
  }
}


