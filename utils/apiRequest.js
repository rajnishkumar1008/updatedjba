import axios from "axios";
const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL + "api/",
  headers: {
    "content-Type": "application/json",
    Accept: "application/json",
  "X-Requested-With": 'XMLHttpRequest'
  },
});

export default {
    HomeBanner: () =>
    instance({
      method: "GET",
      url: "all-banners",
    }),



}