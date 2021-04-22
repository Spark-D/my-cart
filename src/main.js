import Vue from "vue";
import App from "./App.vue";
import lodash from "lodash";
import { router } from "./router/index.js";
import { store } from "./store/index.js";
import { debounce } from "vue-debounce";
import VueLazyload from "vue-lazyload";

Vue.config.productionTip = false;
Vue.use(debounce);
Vue.use(lodash);

Vue.use(VueLazyload, {
  preLoad: 1, // 로딩 줄 수
  attempt: 1, // 시도 횟수
  listenEvents: ["scroll"],
});

export const eventBus = new Vue();

new Vue({
  render: (h) => h(App),
  router: router,
  store: store,
  // debounce: debounce,
}).$mount("#app");
