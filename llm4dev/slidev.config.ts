import { defineConfig } from '@slidev/cli'

export default defineConfig({
  // Configure the default theme and features
  defaults: {
    layout: 'default',
    transition: 'fade',
  },
  // Configure the Monaco editor
  monaco: {
    dev: true,
  },
})
