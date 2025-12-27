import { defineConfig } from "vitepress";

const packageJson = {
  license: "CC-BY-NC-4.0",
  homepage: "https://github.com/tony9527167/ja2wf-guide",
  author: "tony9527167",
};

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // base: base,

  lang: "zh-CN",
  title: "Tony's Jagged Alliance 2 - Wildfire Strategy Guide",
  description: "Tips, Tricks, Strategies to master Jagged Alliance 2 - Wildfire",

  themeConfig: {
    logo: "/assets/manual.png",
    // docFooter: {
    //   prev: "Prev",
    //   next: "Next",
    // },

    socialLinks: [{ icon: "github", link: `${packageJson.homepage}` }],

    footer: {
      message: `Released under the ${packageJson.license}`,
      copyright: `Copyright © 2004~present ${packageJson.author}`,
    },

    nav: nav(),

    sidebar: {
      // "/foo": sidebarFoo(),
      // "/bar": sidebarBar(),
    },
  },
});

function nav() {
  return [
    {
      text: "Guidance",
      link: "/uidance",
    },

    {
      text: "Mercenaries",
      link: "/mercenaries",
    },

    {
      text: "Screenshots",
      link: "/screenshots",
    },

    {
      text: "Legacy Official Site",
      link: "/legacy-official-site",
    },
  ];
}

function sidebarFoo() {
  return [
    {
      text: "编程语言",
      items: [
        { text: "C", link: "/dev-lang/c" },
        { text: "Android", link: "/dev-lang/android" },
        { text: "BAT", link: "/dev-lang/bat" },
        { text: "Connect(RPC)", link: "/dev-lang/connect" },
      ],
    },

    {
      text: "网络",
      items: [{ text: "基础网络", link: "/networking/" }],
    },
  ];
}
