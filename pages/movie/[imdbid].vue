<!-- pages/movie/_id.vue -->

<template>
  <div>
    <MovieDetails :imdbid="$route.params.imdbid" />
  </div>
</template>

<script setup>
import MovieDetails from "@/components/MovieDetails.vue";
</script>
