<script setup></script>

<template>
  <main class="hot">
    <div class="hot--text">
      <h3>Hot out the oven!</h3>
      <p class="hot--pizza-name">Vegetarian Hot Pizza</p>
      <p class="hot--pizza-description">Our signature vegetarian, but with a kick...</p>
      <RouterLink :to="{ name: 'menuLink' }">Let's Order</RouterLink>
    </div>
    <img class="hot--image" src="../assets/images/fire.jpg" alt="pizza oven image" />
  </main>
</template>

<style lang="scss" scoped>
.hot {
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 50em) {
    flex-direction: row;
  }

  &--image,
  &--text {
    flex: 1;
    padding: 2rem;
    text-align: center;
  }

  &--text {
    h3 {
      color: #bb2118;
    }
  }

  &--pizza-name {
    font-size: 1.8rem;
  }

  &--pizza-description {
    font-style: italic;
    font-weight: 300;
  }
}
</style>
