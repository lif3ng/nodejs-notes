const unescapeAll = require("markdown-it/lib/common/utils").unescapeAll;
const path = require("path");
module.exports = {
  cache: false,
  base: "/nodejs-notes/",
  alias: {
    styles: path.resolve(__dirname, "./styles"),
  },

  themeConfig: {
    sidebarDepth: 3,
    smoothScroll: true,
    nav: [
      { text: "JS Core", link: "/core/" },
      { text: "Node.js API", link: "/api/" },
    ],
    sidebar: {
      "/api/": ["", "os"],
      "/core/": [
        {
          title: "数据类型",
          children: [
            // "type",
            { title: "原始类型", children: ["symbol"] },
            { title: "引用类型", children: ["date", "regexp", "array", "set"] },
          ],
        },
        "proxy",
        "iterator",
      ],
    },
  },

  markdown: {
    plugins: [
      (md) => {
        const defaultFenceRule = md.renderer.rules.fence;
        const fence = function (tokens, idx, options, env, slf) {
          const token = tokens[idx],
            info = token.info ? unescapeAll(token.info).trim() : "";
          if (info === "js") {
            return `<div class="code-block inside-gutter">${token.content
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")}</div>`;
          }
          return defaultFenceRule(tokens, idx, options, env, slf);
        };
        md.renderer.rules.fence = fence;
      },
    ],
  },
};
