<script setup>
import usePizzas from '../../composables/usePizzas'
const { allPizzas, deletePizza, message } = usePizzas()
</script>

<template>
  <section class="admin-section">
    <header class="admin-section--header">
      <h3>Menu</h3>
    </header>
    <p class="error" v-if="message">{{ message }}</p>
    <table>
      <thead>
        <tr>
          <th>Pizza</th>
          <th>Remove from menu</th>
        </tr>
      </thead>
      <tbody v-for="pizza in allPizzas" :key="pizza.id">
        <tr>
          <td>{{ pizza.name }}</td>
          <td>
            <button class="button-remove" type="button" @click="deletePizza(pizza.id)">
              &times;
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<style lang="scss" scoped>
.error {
  color: rgb(180 67 67);
  border: 1px solid;
  border-radius: 5px;
  padding: 1rem;
  margin: 1rem;
}
</style>
