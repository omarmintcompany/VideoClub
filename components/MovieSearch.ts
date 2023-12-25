import { defineComponent } from "vue";
import axios from "axios";
import type { movieResume, apiResponse } from "../types/MovieInterfaces";

export default defineComponent({
  name: "MovieSearch",

  data() {
    return {
      searchTerm: "" as string,
      movieList: [] as movieResume[],
      errorSeach: false as boolean,
    };
  },
  methods: {
    async searchMovies() {
      try {
        const response = await axios.get<apiResponse>(
          `http://www.omdbapi.com/?s=${this.searchTerm}&apikey=de4a9168`,
        );
        this.errorSeach = response.data.Response;
        this.movieList = response.data.Search;
        console.log(this.movieList);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          // El error proviene de Axios
        } else {
          // Otro tipo de error
        }
      }
    },
  },
});
