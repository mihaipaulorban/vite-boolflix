// Importo Vue e Axios
import { reactive } from 'vue';
import axios from 'axios';

export const store = reactive({
  //URL di base
  baseURL: 'https://api.themoviedb.org/3/search/movie',
  //   API Key personale
  apiKey: '2a94ad3a71b0e38facae850745581952',

  //   Questa funzione costruisce l'url finale con cui viene fatta la chiamata all'API
  buildUrl(filters) {
    let url = `${this.baseURL}?api_key=${this.apiKey}&language=it-IT`;
    for (const key in filters) {
      url += `&${key}=${encodeURIComponent(filters[key])}`;
    }
    return url;
  },

  //   Effettua la chiamata e mostra in console
  fetchMovies(url) {
    return axios.get(url).then((response) => response.data.results);
  },
});
