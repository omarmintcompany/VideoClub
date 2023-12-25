<template>
  <div>
    <header><NavBar /></header>
    <div class="mainContent">
      <slot />
    </div>
  </div>
</template>
<script setup>
import NavBar from "~/components/NavBar.vue";
</script>
