<script>
export default {
  props: {
    movies: Array,
  },
};
</script>

<template>
  <div v-for="movie in movies" :key="movie.id">
    <p>{{ movie.original_language }}</p>
    <p>{{ movie.original_title }}</p>
    <p>{{ movie.title }}</p>
    <p>{{ movie.vote_average }}</p>
    <img
      :src="
        movie.poster_path
          ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
          : '/PlaceholderPoster.png'
      "
    />
  </div>
</template>

<style></style>
