import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'

export default defineConfig({
  site: 'https://allthatis.me',
  integrations: [
    UnoCSS({
      injectReset: true // or a path to the reset file
    }),
  ],
})