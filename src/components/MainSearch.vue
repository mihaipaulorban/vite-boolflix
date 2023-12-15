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

        // Effettua la chiamata API e emette l'evento con i risultati
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
  <div>
    <input
      v-model="searchQuery"
      @input="searchMovies"
      placeholder="Cerca un film..."
    />
  </div>
</template>

<style></style>
