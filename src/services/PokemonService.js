import { getDatabase, ref, get, child } from "firebase/database";
// Import the Realtime Database reference
import { realtimeDb } from '@/js/firebase.js'; // Adjust the path to your firebase.js

// Then use realtimeDb in your service
const dbRef = ref(realtimeDb);
// const db = getDatabase(); // Assuming you've initialized Firebase elsewhere

const getPokemons = async () => {
  try {
    const dbRef = ref(realtimeDb);
    const snapshot = await get(child(dbRef, 'pokemons/'));
    if (snapshot.exists()) {
      let pokemons = [];
      snapshot.forEach(childSnapshot => {
        let pokemon = { id: childSnapshot.key, ...childSnapshot.val() };
        pokemons.push(pokemon);
      });
      return pokemons;
    } else {
      console.log("No data available");
      return [];
    }
  } catch (error) {
    console.error("Error fetching pokemons:", error);
    throw error;
  }
};

const getPokemon = async (name) => {
    try {
      const dbRef = ref(realtimeDb);
      const snapshot = await get(child(dbRef, 'pokemons/'));
      if (snapshot.exists()) {
        let foundPokemon = null;
        snapshot.forEach(childSnapshot => {
          if (childSnapshot.val().name === name) {
            foundPokemon = { id: childSnapshot.key, ...childSnapshot.val() };
          }
        });
        return foundPokemon;
      } else {
        console.log("No data available");
        return null;
      }
    } catch (error) {
      console.error("Error fetching pokemon:", error);
      throw error;
    }
  };
  

export default {
  getPokemons,
  getPokemon
};
