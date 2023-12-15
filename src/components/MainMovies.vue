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
  <!-- Info film -->
  <div v-for="movie in movies" :key="movie.id">
    <p>{{ movie.original_language }}</p>
    <p>{{ movie.original_title }}</p>
    <p>{{ movie.title }}</p>
    <!-- Valutazione Film -->
    <div class="rating">
      <!-- Stelle piene -->
      <i
        class="bi bi-star-fill"
        v-for="star in convertRating(movie.vote_average)"
        :key="star"
      ></i>
      <!-- Stelle vuote -->
      <i
        class="bi bi-star"
        v-for="emptyStar in 5 - convertRating(movie.vote_average)"
        :key="emptyStar"
      ></i>
    </div>
    <img
      :src="
        movie.poster_path
          ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
          : '/PlaceholderPoster.png'
      "
    />
  </div>
</template>

<style scoped lang="scss">
.rating i {
  color: gold;
}
</style>
