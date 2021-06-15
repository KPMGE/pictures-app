import axios from "axios";

// const accessKey = "Put your access key here";
const accessKey = "ZdbsdY0RPViCfAS5Je4huM3KROhtLXvIdQKq3caHMPc";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID ${accessKey}`,
  },
});
