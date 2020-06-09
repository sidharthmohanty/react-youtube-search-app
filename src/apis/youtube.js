import axios from "axios";

export const KEY = "AIzaSyB7_I9Y-MKqvTVRL4X4VcvHzKnVdIy36aE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});
