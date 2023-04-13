<script setup>
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
</script>

<template>
  <AppHeader />
  <RouterView />
  <div class="info-block-wrapper">
    <RouterView name="delivery" />
    <RouterView name="history" />
  </div>
</template>

<style lang="scss" scoped>
.info-block-wrapper {
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 90em) {
    flex-direction: row;
  }
}
</style>
