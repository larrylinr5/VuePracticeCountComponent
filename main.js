import { createApp } from "https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.26/vue.esm-browser.prod.min.js";
import child from "/template.js";

const app = createApp({
  data() {
    return {};
  },
});

app.component("button-counter", child.fn());

app.mount("#app");
