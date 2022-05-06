import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./css/index.css";

const app = createApp(App);
const clickOutside = {
  beforeMount: (el: any, binding: any) => {
    el.clickOutsideEvent = (event: any) => {
      // here I check that click was outside the el and his children
      if (!(el == event.target || el.contains(event.target))) {
        // and if it did, call method provided in attribute value
        binding.value();
      }
    };
    document.addEventListener("click", el.clickOutsideEvent);
  },
  unmounted: (el: any) => {
    document.removeEventListener("click", el.clickOutsideEvent);
  },
};
app.directive("click-outside", clickOutside);
app.use(store).use(router).mount("#app");
