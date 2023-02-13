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

export default {
  name: "app",
  data() {
    return {
      pokemonList: [
        { name: "charizard 1", number: "6" },
        { name: "charizard 2", number: "7" },
        { name: "charizard 3", number: "25" },
        { name: "charizard 4", number: "251" },
        { name: "charizard 5", number: "448" },
        { name: "charizard 6", number: "655" },
      ],
      nameFilter: "",
    };
  },
  methods: {},
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
};
</script>

<style></style>
