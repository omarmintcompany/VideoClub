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
});
