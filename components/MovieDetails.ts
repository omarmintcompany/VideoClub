import { defineComponent } from "vue";
import axios from "axios";
import type { movieDetails } from "../types/MovieInterfaces";
import { useMovieStore } from "@/store/movie";

export default defineComponent({
  name: "MovieDetails",

  props: {
    imdbid: {
      type: String,
      default: () => "",
    },
  },
  data() {
    return {
      movie: {
        Title: "",
        Year: "",
        Rated: "",
        Released: "",
        Runtime: "",
        Genre: "",
        Director: "",
        Writer: "",
        Actors: "",
        Plot: "",
        Language: "",
        Country: "",
        Awards: "",
        Poster: "",
        Ratings: [],
        Metascore: "",
        imdbRating: "",
        imdbVotes: "",
        imdbID: "",
        Type: "",
        totalSeasons: "",
        Response: "",
      } as movieDetails,
    };
  },
  mounted() {
    this.fetchMovieDetails();
  },
  methods: {
    async fetchMovieDetails() {
      try {
        const movieStore = useMovieStore();
        const apiKey: string = movieStore.omdbApiKey;
        const response = await axios.get(
          `http://www.omdbapi.com/?i=${this.imdbid}&apikey=${apiKey}`,
        );

        this.movie = response.data;
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error("Error al cargar detalles de la película:", error);
      }
    },
  },
});
