import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/apivit45muic/pokedexdata',  // notice that it doesn't include books
    withCredentials: false,
    headers: {
        Accept: 'application/json',   // what client expect
        'Content-Type': 'application/json' // descriping our request content (none here)
    }
})

export default {
    getPokemons() { 
        return apiClient.get('/pokemons').catch(error => {
            console.error("Error fetching pokemons:", error);
            throw error;
        });
    },
    getPokemon(name) {
        return apiClient.get('/pokemons?name=' + name).catch(error => {
            console.error("Error fetching pokemon:", error);
            throw error;
        });
    }     
}