import { ErrorToast, SucessToast } from "@/utility/toaster";
import axios from "axios";

const instance = axios.create({
  baseURL: process.env.baseUrl,
  withCredentials: true,
});

export async function DeleteLinkElemet(links) {
  try {
    const req = await instance.post("api/simplelink/deleteLinkElement", links, {
      withCredentials: true,
    });
    if (req.status === 200) {
      SucessToast(req.data);
      return req.status;
    } else {
      ErrorToast(req.data);
      return req.status;
    }
  } catch (error) {
    console.log(error);
  }
}
