<script>
// Importo il ref da vue per usarla per fare una variabile reattiva
import { ref } from 'vue';
import { store } from './store';
export default {
  name: 'DefaultTemplate',
  setup() {
    // ref traccia le modifiche e aggiorna il DOM quando il valore cambia
    const searchQuery = ref('');

    // Funzione per la ricerca in base al searchQuery
    const searchMovies = () => {
      if (searchQuery.value.length > 0) {
        const url = store.buildUrl({ query: searchQuery.value });
        store.fetchMovies(url);
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

<style scoped lang="scss">
@use 'src/assets/scss/partials/_variables.scss' as *;
@use 'src/assets/scss/partials/_common.scss' as *;
@use 'src/assets/scss/partials/_reset.scss' as *;
</style>
