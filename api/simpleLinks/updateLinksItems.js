import { ErrorToast, SucessToast } from "@/utility/toaster";
import axios from "axios";

const instance = axios.create({
  baseURL: process.env.baseUrl,
});
export async function UpdateLinks(links) {
  try {
    const req = await instance.post("api/simplelink/updateLink", links, {
      withCredentials: true,
    });
    if (req.status === 200) {
      SucessToast(req.data);
      return req.data;
    } else {
      ErrorToast(req.data);
      return data;
    }
  } catch (error) {
    console.log(error);
  }
}
