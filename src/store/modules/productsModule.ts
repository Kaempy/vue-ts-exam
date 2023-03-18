import axiosClient from "@src/api/axiosClient";
import { Module, MutationTree, ActionTree } from "vuex";
import { RootState, ProductState, ProductProps } from "../types";

const state: ProductState = {
  fetchedProducts: {
    loading: false,
    products: [],
    status: "idle",
  },
  selectedProduct: {
    loading: false,
    product: null,
    status: "idle",
  },
};

const mutations: MutationTree<ProductState> = {
  setProducts(state, products: ProductProps[]) {
    state.fetchedProducts.products = products;
  },
  setProduct(state, product: ProductProps) {
    state.selectedProduct.product = product;
  },
};

const actions: ActionTree<ProductState, RootState> = {
  async fetchProducts({ commit }) {
    try {
      const response = await axiosClient.get(`products`);
      const products = response.data.products;
      commit("setProducts", products);
    } catch (error) {
      console.error(error);
    }
  },
  async fetchProduct({ commit }, productId: number) {
    try {
      const response = await axiosClient.get(`products/${productId}`);
      const product = response.data;
      commit("setProduct", product);
    } catch (error) {
      console.error(error);
    }
  },
};

const productsModule: Module<ProductState, RootState> = {
  namespaced: true,
  state,
  mutations,
  actions,
};

export default productsModule;
