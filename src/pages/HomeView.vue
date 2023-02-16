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

export default {
  name: "HomeView",
  data() {
    return {
      nameFilter: "",
    };
  },
  components: {
    ListPokes,
  },
  computed: {
    pokeList: function () {
      return this.$store.state.pokemonList;
    },
  },
  created() {
    this.$store.dispatch("fetchPokedex");
  },
};
</script>
