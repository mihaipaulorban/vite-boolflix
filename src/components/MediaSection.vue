<script>
export default {
  props: {
    media: Array,
  },
  methods: {
    convertRating(voteAverage) {
      // Converte il rating da 1-10 a 1-5
      return Math.ceil(voteAverage / 2);
    },
  },
};
</script>

<template>
  <div class="media-container">
    <!-- Itera i film dalla chiamata api -->
    <div class="media-card" v-for="mediaItem in media" :key="mediaItem.id">
      <!-- Poster e info container -->
      <div class="poster-container">
        <!-- Poster-->
        <img
          :src="
            mediaItem.poster_path
              ? `https://image.tmdb.org/t/p/w200/${mediaItem.poster_path}`
              : '../../public/PlaceholderPoster.png'
          "
          alt="Media Poster"
          class="media-poster"
        />
        <!-- Media info on hover -->
        <div class="media-info">
          <p>{{ mediaItem.original_language.toUpperCase() }}</p>
          <p>{{ mediaItem.original_title || mediaItem.name }}</p>
          <p>{{ mediaItem.title || mediaItem.name }}</p>
          <div class="rating">
            <!-- Stelle piene -->
            <i
              class="bi bi-star-fill"
              v-for="star in convertRating(mediaItem.vote_average)"
              :key="`filled-${star}`"
            ></i>
            <!-- Stelle Vuote -->
            <i
              class="bi bi-star"
              v-for="emptyStar in 5 - convertRating(mediaItem.vote_average)"
              :key="`empty-${emptyStar}`"
            ></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
$card-margin: 20px;
$poster-width: 200px;
$poster-height: 300px;

.media-container {
  margin: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: $card-margin;

  .media-card {
    width: $poster-width;
    height: $poster-height;
    margin-bottom: $card-margin;

    .poster-container {
      position: relative;
      width: 100%;
      height: 100%;

      img.media-poster {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .media-info {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.7);
        color: white;
        overflow-y: auto;
        padding: 10px;
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
        text-align: left;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      &:hover .media-info {
        opacity: 1;
      }
    }
  }
}

.rating i {
  color: gold;
}
</style>
