<script setup>
import { ref, onMounted } from 'vue'
import ProductCard from '@/components/ProductCard.vue'
import PokemonService from '@/services/PokemonService.js' // Import the Pokemon service

const pokemons = ref(null) // Change the variable name to reflect its purpose

onMounted(() => {
  PokemonService.getPokemons() // Use the appropriate service method
  .then((response)=> {
    pokemons.value = response.data // Assign the response to pokemons
  })
  .catch((error) => {
    console.log(error)
  })
})
</script>


<template>
  <div class="products">
    <ProductCard v-for="pokemon in pokemons" :key="pokemon.id" :pokemon="pokemon" />
  </div>
</template>

<style scoped>
.products {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around; /* Adjust as needed for spacing */
}

.pokemon-card {
  flex-basis: calc(50% - 20px); /* Adjust width for two cards per row, minus some margin */
  margin: 10px; /* Adjust as needed for spacing */
  
}

</style>
