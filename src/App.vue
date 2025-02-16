<script setup>
import { ref, computed } from 'vue'
import PokemonCard from './components/PokemonCard.vue'
import { fetchAPI, getIDPokemon } from '../utils/index.js'

let pokemons = [];
const offset = ref(0);
const NUMBER_OF_RENDER = 36;
const filteredPokemons = ref([]);

const renderPokemons = computed(() => filteredPokemons.value.slice(0, offset.value + NUMBER_OF_RENDER));

async function getPokemon() {
  const data = await fetchAPI('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=898');
  pokemons = data.results;
  filteredPokemons.value = pokemons;
}

getPokemon();

function handleLoadMore() {
  offset.value += NUMBER_OF_RENDER;
}

function handleSearch(event) {
  filteredPokemons.value = pokemons.filter((pokemon) => {
    return pokemon.name.includes(event.target.value);
  });
  offset.value = 0;
}
</script>

<template>
  <div class="container">
    <!-- Title Section -->
    <div class="title">
      <p class="title__main">Pokemon API</p>
      <input class="title__input" type="text" placeholder="Search some Pokemon..." @input="handleSearch">
    </div>

    <div class="items">
      <PokemonCard
        v-for="item in renderPokemons"
        :key="item.name"
        :pokemon="item"
        :pokemonId="getIDPokemon(item.url)"
      />
    </div>

    <!-- Load more button -->
    <button class="load-more" @click="handleLoadMore">Load more</button>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: "Inter", sans-serif;
}

.container {
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
}

.title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 70px 0;
}

.title__main {
  color: #2c3e50;
  font-size: 37.5px;
  line-height: 60px;
  margin-bottom: 30px;
  font-weight: 400;
}

.title__input {
  width: 500px;
  padding: 20px;
  background-color: #fff;
  border-radius: 30px;
  font-family: "Arial", sans-serif;
  box-shadow: #64646f33 0px 7px 29px 0px;
  border: grey solid 1px;
}

.items {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 15.87%);
  gap: 10px;
  padding: 0 10px;
}

@media screen and (max-width: 1199px) {
  .items {
    display: grid;
    grid-template-columns: repeat(4, 24.375%);
  }
}

@media screen and (max-width: 956px) {
  .items {
    display: grid;
    grid-template-columns: repeat(3, 32.77%);
  }
}

@media screen and (max-width: 768px) {
  .items {
    display: grid;
    grid-template-columns: repeat(2, 49.58%);
  }
}

.load-more {
  background-color: #ff4d4f;
  border-radius: 10px;
  color: #fff;
  padding: 20px 25px;
  text-align: center;
  border: none;
  margin-top: 20px;
  margin-bottom: 20px;
  cursor: pointer;
}
</style>