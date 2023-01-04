import axiosClient from "./axiosClient";

const userApi = {
  addLikeMovie: ({ email, data }) => {
    return axiosClient.post("/user", { email, data });
  },
  listLikeMovie: (email) => {
    return axiosClient.get(`/user/like/${email}`);
  },
  removeLiked: (email, movieId) => {
    return axiosClient.post(`/user/remove`, { email, movieId });
  },
};

export default userApi;
