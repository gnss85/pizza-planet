<script setup>
import { ref } from 'vue'
import useOrders from '../../composables/useOrders'
const { allOrders, deleteOrder, message } = useOrders()

const showOrders = ref(true)
</script>

<template>
  <section class="admin-section">
    <header class="admin-section--header">
      <h3>Current orders ({{ allOrders.length }})</h3>
      <small class="toggle-button" @click="showOrders = !showOrders">{{
        showOrders ? 'hide' : 'show'
      }}</small>
    </header>
    <p class="error" v-if="message">{{ message }}</p>
    <table v-show="showOrders">
      <tr>
        <th>Item</th>
        <th>Size</th>
        <th>Quantity</th>
        <th>Price (total)</th>
      </tr>
      <template v-for="order in allOrders" :key="order.id">
        <tr>
          <td>
            <strong>Order number: {{ order.id }}</strong>
            <button class="button-remove" type="button" @click="deleteOrder(order.id)">
              &times;
            </button>
          </td>
        </tr>
        <tr v-for="orderItem in order.pizzas" :key="orderItem.name + orderItem.size">
          <td>{{ orderItem.name }}</td>
          <td>{{ orderItem.size }}"</td>
          <td>{{ orderItem.quantity }}</td>
          <td>${{ orderItem.price * orderItem.quantity }}</td>
        </tr>
      </template>
    </table>
  </section>
</template>
