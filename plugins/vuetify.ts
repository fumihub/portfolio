import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'dark',
      themes: {
        dark: {
          colors: {
            primary: '#1976D2',
            accent: '#424242',
            secondary: '#FF6F00',
            info: '#26A69A',
            warning: '#FFC107',
            error: '#DD2C00',
            success: '#00E676',
          },
        },
      },
    },
    defaults: {
      VBtn: {
        style: 'text-transform: none;',
      },
    },
  })

  nuxtApp.vueApp.use(vuetify)
})
