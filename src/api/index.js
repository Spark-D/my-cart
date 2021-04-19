import axios from "axios";

const config = {
  baseurl: "http://localhost:8080",
};

function getProductList(pageNo) {
  return axios.get(`${config.baseurl}/productList/${pageNo}`);
}

function getCartList() {
  return axios.get(`${config.baseurl}/grpCartList`);
}

function insertCart(data) {
  return axios.post(`${config.baseurl}/cart`, data);
}

function deleteCartItem(cartSn) {
  return axios.delete(`${config.baseurl}/cart/${cartSn}`);
}

function updateCartItem(data) {
  return axios.put(`${config.baseurl}/cart/${data.cartSn}`, data);
}

export {
  getProductList,
  getCartList,
  insertCart,
  deleteCartItem,
  updateCartItem,
};
