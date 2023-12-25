<!-- components/Navbar.vue -->
<template>
  <ul>
    <li><nuxt-link to="/">Home</nuxt-link></li>
    <li><nuxt-link to="/movielist">About</nuxt-link></li>
    <li v-if="!isAuthenticated()" class="loginBtn" style="float: right">
      <nuxt-link to="/login">Login</nuxt-link>
    </li>
    <li v-if="isAuthenticated()" class="loginBtn" style="float: right">
      <nuxt-link @click="logout">Logout</nuxt-link>
    </li>
  </ul>
</template>

<script lang="ts" src="./NavBar.ts"></script>
<style lang="scss" src="@/assets/css/navbar-styles.scss" scoped />
