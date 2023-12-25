import { storeToRefs } from "pinia";
import { useAuthStore } from "~/store/auth";
import { useMovieStore } from "~/store/movie";

export default defineNuxtRouteMiddleware((to) => {
  const { authenticated } = storeToRefs(useAuthStore());
  const { omdbApiKey } = storeToRefs(useMovieStore());
  const token = useCookie("token");

  if (token.value) {
    authenticated.value = true;
    omdbApiKey.value = "de4a9168";
  }

  if (token.value && to?.name === "login") {
    return navigateTo("/");
  }

  if (!token.value && to?.name !== "login") {
    abortNavigation();
    return navigateTo("/login");
  }
});
