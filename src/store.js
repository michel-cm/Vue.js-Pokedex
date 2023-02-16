import Vue from "vue";
import Vuex from "vuex";

import PokeService from "@/services.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pokemonList: [],
    loaded: false,
  },
  mutations: {
    SET_POKEMON_LIST(state, payload) {
      state.pokemonList = payload;
      state.loaded = true;
    },
  },
  actions: {
    async fetchPokedex({ commit, state }) {
      if (!state.loaded) {
        const pokemonList = await PokeService.API.Pokemon.listAll();
        commit("SET_POKEMON_LIST", pokemonList);
      }
    },
  },
});
