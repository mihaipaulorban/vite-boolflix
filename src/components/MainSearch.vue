<script>
import { ref } from 'vue';
import { store } from '../store';

export default {
  emits: ['update-movies'],
  setup(_, { emit }) {
    // Crea una variabile reattiva per la ricerca che camvia in automatico
    const searchQuery = ref('');

    // Funzione che viene chiamata quando il testo nell'input cambia
    const searchMovies = () => {
      if (searchQuery.value.length > 0) {
        const url = store.buildUrl({ query: searchQuery.value });
        store.fetchMovies(url).then((movies) => {
          emit('update-movies', movies);
        });
      }
    };

    return { searchQuery, searchMovies };
  },
};
</script>

<template>
  <!-- Form per gestire la ricerca -->
  <form @submit.prevent="searchMovies">
    <input v-model="searchQuery" placeholder="Cerca un film..." />
    <!-- Pulsante per inviare la ricerca -->
    <button type="submit">Cerca</button>
  </form>
</template>

<style></style>
