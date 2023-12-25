<!-- components/movie.vue -->
<template>
  <div class="movie-details">
    <div class="poster-container">
      <img :src="movie.Poster" :alt="movie.Title + ' Poster'" class="poster" />
    </div>
    <div class="details-container">
      <h2 class="title">{{ movie.Title }}</h2>
      <p class="info">Año: {{ movie.Year }}</p>
      <p class="info">Género: {{ movie.Genre }}</p>
      <p class="info">Director: {{ movie.Director }}</p>
      <p class="info">Actores: {{ movie.Actors }}</p>
      <p class="info">Premios: {{ movie.Awards }}</p>
      <p class="info">Puntuación IMDb: {{ movie.imdbRating }}</p>
      <div class="plot">
        <h3>Argumento:</h3>
        <p>{{ movie.Plot }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./MovieDetails.ts"></script>
<style lang="scss" src="@/assets/css/moviedetails-styles.scss" scoped />
