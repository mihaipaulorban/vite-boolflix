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
  <div class="container">
    <div class="row">
      <!-- Iterazione sui film -->
      <div class="col-md-4 col-12" v-for="movie in movies" :key="movie.id">
        <div class="movie-card">
          <!-- Immagine del film -->
          <div class="poster-container">
            <img
              :src="
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                  : '/PlaceholderPoster.png'
              "
              class="movie-poster"
            />
          </div>
          <!-- Informazioni del film -->
          <div class="movie-info">
            <p>{{ movie.original_language }}</p>
            <p>{{ movie.original_title }}</p>
            <p>{{ movie.title }}</p>
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  padding: 20px;

  .movie-card {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .movie-poster {
      width: 100%;
      max-height: 400px;
      object-fit: cover;
    }

    .movie-info {
      width: 100%;
      text-align: center;
      margin-top: 10px;
    }

    .rating i {
      color: gold;
    }
  }
}
</style>
