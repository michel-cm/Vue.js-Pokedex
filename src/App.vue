<template>
  <div id="app">
    <img
      src="//hanashiro.github.io/pokedex/images/pokeball.svg"
      alt=""
      class="pokeball-back"
    />
    <input type="text" id="pokeFilter" placeholder="Search" />
    <ul class="poke-list">
      <li
        v-for="(item, index) in pokemonList"
        :key="index"
        class="poke-list-item"
      >
        <img
          :src="'//serebii.net/pokedex-xy/icon/' + item.number + '.png'"
          alt=""
        />
        <span>{{ item.number }} - {{ item.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import "./css/styles.css";

export default {
  name: "App",
  data() {
    return {
      pokemonList: [
        { name: "Charizard 1", number: "006" },
        { name: "Charizard 2", number: "007" },
        { name: "Charizard 3", number: "008" },
        { name: "Charizard 4", number: "009" },
        { name: "Charizard 5", number: "448" },
        { name: "Charizard 6", number: "655" },
      ],
    };
  },
  components: {},
};
</script>

<style></style>
