<template>
  <div>
    <router-link class="back-button" to="/"> &lt; </router-link>

    <div class="poke-profile">
      <div>#{{ $route.params.number }} - {{ pkm.name }}</div>
      <img
        :src="'//serebii.net/sunmoon/pokemon/' + $route.params.number + '.png'"
        class="poke-sprite"
      />
    </div>

    <ul class="poke-types">
      <li v-for="(type, index) in pkm.types" :key="index">
        <img :src="'//serebii.net/pokedex-bw/type/' + type.name + '.gif'" />
      </li>
    </ul>

    <table class="stats">
      <tr>
        <td>Attack</td>
        <td>Defense</td>
        <td>Sp Atk</td>
        <td>Sp Def</td>
        <td>Speed</td>
      </tr>
      <tr>
        <td>{{ pkm.attack }}</td>
        <td>{{ pkm.defense }}</td>
        <td>{{ pkm.sp_atk }}</td>
        <td>{{ pkm.sp_def }}</td>
        <td>{{ pkm.speed }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import PokeService from "@/services";
export default {
  name: "AboutView",
  data() {
    return {
      pkm: { types: [] },
    };
  },
  mounted() {
    PokeService.API.Pokemon.find(this.$route.params.number).then((pokemon) => {
      this.pkm = pokemon;
    });
  },
};
</script>
