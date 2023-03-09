import { createApp } from "vue";
import App from "./app.vue";
import xuui from "@xu-ui/components";

const app = createApp(App);
app.use(xuui)
app.mount("#app");
