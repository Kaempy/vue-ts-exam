import { createStore, Store } from "vuex";
import { productsModule, authModule } from "./index";
import { RootState } from "./types";

const store: Store<RootState> = createStore({
  modules: {
    products: productsModule,
    auth: authModule,
  },
});

export default store;
