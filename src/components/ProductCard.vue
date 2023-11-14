<script setup>
const props = defineProps({
  pokemon: {
    type: Object,
    required: true,
  }
})

console.log("Received Pokemon in Card:", props.pokemon);
</script>

<!-- <template>
<RouterLink :to="{ name: 'book-details', params: {id: book.id} }" >    <div class="product-card">
      <h2>{{ book.title }}</h2>
      <span>Price: {{ book.price }} B , Condition: {{ book.condition }}</span>
    </div>
  </RouterLink>
</template> -->
<template>
  <RouterLink :to="{ name: 'pokemon-details', params: {name: pokemon.name} }">
    <div class="pokemon-card">
      <img :src="pokemon.image_url" :alt="`Image of ${pokemon.name}`" class="pokemon-image">
      <h2>{{ pokemon.name }}</h2>
      <span>Type: {{ pokemon.type1 }} / {{ pokemon.type2 }}</span>
      <!-- Add more details as needed -->
    </div>
  </RouterLink>
</template>


<style scoped>
.pokemon-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
  text-align: center;
}

.pokemon-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

.pokemon-image {
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
}
</style>
