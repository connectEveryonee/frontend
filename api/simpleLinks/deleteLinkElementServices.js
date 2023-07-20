import axios from "axios";

const instance = axios.create({
  baseURL: process.env.baseUrl,
  withCredentials: true,
});

export async function DeleteLinkElemet(links) {
  try {
    const req = await instance.post(
      "api/simplelink/deleteLinkElement",
      links,
      {
        withCredentials: true,
      }
    );
    return req.data;
  } catch (error) {
    console.log(error);
  }
}
