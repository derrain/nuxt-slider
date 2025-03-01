// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  runtimeConfig: {
    vite: {
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: '@use "@/assets/_colors.scss" as *;'
          }
        }
      },
    },
  },
  modules: ['@vesp/nuxt-fontawesome'],
  fontawesome: {
    icons: {
      solid: ['chevron-left', 'chevron-right'],
    }
  },
})