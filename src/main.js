import Vue from "vue";
import App from "./App.vue";
import lodash from "lodash";
import { router } from "./router/index.js";
import { store } from "./store/index.js";
import { debounce } from "vue-debounce";

Vue.config.productionTip = false;
Vue.use(debounce);
Vue.use(lodash);
export const eventBus = new Vue();
// Vue.prototype.EventBus = new Vue();

new Vue({
  render: (h) => h(App),
  router: router,
  store: store,
  // debounce: debounce,
}).$mount("#app");
