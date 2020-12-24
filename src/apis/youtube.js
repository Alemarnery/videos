import axios from "axios";

const KEY = "AIzaSyCaZfPDZUsZIuHGPOCgF_fZnKbpaO0C62g";

export default axios.create({
  baseURL: "https://wwww.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
