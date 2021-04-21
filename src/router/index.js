import Vue from "vue";
import VueRouter from "vue-router";
import ProductView from "../view/ProductView.vue";
import CartView from "../view/CartView.vue";
import ExampleView from "../view/ExampleView.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
  routes: [
    {
      path: "/",
      redirect: "/product",
    },
    {
      path: "/product",
      component: ProductView,
    },
    {
      path: "/cart",
      component: CartView,
    },
    {
      path: "/example",
      component: ExampleView,
    },
  ],
});
