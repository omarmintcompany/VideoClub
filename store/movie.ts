import { defineStore } from "pinia";

export const useMovieStore = defineStore({
  id: "movie",
  state: () => ({
    omdbApiKey: "",
  }),
  actions: {
    setOmdbApiKey(apiKey: string) {
      this.omdbApiKey = apiKey;
    },
  },
});
