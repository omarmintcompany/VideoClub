<!-- components/MovieSearch.vue -->
<template>
  <div class="search-form">
    <UButtonGroup size="sm" orientation="horizontal">
      <UInput
        v-model="searchTerm"
        icon="i-heroicons-magnifying-glass-20-solid"
        placeholder="Título"
        trailing
        @keyup.enter="searchMovies"
      />
      <UButton
        icon="i-heroicons-magnifying-glass-20-solid"
        @click="searchMovies"
      />
    </UButtonGroup>
  </div>
  <div>
    <ul class="movie-list">
      <li v-for="movie in movies" :key="movie.imdbID">
        <div class="movie-card">
          <img
            :src="movie.Poster"
            :alt="movie.Title"
            @click="showDetails(movie.imdbID)"
          />
          <div class="movie-details">
            <h3>{{ movie.Title }}</h3>
            <p>{{ movie.Year }}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" src="./MovieSearch.ts"></script>
<style lang="scss" src="@/assets/css/moviesearch-styles.scss" scoped />
