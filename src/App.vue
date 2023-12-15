<script>
import AppMain from './components/AppMain.vue';

export default {
  components: {
    AppMain,
  },
};
</script>

<template>
  <app-main />
</template>

<style scoped lang="scss">
@use 'src/assets/scss/partials/_variables.scss' as *;
@use 'src/assets/scss/partials/_common.scss' as *;
@use 'src/assets/scss/partials/_reset.scss' as *;
</style>
