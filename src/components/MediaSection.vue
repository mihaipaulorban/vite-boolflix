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
    <!-- Iterazione sui media -->
    <div class="media-card" v-for="mediaItem in media" :key="mediaItem.id">
      <!-- Container poster con immagine e informazioni -->
      <div class="poster-container">
        <!-- Immagine del media -->
        <img
          :src="
            mediaItem.poster_path
              ? `https://image.tmdb.org/t/p/w200/${mediaItem.poster_path}`
              : '../../public/PlaceholderPoster.png'
          "
          alt="Media Poster"
          class="media-poster"
        />
        <!-- Informazioni del media visibili al passaggio del mouse -->
        <div class="media-info">
          <div class="media-lang">
            <!-- Mostra l'immagine della bandiera per l'inglese -->
            <img
              v-if="mediaItem.original_language === 'en'"
              src="../../public/us.png"
              alt="US Flag"
              class="flag-icon"
            />
            <!-- Mostra l'immagine della bandiera per l'italiano -->
            <img
              v-if="mediaItem.original_language === 'it'"
              src="../../public/it.png"
              alt="Italy Flag"
              class="flag-icon"
            />
            <!-- Mostra il testo della lingua solo per le altre lingue -->
            <span
              v-if="
                mediaItem.original_language !== 'en' &&
                mediaItem.original_language !== 'it'
              "
            >
              {{ mediaItem.original_language.toUpperCase() }}
            </span>
          </div>
          <p>{{ mediaItem.original_title || mediaItem.name }}</p>
          <p>{{ mediaItem.title || mediaItem.name }}</p>
          <p class="overview">{{ mediaItem.overview }}</p>
          <div class="rating">
            <!-- Stelle piene -->
            <i
              class="bi bi-star-fill"
              v-for="star in convertRating(mediaItem.vote_average)"
              :key="star"
            ></i>
            <!-- Stelle vuote -->
            <i
              class="bi bi-star"
              v-for="emptyStar in 5 - convertRating(mediaItem.vote_average)"
              :key="emptyStar"
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
    border: 2px solid white;

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
        .overview {
          max-height: 100px;
          overflow-y: auto;
          margin-top: 10px;
        }

        .flag-icon {
          width: 32px;
          height: auto;
          display: block;
        }
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
