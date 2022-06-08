import axiosClient from "./axiosClient";

const productApi = {
  getAll() {
    return axiosClient.get("/Product/GetAll");
  },
  get(id) {
    return axiosClient.get(`/Product/GetById/${id}`);
  },
  getAllPageing(data) {
    return axiosClient.get(`/Product/GetAllPageing`, data);
  },
  create(data) {
    return axiosClient.post("/Product/Create", data);
  },
  update(id, data) {
    return axiosClient.put(`/Product/Update/${id}`, data);
  },
  delete(id) {
    return axiosClient.delete(`/Product/Delete/${id}`);
  },
  saveFile() {
    return axiosClient.post("/Product/SaveFile");
  },
};

export default new productApi();
