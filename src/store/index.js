import Vue from 'vue';
import Vuex from 'vuex';
import { getProductList, getCartList, insertCart } from '../api/index.js'

const EventBus = new Vue();
Vue.use(Vuex);


export const store = new Vuex.Store({
    EventBus: EventBus,
    state: {
        // pageNo: 1,
        productListInfo: {},
        cartList: [],
        insertResult: {}
    },
    getters:{ // computed랑 같은데 store에 있는것
        getProdList(state){
            return state.productListInfo;
        },
        getCartList(state){
            return state.cartList;
        },
        insertCart(state) {
            return state.insertResult;
        }
    },
    mutations:{
        SET_PRODUCT_LIST(state, data) {
            state.productListInfo = data;
        },
        SET_CART_LIST(state, data){
            state.cartList = data;
        },
        SET_INSERT_CART_RESULT(state, data){
            state.insertResult = data;
        }
    },
    actions: {
        FETCH_PRODUCT_LIST(context, pageNo){
            getProductList(pageNo)
            .then(response=> {
                // console.log(response.data);
                context.commit('SET_PRODUCT_LIST', response.data.catePdList);
                // context.commit('SET_PAGE_NO', response.data.catePdList.pageNo);
                // this.state.items = response.data;
            })
            .catch(error => {
                console.log(error);
            })
        },
        FETCH_CART_LIST(context){
            getCartList()
            .then(response=> {
                console.log(response.data);
                context.commit('SET_CART_LIST', response.data);
            })
            .catch(error => {
                console.log(error);
            })
        },
        INSERT_CART(context, data){
            insertCart(data)
            .then(response => {
                console.log(response);
                if(response.status === 200){
                    alert("등록되었습니다.");
                }
            })
            .catch(error => {
                console.log(error);
            })
        }
    }
})