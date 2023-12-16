<script>
import { ref, defineComponent } from 'vue';

export default defineComponent({
  setup(_, { emit }) {
    const searchQuery = ref('');

    const searchMovies = () => {
      if (searchQuery.value.length > 0) {
        emit('search-media', searchQuery.value);
      }
    };

    return { searchQuery, searchMovies };
  },
});
</script>

<template>
  <form @submit.prevent="searchMovies">
    <input
      v-model="searchQuery"
      placeholder="Cerca un film o una serie TV..."
    />
    <button type="submit">Cerca</button>
  </form>
</template>

<style></style>
