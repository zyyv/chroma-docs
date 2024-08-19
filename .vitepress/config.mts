import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Chroma.js",
  description: "JavaScript library for color conversions",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Guide', link: '/guide' },
      { text: 'API', link: '/api' }
    ],

    sidebar: [
      {
        text: 'Guide',
        link: '/guide',
      },
      {
        text: 'API',
        link: '/api',
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/gka/chroma.js' }
    ]
  }
})
