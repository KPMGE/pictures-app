import axios from "axios";

const accessKey = "Put your access key here";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID ${accessKey}`,
  },
});
