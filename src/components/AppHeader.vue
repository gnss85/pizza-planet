<script setup>
import SignIn from './SignIn.vue'
</script>

<template>
  <header>
    <SignIn />
    <h1 class="site--title">
      <RouterLink :to="{ name: 'home' }">~ Pizza Planet ~</RouterLink>
    </h1>
    <nav>
      <RouterLink class="link" :to="{ name: 'home' }">Home</RouterLink>
      <RouterLink class="link" :to="{ name: 'menuLink' }">Menu</RouterLink>
      <RouterLink class="link" :to="{ name: 'aboutLink' }">About</RouterLink>
      <RouterLink class="link" :to="{ name: 'adminLink' }">Admin</RouterLink>
    </nav>
    <h2>The #1 Place For Pizza</h2>
  </header>
</template>

<style lang="scss" scoped>
.site--title {
  font-size: 3.6rem;
  color: aliceblue;
  rotate: -8deg;
  margin-block-end: 2rem;
}

header {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-block: 2rem;
  height: 650px;
  color: aliceblue;
  background-image: url(../assets/images/main-bg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  text-shadow: 1px 1px 3px rgb(20 20 20);
}

h2 {
  margin-block: 2rem;
  color: antiquewhite;
  font-size: 2rem;
}
</style>
