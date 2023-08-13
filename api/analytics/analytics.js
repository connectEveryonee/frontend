const { default: axios } = require("axios");

const instance = axios.create({
  baseURL: process.env.baseUrl,
  withCredentials: true,
});

export async function UpdateAnalytucs(username, link) {
  console.log(username, link);
  const res = await instance.get(
    `api/analytics/updateanalytics/?username=${username}&link=${link}`
  );
}
export async function PageAnalytics(username) {
  const res = await instance.get(
    `api/analytics/pageanalytics/?username=${username}`
  );
}
