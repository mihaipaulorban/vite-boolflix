<script>
import { ref, defineComponent } from 'vue';
import { store } from '../store';
import MainSearch from './MainSearch.vue';
import MediaSection from './MediaSection.vue';

export default defineComponent({
  components: {
    MainSearch,
    MediaSection,
  },
  setup() {
    const searchQuery = ref('');
    const movies = ref([]);
    const tvShows = ref([]);

    const searchMedia = (query) => {
      if (query.length > 0) {
        const moviesUrl = store.buildUrl(store.movieURL, { query });
        store.fetchMedia(moviesUrl).then((results) => {
          movies.value = results;
        });

        const tvUrl = store.buildUrl(store.tvURL, { query });
        store.fetchMedia(tvUrl).then((results) => {
          tvShows.value = results;
        });
      }
    };

    return { searchQuery, searchMedia, movies, tvShows };
  },
});
</script>

<template>
  <main-search @search-media="searchMedia" />
  <h2>Film</h2>
  <media-section :media="movies" />
  <h2>TV</h2>
  <media-section :media="tvShows" />
</template>
