import axiosClient from "./axiosClient";

const categoryApi = {
  getAll() {
    return axiosClient.get("/Category/GetAll");
  },
  get(id) {
    return axiosClient.get(`/Category/GetById/${id}`);
  },
  create(data) {
    return axiosClient.post("/Category/Create", data);
  },
  update(id, data) {
    return axiosClient.put(`/Category/Update/${id}`, data);
  },
  delete(id) {
    return axiosClient.delete(`/Category/Delete/${id}`);
  },
};

export default new categoryApi();
