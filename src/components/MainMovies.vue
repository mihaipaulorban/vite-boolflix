<script>
export default {
  props: {
    movies: Array,
  },
  methods: {
    convertRating(voteAverage) {
      // Converto il rating da 1-10 a 1-5 arrotondando per eccesso
      return Math.ceil(voteAverage / 2);
    },
  },
};
</script>

<template>
  <div v-for="movie in movies" :key="movie.id">
    <p>{{ movie.original_language }}</p>
    <p>{{ movie.original_title }}</p>
    <p>{{ movie.title }}</p>
    <p>Rating: {{ convertRating(movie.vote_average) }}/5</p>
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
