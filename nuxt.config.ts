// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/content",
    "@nuxthq/ui",
    "@nuxthq/ui",
    "@nuxtjs/google-fonts",
  ],
  googleFonts: {
    families: {
      "DM+Serif+Display": true,
    },
  },
})
