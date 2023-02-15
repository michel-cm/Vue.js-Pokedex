<template>
  <div>
    <input
      type="text"
      id="pokeFilter"
      placeholder="Search"
      v-model="nameFilter"
    />
    <ul class="poke-list">
      <ListPokes v-for="item in pokeList" :key="item.number" :pokemon="item" />
    </ul>
  </div>
</template>

<script>
import ListPokes from "@/components/ListPokes.vue";
import PokeService from "@/services.js";

export default {
  name: "HomeView",
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
