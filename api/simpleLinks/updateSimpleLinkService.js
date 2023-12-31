import { WarningTost } from "@/utility/toaster";
import axios from "axios";
var instace = axios.create({
  baseURL: process.env.baseUrl,
  withCredentials: true,
});

export async function NewUpdateLink({ body }) {
  try {
    const req = instace.post(
      "api/simplelink/create",
      { ...body },
      { withCredentials: true }
    );
  } catch (error) {
    console.log(error);
  }
}
