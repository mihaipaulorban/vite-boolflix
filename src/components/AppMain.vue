<script>
import { ref } from 'vue';
import { store } from '../store';
import AppHeader from './AppHeader.vue';
import MediaSection from './MediaSection.vue';

export default {
  components: {
    AppHeader,
    MediaSection,
  },
  setup() {
    // Array vuoti per popolare i film
    const movies = ref([]);
    const tvShows = ref([]);

    const searchMedia = async (query) => {
      // Controlla se la ricerca non è vuota
      if (query.length > 0) {
        // Crea la chiamata per i gilm
        const moviesUrl = store.buildUrl('movie', { query });
        movies.value = await store.fetchMedia(moviesUrl);
        // Crea la chiamata per le serie tv
        const tvUrl = store.buildUrl('tv', { query });
        tvShows.value = await store.fetchMedia(tvUrl);
      }
    };

    return { searchMedia, movies, tvShows };
  },
};
</script>

<template>
  <!-- Header con ricerca -->
  <AppHeader :on-search="searchMedia" />

  <!-- TItoli film e tv con lista popolata -->
  <h2>Film</h2>
  <media-section :media="movies" />
  <h2>TV</h2>
  <media-section :media="tvShows" />
</template>

<style scoped lang="scss">
h2 {
  margin: 30px 30px;
  color: red;
  text-transform: uppercase;
}
</style>
