<template>
  <div class="about">
    <section class="intro">
      <div class="info--text-wrapper">
        <h3>Quality Pizza For 30 Years</h3>
        <p class="info--text">
          Nothing but the best quality ingredients, with a friendly atmosphere.
        </p>
      </div>
      <img class="info--image" src="../assets/images/calzone.jpg" alt="calzone closeup image" />
    </section>
    <section class="more-info-wrapper">
      <h3>Click on the links for more info</h3>
      <nav>
        <ul>
          <RouterLink :to="{ name: 'historyLink' }" class="link">Our history</RouterLink>
          <RouterLink :to="{ name: 'deliveryLink' }" class="link">Delivery</RouterLink>
          <RouterLink :to="{ name: 'locationsLink' }" class="link">Locations</RouterLink>
        </ul>
      </nav>
      <RouterView />
    </section>
  </div>
</template>

<style lang="scss" scoped>
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.intro {
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 50em) {
    flex-direction: row;
  }
}
</style>
