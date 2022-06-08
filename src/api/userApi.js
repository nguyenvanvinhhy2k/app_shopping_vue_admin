import axiosClient from "./axiosClient";

const userApi = {
  getAll() {
    return axiosClient.get("/User/GetAll");
  },
  get(id) {
    return axiosClient.get(`/User/GetById/${id}`);
  },
  create(data) {
    return axiosClient.post("/User/Create", data);
  },
  update(id, data) {
    return axiosClient.put(`/User/Update/${id}`, data);
  },
  delete(id) {
    return axiosClient.delete(`/User/Delete/${id}`);
  },
};

export default userApi;
