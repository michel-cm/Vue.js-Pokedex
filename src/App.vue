<template>
  <div id="app">
    <img
      v-rotate-on-scroll
      src="//hanashiro.github.io/pokedex/images/pokeball.svg"
      alt=""
      class="pokeball-back"
    />
    <input type="text" id="pokeFilter" placeholder="Search" />
    <ul class="poke-list">
      <ListPokes
        v-for="item in pokemonList"
        :key="item.number"
        :pokemon="item"
      />
    </ul>
  </div>
</template>

<script>
import "./css/styles.css";
import ListPokes from "@/components/ListPokes.vue";
import "./directives.js";
import PokeService from "@/services.js";

export default {
  name: "app",
  data() {
    return {
      pokemonList: [],
      nameFilter: "",
    };
  },
  components: {
    ListPokes,
  },
  computed: {
    pokeList: function () {
      let nameFilter = this.nameFilter.toLowerCase();
      return this.pokemonList.filter((pokemon) =>
        pokemon.name.includes(nameFilter)
      );
    },
  },
  mounted: function () {
    PokeService.API.Pokemon.listAll().then((pokemonList) => {
      this.pokemonList = pokemonList;
    });
  },
};
</script>

<style></style>
