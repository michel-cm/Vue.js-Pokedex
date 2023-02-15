<template>
  <div id="app">
    <img
      v-rotate-on-scroll
      src="//hanashiro.github.io/pokedex/images/pokeball.svg"
      alt=""
      class="pokeball-back"
    />

    <router-view></router-view>
  </div>
</template>

<script>
import "./css/styles.css";
import "./directives.js";

export default {
  name: "app",
};
</script>

<style></style>
