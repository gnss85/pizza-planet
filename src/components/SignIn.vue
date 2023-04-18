<script setup>
import { ref } from 'vue'
import useAuth from '@/composables/useAuth'
const { signUp, logIn, logOut, errorMessage, signInModalOpen, toggleModal, userData } = useAuth()
const formData = ref({
  email: '',
  password: ''
})
</script>

<template>
  <button class="sign-in-button" v-if="!userData" @click="toggleModal()">Sign in</button>
  <button class="sign-in-button" v-else @click="logOut()">Sign out</button>
  <div v-if="signInModalOpen" class="modal">
    <div class="modal--content">
      <span class="modal--close" @click="toggleModal()">&#10060;</span>
      <p class="modal--text">Please login to continue</p>
      <span class="error-message" v-if="errorMessage">{{ errorMessage }}</span>
      <form class="form-wrapper">
        <div class="form-group">
          <label for="email">Email address</label>
          <input
            class="login-field"
            type="email"
            id="email"
            placeholder="Enter email"
            v-model="formData.email"
          />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            class="login-field"
            type="password"
            id="password"
            placeholder="Enter password"
            v-model="formData.password"
          />
        </div>
        <button
          class="signin-button login-button"
          type="button"
          @click.prevent="logIn(formData.email, formData.password)"
        >
          Sign in
        </button>
        <button
          class="signup-button login-button"
          type="button"
          @click.prevent="signUp(formData.email, formData.password)"
        >
          Sign up
        </button>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal {
  display: grid;
  place-content: center;
  position: fixed;
  top: 0;
  left: 0;
  padding: 1rem;
  width: 100%;
  height: 100dvh;
  background-color: rgb(0 0 0 / 0.9);

  z-index: 9999;

  &--content {
    display: grid;
  }

  &--close {
    justify-self: end;
    cursor: pointer;
  }

  &--text {
    font-size: 2.4rem;
    font-family: 'Marck Script', cursive;
  }
}

.error-message {
  padding-block: 1rem;
  color: red;
  text-align: center;
  outline: 3px dashed crimson;
  border-radius: 3px;
}

.form-wrapper {
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.form-group {
  border: 0;
  &:last-of-type {
    margin-block-end: 2rem;
  }
}

#email,
#password {
  color: black;
}

.login-button {
  padding-block: 1rem;
  border: 0;
}

.signin-button {
  background-color: antiquewhite;
  transition: background-color 1s ease-in;

  &:hover {
    background-color: black;
    transition: background-color 0.3s ease-out;
    color: antiquewhite;
  }
}

.signup-button {
  align-self: center;
  margin-block-start: 1rem;
  width: fit-content;
  color: white;

  &:hover {
    text-decoration: underline;
  }
}

.sign-in-button {
  position: absolute;
  top: 2rem;
  right: 2rem;
  border: 0;
  color: white;

  &:hover {
    color: rgb(161 132 132);
  }
}
</style>
