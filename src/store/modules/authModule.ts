import axiosClient from "@src/api/axiosClient";
import { ActionTree, GetterTree, Module, MutationTree } from "vuex";
import { AuthState, loginProps, RootState, UserProps } from "../types";

const state: AuthState = {
  user: null,
};

const mutations: MutationTree<AuthState> = {
  setUser(state, credentials: UserProps) {
    state.user = credentials;
  },
};

const actions: ActionTree<AuthState, RootState> = {
  async login({ commit }, data: loginProps) {
    const config = {
      url: `login`,
      method: `post`,
      data,
    };
    const response = await axiosClient(config);
    const credentials = response.data;
    commit("setUser", credentials);
  },
  async logout({ commit }) {
    commit("setUser", null);
  },
};

const getters: GetterTree<AuthState, RootState> = {
  isAuthenticated(state) {
    return state.user !== null;
  },
};

const authModule: Module<AuthState, RootState> = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};

export default authModule;
