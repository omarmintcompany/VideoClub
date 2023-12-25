import { defineComponent } from "vue";
import axios from "axios";
import type { movieResume, apiResponse } from "../types/MovieInterfaces";
import { useMovieStore } from "@/store/movie";
export default defineComponent({
  name: "MovieSearch",

  data() {
    return {
      searchTerm: "" as string,
      movies: [] as movieResume[],
      errorSeach: false as boolean,
    };
  },
  methods: {
    async searchMovies() {
      try {
        const movieStore = useMovieStore();
        const apiKey: string = movieStore.omdbApiKey;
        const response = await axios.get<apiResponse>(
          `http://www.omdbapi.com/?s=${this.searchTerm}&apikey=${apiKey}`,
        );
        this.errorSeach = response.data.Response;
        this.movies = response.data.Search;
        // eslint-disable-next-line no-console
        console.log(this.movies);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          // El error proviene de Axios
        } else {
          // Otro tipo de error
        }
      }
    },
    showDetails(imdbId: string) {
      this.$router.push({ path: `/movie/${imdbId}` });
    },
  },
});
