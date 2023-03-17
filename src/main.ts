import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import "./styles.css";
import router from "@router/index";
import store from "@store/store";
import { firebaseApp } from "@config/firebase";

firebaseApp;
createApp(App).use(store).use(router).mount("#app");
