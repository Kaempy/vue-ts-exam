import { RootState } from "./types";

const state: RootState = {
  user: null,
  products: {
    fetchedProducts: {
      loading: false,
      status: "idle",
      products: [],
    },
    selectedProduct: {
      loading: false,
      status: "idle",
      product: null,
    },
  },
};
export default state;
