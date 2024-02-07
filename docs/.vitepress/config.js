export default {
  base: "/",
  lang: "en-US",
  title: "随便记记8",
  description: "Vite & Vue powered static site generator.",
  themeConfig: {
    siteTitle: "空空如也",
    logo: "logo.jpg",
    algolia: {
      appId: "...",
      apiKey: "...",
      indexName: "...",
    },
    nav: [
      {
        text: "Java",
        link: "/java/HashMap/一些基础",
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
            {
              text: "HashMap",
              items: [
                { text: "一些基础", link: "/java/HashMap/一些基础" },
                { text: "JDK1.7死链问题", link: "/java/HashMap/JDK1.7死链问题" },
              ],
            },
          ],
        },
      ],
      "/mysql/": [
        {
          text: "Mysql",
          items: [{ text: "MVCC", link: "/mysql/mysql" }],
        },
      ],
      "/nginx/": [
        {
          text: "Nginx",
          items: [{ text: "配置", link: "/nginx/nginx" }],
        },
      ],
    },
    footer: {
      message: '<a href="https://beian.miit.gov.cn/">闽ICP备XXXX号</a>',
    },
  },
};
