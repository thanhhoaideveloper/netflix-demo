import axios from "axios";

const axiosClient = axios.create({
  baseURL: `http://127.0.0.1:5000/api/v1`,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use(async (request) => {
  return request;
});

axiosClient.interceptors.response.use(
  async (response) => {
    if (response.data) {
      return response.data;
    }

    return response;
  },
  (error) => {
    throw error;
  }
);

export default axiosClient;
