# Boolflix

Il progetto nasce come un clone di Netflix o di un qualsiasi sito di straming, con l'obbiettivo di poter cercare dei film o serie TV e ricevere in cambio delle info degli stessi.

## API TMDB

Usiamo l'API di The Movie Database per ottenere le informazioni e la lista di film.

#### Ottengo i film

| Parameter | Type     | Description                           |
| :-------- | :------- | :------------------------------------ |
| `query`   | `string` | il testo inserito per fare la ricerca |

USo questa chiamata in particolare per fare la ricerca del film.

Tutto tramite un input nel dom

## Documentazione dell'API

[TheMovieDB](https://readme.so/editor) <-- Questo link porta al sito per la documentazione in cui é possibile fare anche test di chiamata.

## Store.js

Nello store.js ho diviso il tutto in

```http
    baseURL: 'https://api.themoviedb.org/3/search/movie',

    apiKey: '2a94ad3a71b0e38facae850745581952',
```

Che mi procurano l'URL di base per la chiamata e tramite una fuzione di filtro chiamata `buildUrl` le unisco.

## Funzione di ricerca

Per la ricerca ho una funzione `searchMovies` che si basa su `ref` che è una funzione fornita dalla Composition API di Vue.js, utilizzata per creare una variabile reattiva.

Usando ref, qualsiasi valore che assegno a questa variabile diventa reattivo, il che significa che Vue traccia le sue modifiche e aggiorna automaticamente il DOM quando il valore cambia.

La variabile é quindi collegata all'input che ne comunica il valore.
