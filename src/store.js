import axios from 'axios';
import { reactive } from 'vue';

export const store = reactive({
  // Chiave API
  apiKey: '2a94ad3a71b0e38facae850745581952',

  // Funzione per costruire l'URL per le richieste API
  buildUrl(type, params) {
    // URL di base per l'API di ricerca di film/serie TV
    const baseUrl = `https://api.themoviedb.org/3/search/${type}`;
    // Converte i parametri di ricerca in una stringa di query URL
    const query = Object.entries(params)
      .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
      .join('&');
    return `${baseUrl}?api_key=${this.apiKey}&language=it-IT&${query}`;
  },

  async fetchMedia(url) {
    try {
      const response = await axios.get(url);
      return response.data.results;
    } catch (error) {
      console.error('Errore nella chiamata API:', error);
    }
  },
});
