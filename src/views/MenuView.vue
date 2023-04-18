<script setup>
import useBasket from '@/composables/useBasket'
import usePizzas from '@/composables/usePizzas'

const { allPizzas } = usePizzas()
const { basket, addToBasket, increaseQuantity, decreaseQuantity, total, addNewOrder, basketText } =
  useBasket()
</script>

<template>
  <div class="menu--wrapper">
    <div class="menu">
      <h3>~ Authentic handmade pizza ~</h3>
      <table>
        <tbody v-for="pizza in allPizzas" :key="pizza.id">
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
          <tr v-for="option in pizza.options" :key="pizza.id + option.size">
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
      <div v-if="basket.length > 0">
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
        <button type="button" @click="addNewOrder">Place order</button>
      </div>
      <div v-else>
        <p>{{ basketText }}</p>
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
