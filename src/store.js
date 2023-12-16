import { reactive } from 'vue';
import axios from 'axios';

export const store = reactive({
  // URL di base per i film
  movieURL: 'https://api.themoviedb.org/3/search/movie',
  // URL di base per le serie TV
  tvURL: 'https://api.themoviedb.org/3/search/tv',
  // API Key
  apiKey: '2a94ad3a71b0e38facae850745581952',

  // Costruisce l'URL finale per le chiamate API
  buildUrl(baseURL, filters) {
    let url = `${baseURL}?api_key=${this.apiKey}&language=it-IT`;
    for (const key in filters) {
      url += `&${key}=${encodeURIComponent(filters[key])}`;
    }
    return url;
  },

  // Effettua la chiamata API per film e serie TV
  fetchMedia(url) {
    return axios.get(url).then((response) => response.data.results);
  },
});
