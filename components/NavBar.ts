// navbar-script.ts
import { defineComponent } from "vue";
import { useAuthStore } from "~/store/auth";

export default defineComponent({
  name: "NavBar",
  methods: {
    logout() {
      const authStore = useAuthStore();
      authStore.logUserOut();
      this.$router.push("/login");
    },
    isAuthenticated() {
      const authStore = useAuthStore();
      return authStore.authenticated;
    },
  },
});
