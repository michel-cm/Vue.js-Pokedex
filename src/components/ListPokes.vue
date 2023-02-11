<template>
  <div>
    <li class="poke-list-item">
      <img :src="sprite" alt="" />
      <span>{{ pokemon.number | pokeNumber }} - {{ pokemon.name }}</span>
    </li>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  name: "ListPokes",
  props: {
    pokemon: Object,
  },
  computed: {
    number: function () {
      return Vue.filter("pokeNumber")(this.pokemon.number);
    },
    sprite: function () {
      return `//serebii.net/pokedex-xy/icon/${this.number}.png`;
    },
  },
};
</script>
