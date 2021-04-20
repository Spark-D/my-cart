import Vue from "vue";
import Vuex from "vuex";
import {
  getProductList,
  getCartList,
  insertCart,
  deleteCartItem,
  updateCartItem,
} from "../api/index.js";

const EventBus = new Vue();
Vue.use(Vuex);

export const store = new Vuex.Store({
  EventBus: EventBus,
  state: {
    // pageNo: 1,
    productListInfo: {},
    cartList: [],
    insertResult: {},
    cartProducts: [],
    // deleteResult: {},
  },
  getters: {
    // computed랑 같은데 store에 있는것
    getProdList(state) {
      return state.productListInfo;
    },
    getCartList(state) {
      return state.cartList;
    },
    insertCart(state) {
      return state.insertResult;
    },
    getCartProdList(state) {
      return state.cartProducts;
    },
    // deleteCartItem(state) {
    //   return state.deleteResult;
    // },
  },
  mutations: {
    SET_PRODUCT_LIST(state, data) {
      state.productListInfo = data;
    },
    SET_CART_LIST(state, data) {
      state.cartList = data;
    },
    SET_INSERT_CART_RESULT(state, data) {
      state.insertResult = data;
    },
    SET_DELETE_CART_RESULT(state, data) {
      state.deleteResult = data;
    },
    SET_CART_PROD_LIST(state, data) {
      state.cartProducts = data;
    },
  },
  actions: {
    FETCH_PRODUCT_LIST(context, pageNo) {
      getProductList(pageNo)
        .then((response) => {
          context.commit("SET_PRODUCT_LIST", response.data.catePdList);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    FETCH_CART_LIST(context) {
      getCartList()
        .then((response) => {
          console.log("store>>", response.data);
          context.commit("SET_CART_LIST", response.data);
          let cartList = [];
          for (let c of response.data) {
            cartList.push(...c.omCartList);
          }
          // console.log("cartList", cartList);
          let prodList = [];
          for (let c of cartList) {
            prodList.push(...c.product);
          }
          for (let cart of cartList) {
            for (let prd of prodList) {
              if (prd.trNo == cart.trNo && prd.stimNo == cart.stimNo) {
                prd.qty = cart.odQty;
              }
            }
          }
          context.commit("SET_CART_PROD_LIST", prodList);
          //reduce(a => a[0].omCartList)
        })
        .catch((error) => {
          console.log(error);
        });
    },
    INSERT_CART(context, data) {
      insertCart(data)
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            alert("등록되었습니다.");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    DELETE_CART(context, data) {
      deleteCartItem(data)
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            alert("삭제되었습니다.");
            this.dispatch("FETCH_CART_LIST");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    UPDATE_CART(context, data) {
      updateCartItem(data)
        .then((response) => {
          console.log(response);
          this.dispatch("FETCH_CART_LIST");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
