<script>
import MainSearch from './MainSearch.vue';
import MainMovies from './MainMovies.vue';

export default {
  components: {
    MainSearch,
    MainMovies,
  },
  data() {
    return {
      // Array vuoto per memorizzare i film
      movies: [],
    };
  },
  methods: {
    setMovies(newMovies) {
      // Aggiornara l'array di film
      this.movies = newMovies;
    },
  },
};
</script>

<template>
  <!-- Vengono aggiornati i film ad ogni ricerca -->
  <main-search @update-movies="setMovies" />

  <!-- Viene ricevuto l'array di film come prop -->
  <main-movies :movies="movies" />
</template>

<style></style>
