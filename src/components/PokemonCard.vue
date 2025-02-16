<script setup>
  defineProps({
    pokemon: Object,
    pokemonId: Number
  })
</script>

<template>
  <div class="item">
    <div class="item__id">
      #{{ pokemonId }}
    </div>
    <div class="item__image"
      :style="`background-image: url('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png')`">
    </div>
    <div class="item__name">
      {{ pokemon.name }}
    </div>
  </div>
</template>

<style scoped>
.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  line-height: 24px;
  padding: 10px 5px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  transition: all .4s ease-in;
  cursor: pointer;
  background-repeat: no-repeat;
  background-size: cover;
}

.item:hover {
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
}

.item__id {
  color: #2c3e50;
  font-size: 15px;
  line-height: 24px;
  text-align: center;
}

.item__image {
  width: 100%;
  aspect-ratio: 1 / 1;
  background-size: contain;
  padding: 179.913px 0px 0px;
  background-repeat: no-repeat;
}

.item__name {
  font-size: 17.55px;
  font-weight: 700;
  line-height: 28.08px;
  text-align: center;
  text-transform: capitalize;
}
</style>