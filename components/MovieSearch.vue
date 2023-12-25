<!-- components/MovieSearch.vue -->
<template>
  <div>
    <UButtonGroup size="sm" orientation="horizontal">
      <UInput
        v-model="searchTerm"
        icon="i-heroicons-magnifying-glass-20-solid"
        placeholder="Ingrese el título de la película"
        trailing
        @keyup.enter="searchMovies"
      />
      <UButton
        icon="i-heroicons-magnifying-glass-20-solid"
        @click="searchMovies"
      />
    </UButtonGroup>
  </div>
</template>

<script lang="ts" src="./MovieSearch.ts"></script>
