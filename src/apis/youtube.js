import axios from "axios";

export const KEY = "enter key";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});
