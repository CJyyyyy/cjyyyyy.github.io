export default {
  base: "/",
  lang: "en-US",
  title: "test",
  description: "Vite & Vue powered static site generator.",
  themeConfig: {
    siteTitle: "syaw",
    logo: "/.vitepress/logo.jpg",
    algolia: {
      appId: "...",
      apiKey: "...",
      indexName: "...",
    },
    nav: [
      { 
        text: "Java",
        link: "/java/hashmap" 
      },
      {
        text: "Mysql",
        link: "/mysql/mysql",
      },
      {
        text: "Nginx",
        link: "/nginx/nginx",
      },
    ],
    sidebar: {
      "/java/": [
        {
          text: "Java",
          items: [
            { text: "HashMap", link: "/java/hashmap" },
          ],
        },
      ],
      "/mysql/": [
        {
          text: "Mysql",
          items: [
            { text: "MVCC", link: "/mysql/mysql" },
          ],
        },
      ],
      "/nginx/": [
        {
          text: "Nginx",
          items: [
            { text: "配置", link: "/nginx/nginx" },
          ],
        },
      ],
    },
  },
};
