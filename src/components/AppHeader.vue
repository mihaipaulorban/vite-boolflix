<script>
// Importa 'ref' da Vue per creare una reference reattiva
import { ref } from 'vue';

export default {
  props: {
    onSearch: Function,
  },
  setup(props) {
    const searchQuery = ref('');
    // Resetta il valore dell'input dopo la ricerca e fa la ricerca passando il searchQuery
    const onSearch = () => {
      if (searchQuery.value) {
        props.onSearch(searchQuery.value);
        searchQuery.value = '';
      }
    };

    return { searchQuery, onSearch };
  },
};
</script>

<template>
  <header class="search-header">
    <div class="header-content">
      <!-- Logo -->
      <h1 class="logo">Boolflix</h1>

      <!-- Input  per la ricerca -->
      <form @submit.prevent="onSearch" class="search-form">
        <input
          v-model="searchQuery"
          placeholder="Cerca un film o una serie TV..."
          class="search-input"
        />

        <!-- Pulsante -->
        <button type="submit" class="search-button">Cerca</button>
      </form>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.search-header {
  background-color: black;
  padding: 10px 20px;

  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    color: red;
    text-transform: uppercase;
    margin: 0;
    font-weight: 200;
  }

  .search-form {
    display: flex;
    align-items: center;

    .search-input {
      margin-right: 10px;
      background-color: black;
      border-radius: 100px;
      border: solid red 2px;
      color: white;
      padding: 5px 3px;
      width: 300px;
      transition: all 0.5s;
    }

    .search-button {
      margin-right: 10px;
      background-color: black;
      border-radius: 100px;
      border: solid red 2px;
      color: white;
      padding: 5px 3px;
      width: 100px;
      transition: all 0.5s;

      &:hover {
        background-color: red;
        color: black;
      }
    }
  }
}
</style>
