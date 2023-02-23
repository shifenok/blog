import { defineConfig } from "vitepress";

export default defineConfig({
  // lang: 'en-US',
  title: "稀土前端",
  description: "稀土前端部落",
  base: "/",

  head: [["link", { rel: "icon", type: "image/svg+xml", href: "/logo.svg" }]],
  lastUpdated: true,
  themeConfig: {
    logo: "/logo.svg",
    siteTitle: '稀土前端',
    outline: [2,4],
    outlineTitle: '大纲',
    nav: [
      { text: "首页", link: "/" },
      { text: "随笔", link: "/essay/", activeMatch: "/essay/" },
      { text: "工具", items: [
        { text: '前端', items: [
          { text: 'git', link: '/item-2' },
          { text: 'vscode', link: '/tools/vscode/2023-02-03', activeMatch: "/tools/vscode/" },
        ]},
        { text: '服务器', items: [
          { text: 'linux', link: '/item-2' },
          { text: 'xx', link: '/item-2' },
        ]}
      ]},
      { text: "生活", link: "/life/", activeMatch: "/life/" },
      // { text: "我的小铺", link: "/shop/", activeMatch: "/shop/" },
      { text: "关于我", link: "/me/", activeMatch: "/me/" },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/shifenok" }],
    // editLink: {
    //   pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
    //   text: 'Edit this page on GitHub'
    // },
    lastUpdatedText: '最近修改时间',
    algolia: {
      appId: '93IGC3WMPT',
      apiKey: '89ba29c1450e449e4f362d362a4ca2f4',
      indexName: 'wxz'
    },
    footer: {
      message: "只要努力，就能成为你想成为的人",
      copyright: "By Strong",
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    sidebar: {
      "/tools/vscode/": [
        {
          text: '插件',
          collapsible: true,
          items: [
            { text: "插件1", link: "/tools/vscode/2023-02-03" },
          ]
        },
        {
          text: '配置',
          collapsible: true,
          items: [
            { text: "配置11", link: "/tools/vscode/2023-02-04" },
          ]
        }
      ],
      "/life/": [
        {
          text: '生活感悟',
          collapsible: true,
          items: [
            { text: "2022-10-24", link: "/life/2022-10-24" },
          ]
        },
        {
          text: '每日一句',
          collapsible: true,
          items: [
            { text: "2023-02-13", link: "/life/daily-words/2023-02-13" },
          ]
        }
      ],
      "/essay/": [
        {
          text: "随笔",
          collapsible: true,
          items: [
            { text: "权限系统设计模式", link: "/essay/权限系统设计模式/" },
            { text: "WEB3", items: [
              { text: "基础概念", link: "/essay/web3/基础概念" },
              { text: "部署第一个智能合约", link: "/essay/web3/部署第一个智能合约" },
              // { text: "部署第一个NFT", link: "/essay/web3/部署第一个NFT" },
              // { text: "dApp", link: "/essay/web3/部署第一个NFT" },
            ]},
            // { text: "区块链入门", items: [
            //   { text: "本地网络开发加密数字货币", link: "/essay/区块链入门/本地网络开发加密数字货币" }
            // ]},
          ],
        },
      ],
    },
  },
  vite: {
    server: {
      host: true,
      port: 3005,
      open: true,
      proxy: {
        '/so': {
          target: 'http', // 代理接口
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/so/, '')
        }
      }
    },
  },
});
