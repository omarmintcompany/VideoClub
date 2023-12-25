<!-- components/Navbar.vue -->
<template>
  <div class="my-icon large-icon">
    <ul>
      <li style="float: left" title="Inicio">
        <nuxt-link to="/"><UIcon name="i-heroicons-home" /></nuxt-link>
      </li>
      <li
        v-if="isAuthenticated()"
        style="float: left"
        title="Buscador de peliculas"
      >
        <nuxt-link to="/search"
          ><UIcon name="i-heroicons-magnifying-glass-20-solid"
        /></nuxt-link>
      </li>
      <li
        v-if="!isAuthenticated()"
        class="loginBtn"
        style="float: right"
        title="Iniciar sesión"
      >
        <nuxt-link to="/login"
          ><UIcon name="i-heroicons-arrow-left-end-on-rectangle-16-solid"
        /></nuxt-link>
      </li>
      <li
        v-if="isAuthenticated()"
        class="loginBtn"
        style="float: right"
        title="Cerrar sesión"
      >
        <nuxt-link @click="logout"
          ><UIcon name="i-heroicons-arrow-right-start-on-rectangle-16-solid"
        /></nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" src="./NavBar.ts"></script>
<style lang="scss" src="@/assets/css/navbar-styles.scss" scoped />
