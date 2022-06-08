import axios from "axios";
export const getProducts = ({ commit }) => {
  axios
    .get("https://localhost:44309/api/Product/GetAll")
    .then((res) => {
      commit("SET_PRODUCTS", res.data);
    })
    .catch((error) => console.log(error));
};

export const getCategories = ({ commit }) => {
  axios
    .get("https://localhost:44309/api/Category/GetAll")
    .then((res) => {
      commit("SET_CATEGORIES", res.data);
    })
    .catch((error) => console.log(error));
};

export const getUsers = ({ commit }) => {
  axios
    .get("https://localhost:44309/api/User/GetAll")
    .then((res) => {
      commit("SET_USERS", res.data);
    })
    .catch((error) => console.log(error));
};

export const getOrderDetailId = ({ commit }, id) => {
  axios
    .get(`https://localhost:44309/api/Order/GetById/${id}`)
    .then((response) => {
      commit("SET_ORDER_DETAIL_ID", response.data);
      console.log(response.data);
    });
};

export const getOrdersStatic = ({ commit }) => {
  axios
    .get("https://localhost:44309/api/Order/Statistical")
    .then((response) => {
      commit("SET_ORDER_STATIC", response.data);
      console.log(response);
    });
};
