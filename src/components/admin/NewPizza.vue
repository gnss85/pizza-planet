<script setup>
import { ref } from 'vue'
import { addDoc } from 'firebase/firestore'
import { dbPizzasRef } from '../../firebase'
import useAuth from '../../composables/useAuth'
const { userData } = useAuth()

const message = ref('')
const showNewPizza = ref(true)

const newPizza = ref({
  name: 'Eg. Margherita',
  description: 'Eg. A delicious tomato-based pizza topped with mozzarella.',
  options: [
    { size: 9, price: 6.95 },
    { size: 12, price: 12.95 }
  ]
})

async function add() {
  try {
    if (!userData.value) return
    await addDoc(dbPizzasRef, newPizza.value)
    message.value = `Pizza ${newPizza.value.name} has been added`
  } catch (e) {
    message.value = 'There was an error adding a pizza... :('
  }
}
</script>

<template>
  <section class="admin-section">
    <header class="admin-section--header">
      <h3>Add new pizza</h3>
      <small class="toggle-button" @click="showNewPizza = !showNewPizza">{{
        showNewPizza ? 'hide' : 'show'
      }}</small>
    </header>
    <form v-show="showNewPizza">
      <div class="form-group">
        <label for="name">Name</label>
        <input id="name" type="text" v-model="newPizza.name" />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea id="description" rows="5" v-model="newPizza.description"></textarea>
      </div>

      <p><strong>Option 1:</strong></p>

      <div class="form-group">
        <label for="size1">Size (")</label>
        <input id="size1" type="text" v-model="newPizza.options[0].size" />
      </div>
      <div class="form-group">
        <label for="price1">Price</label>
        <input id="price1" type="text" v-model="newPizza.options[0].price" />
      </div>

      <p><strong>Option 2:</strong></p>

      <div class="form-group">
        <label for="size2">Size (")</label>
        <input id="size2" type="text" v-model="newPizza.options[1].size" />
      </div>
      <div class="form-group">
        <label for="price2">Price</label>
        <input id="price2" type="text" v-model="newPizza.options[1].price" />
      </div>
      <div class="form-group">
        <button @click.prevent="add">Add</button>
        <span class="message">{{ message }}</span>
      </div>
    </form>
  </section>
</template>

<style lang="scss" scoped>
.message {
  margin-inline-start: 1rem;
}
</style>
