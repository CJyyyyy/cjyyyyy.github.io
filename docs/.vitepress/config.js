export default {
    base:'/',
    lang: 'en-US',
    title: 'test',
    description: 'Vite & Vue powered static site generator.',
    dest: "./dist",
    themeConfig: {
        siteTitle: 'test',
        logo: '/.vitepress/logo.jpg',
        algolia: {
          appId: '...',
          apiKey: '...',
          indexName: '...'
        },
        nav: [
            { text: 'Guide', link: '/guide/one' },
            {
              text: 'Dropdown Menu',
              items: [
                {
                  // Title for the section.
                  text: 'Section A Title',
                  items: [
                    { text: 'Section A Item A', link: '...' },
                    { text: 'Section B Item B', link: '...' }
                  ]
                }
              ]
            },
            {
              text: 'Dropdown Menu',
              items: [
                {
                  // You may also omit the title.
                  items: [
                    { text: 'Section A Item A', link: '...' },
                    { text: 'Section B Item B', link: '...' }
                  ]
                }
              ]
            }
        ],
        sidebar: {
          '/guide/': [
            {
              text: 'Guide',
              items: [
                { text: 'Index', link: '/guide/one' },
                { text: 'One', link: '/guide/one' },
                { text: 'Two', link: '/guide/two' }
              ]
            }
          ],
          '/config/': [
            {
              text: 'Config',
              items: [
                { text: 'Index', link: '/config/three' },
                { text: 'Three', link: '/config/three' },
                { text: 'Four', link: '/config/four' }
              ]
            }
          ]
        }
    }
  }
