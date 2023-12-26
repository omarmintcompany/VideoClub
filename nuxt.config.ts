export default defineNuxtConfig({
  ssr: false,
  modules: [
    // ...
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore"],
      },
    ],
    ["@nuxt/ui", {}],
  ],
  server: {
    port: 3000, // o el puerto que desees
    host: "0.0.0.0", // Esto permite que el contenedor sea accesible desde fuera del contenedor
  },
});
