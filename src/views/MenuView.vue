<script setup>
import { ref, computed } from 'vue'
import useBasket from '@/composables/useBasket'

const { basket, addToBasket, increaseBasket, decreaseBasket, total } = useBasket

const allPizzas = ref([
  {
    name: 'Margherita',
    description: 'A delicious tomato-based pizza topped with mozzarella.',
    options: [
      { size: 9, price: 6.95 },
      { size: 12, price: 12.95 }
    ]
  },
  {
    name: 'Pepperoni',
    description: 'A delicious tomato-based pizza topped with mozzarella & pepperoni.',
    options: [
      { size: 9, price: 7.95 },
      { size: 12, price: 13.95 }
    ]
  }
])
</script>

<template>
  <div class="menu--wrapper">
    <div class="menu">
      <h3>~ Authentic handmade pizza ~</h3>
      <table>
        <tbody v-for="(pizza, index) in allPizzas" :key="index">
          <tr>
            <td>
              <strong>~ {{ pizza.name }} ~</strong>
            </td>
          </tr>
          <tr>
            <td>
              <small>{{ pizza.description }}</small>
            </td>
          </tr>
          <tr v-for="(option, index) in pizza.options" :key="option[index]">
            <td>{{ option.size }}"</td>
            <td>$ {{ option.price }}</td>
            <td>
              <button type="button" @click="addToBasket(pizza, option)">&#43;</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="basket">
      <h3>~ Basket ~</h3>
      <div>
        <table>
          <tbody v-for="(item, index) in basket" :key="index">
            <tr>
              <td>
                <button class="quantity-btn" type="button" @click="decreaseQuantity(item)">
                  &#8722;
                </button>
                <span>{{ item.quantity }}</span>
                <button class="quantity-btn" type="button" @click="increaseQuantity(item)">
                  &#43;
                </button>
              </td>
              <td>{{ item.name }} {{ item.size }}"</td>
              <td>$ {{ item.price * item.quantity }}</td>
            </tr>
          </tbody>
        </table>
        <p>Order total: $ {{ total }}</p>
        <button type="button">Place order</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h3 {
  text-align: center;
}

/* mobile layout */

.menu--wrapper {
  display: flex;
  flex-direction: column;
  color: rgb(80 96 112);

  @media screen and (min-width: 50em) {
    flex-direction: row;
    justify-content: space-between;
  }
}

.menu,
.basket {
  background-color: #faf1e2;
  border-radius: 3px;
  min-height: 100dvh;
  padding: 1rem;
}

.menu {
  @media screen and (min-width: 50em) {
    flex: 2;
    border-inline-end: 1px solid rgb(202 202 202);
  }
}

.basket {
  @media screen and (min-width: 50em) {
    flex: 1;
  }
}

.quantity-btn {
  border: 0;
  padding: 0.4rem;
}
</style>
