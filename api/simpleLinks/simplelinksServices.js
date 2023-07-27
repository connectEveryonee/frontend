import axios from "axios";

//creating axios instace
const instance = axios.create({
  baseURL: process.env.baseUrl,
  withCredentials: true,
});

export async function Getlinks(name) {
  // try {
  var Links = [];
  const req = await instance
    .get(`/api/simplelink/get/${name}`, {
      // headers: {
      //   Authorization: `Bearer ${userInfo.token}`,
      // },
    })
    .then((data) => {
      if (data.status === 200) {
        return data.data[0].SimpleLink.links;
      } else {
        return data.data;
      }
    })
    .catch((err) => {
      return err.response.data;
    });
  //   if (req.status === 200) {
  //     Links = req.data[0].SimpleLink.links;
  //     return Links;
  //   }
  //   return Links;
  // } catch (error) {
  //   console.log(error);
  //   throw new Error(error);
  // }
  return req;
}
