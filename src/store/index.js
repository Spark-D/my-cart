import Vue from 'vue';
import Vuex from 'vuex';
import { getProductList } from '../api/index.js'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        pageNo: 1,
        products: []
    },
    getters:{ // computed랑 같은데 store에 있는것
        getProdList(state){
            return state.products;
        },
    },
    mutations:{
        SET_PRODUCT_LIST(state, data) {
            state.products = data;
        },
        SET_PAGE_NO(state, data){
            state.pageNo = data;
        }
    },
    actions: {
        FETCH_PRODUCT_LIST(context){
            getProductList(this.state.pageNo)
            .then(response=> {
                console.log(response.data);
                context.commit('SET_PRODUCT_LIST', response.data.catePdList.dataList);
                context.commit('SET_PAGE_NO', response.data.catePdList.pageNo);
                // this.state.items = response.data;
            })
            .catch(error => {
                console.log(error);
            })
        }
    }
})