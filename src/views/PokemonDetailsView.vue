<script setup>
import { ref, onMounted } from 'vue'
import PokemonService from '@/services/PokemonService.js'

// In PokemonDetailsView.vue script setup

const pokemon = ref(null)
const props = defineProps({
    name: { type: String, required: true }
})

onMounted(() => {
    console.log("Pokemon name received in details view:", props.name); // Log the received name

    PokemonService.getPokemon(props.name)
    .then((response) => {
        if (response.data.length > 0) {
            pokemon.value = response.data[0];
            console.log("Fetched Pokemon Details:", pokemon.value); // Log fetched pokemon details
        } else {
            console.error("Pokemon not found");
        }
    })
    .catch((error) => {
        console.error("Error fetching pokemon details:", error);
    })
})

const getTypeColor = (type) => {
  switch (type.toLowerCase()) {
    case 'grass': return '#78C850'; // Lighter green
    case 'poison': return '#B97FC9'; // Lighter purple
    case 'fire': return '#FA6C6C'; // Lighter red
    case 'flying': return '#A890F0'; // Lighter purple, adjusted
    case 'bug': return '#C6D16E'; // Lighter yellow-green
    case 'normal': return '#C6C6A7'; // Light beige
    case 'ground': return '#EBD69D'; // Light brown
    case 'fairy': return '#F4C6D5'; // Light pink
    case 'ice': return '#BCE6E6'; // Light blue
    case 'psychic': return '#FA92B2'; // Light pink-red
    
    default: return ''; // Default case for types not listed
  }
}



</script>

<template>
    <div v-if="pokemon" class="detail-container">
        <h1>{{ pokemon.name }}</h1>
        <img :src="pokemon.image_url" alt="Image of {{ pokemon.name }}">
        <p class="detail-info">
            Type: 
            <span :style="{ backgroundColor: getTypeColor(pokemon.type1) }">{{ pokemon.type1 }}</span> /
            <span :style="{ backgroundColor: getTypeColor(pokemon.type2) }">{{ pokemon.type2 }}</span>
        </p>
        <p class="detail-info">Japanese Name: <span>{{ pokemon.jpname }}</span></p>
        <p class="detail-info">Evolution: <span>{{ pokemon.evolution }}</span></p>
    </div>
</template>



<style>

.detail-container {
  max-width: 800px; /* Adjust as needed */
  margin: 20px auto; /* Centering the card */
  padding: 20px;
  background-color: #fff; /* Card background */
  border-radius: 10px; /* Rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  text-align: center;
}

.detail-container img {
  max-width: 100%;
  height: auto;
  border-radius: 5px;
}

.detail-container h1 {
  color: #333; /* Title color */
  margin-bottom: 15px;
}

.detail-info {
  margin-top: 10px;
  font-size: 1.1em;
  color: #555; /* Detail text color */
}

.detail-info span {
  display: inline-block;
  margin: 5px;
  padding: 5px 10px;
  background-color: #f2f2f2; /* Background for type tags */
  border-radius: 5px;
}
</style>
