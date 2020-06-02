import axios from "axios";

export const KEY = "apikey";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});
