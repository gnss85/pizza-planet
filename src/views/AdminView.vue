<script setup>
import NewPizza from '@/components/admin/NewPizza.vue'
import Pizzas from '@/components/admin/Pizzas.vue'
import Orders from '@/components/admin/Orders.vue'
import useAuth from '../composables/useAuth'
const { userData } = useAuth()
</script>

<template>
  <div v-if="userData">
    <p class="user-email">Welcome {{ userData?.email }}</p>
    <div class="row">
      <NewPizza />
      <Pizzas />
    </div>
    <Orders />
  </div>
  <p class="no-admin" v-else>You must be admin to view this area... so fuck off!</p>
</template>

<style lang="scss" scoped>
.row {
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 50em) {
    flex-direction: row;
  }
}

.no-admin,
.user-email {
  padding: 1rem;
  font-size: 1.2rem;
  text-align: center;
}
</style>
