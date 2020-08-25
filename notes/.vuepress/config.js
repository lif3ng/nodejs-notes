const { PLUGINS, removeAllBuiltInPlugins } = require("@vuepress/markdown");
const unescapeAll = require("markdown-it/lib/common/utils").unescapeAll;

module.exports = {
  cache: false,
  // extend: '@vuepress/theme-default',
  themeConfig: {
    nav: [{ text: "Node.js API", link: "/api/" }],
    sidebar: {
      "/api/": ["", "os"],
    },
  },

  // chainMarkdown (config) {
  //     removeAllBuiltInPlugins(config)
  //     console.log(config.plugins.values())
  //     console.log('options',config.options.entries())
  //     config.options.delete('highlight').highlight((src, lang) => {
  //         console.log('highlight', { src, lang })
  //         return `<code>${src}</code><button>to runkit</button>`
  //     })
  //     .end()
  //     .plugins.delete(PLUGINS.PRE_WRAPPER)

  //     console.log(config.plugins.values())
  //     console.log('options end',config.options.entries())

  // },
  markdown: {
    plugins: [
      (md) => {
        const defaultFenceRule = md.renderer.rules.fence;
        const fence = function (tokens, idx, options, env, slf) {
          const token = tokens[idx],
            info = token.info ? unescapeAll(token.info).trim() : "";
          if (info === "js") {
            return `<div class="code-block inside-gutter"><div>${token.content}</div></div>`;
          }
          return defaultFenceRule(tokens, idx, options, env, slf);
        };
        md.renderer.rules.fence = fence;
        // console.log('pre-wrapper', md)
        // const wrap = (type)=>(wrapped) => (...args) => {
        //     const [tokens, idx] = args
        //     const token = tokens[idx]
        //     const rawCode = wrapped(...args)
        //     console.log({ token, rawCode })
        //     // return `<!--beforebegin--><div class="language-${token.info.trim()} extra-class">`
        //     // + `<!--afterbegin-->${rawCode}<!--beforeend--></div><!--afterend-->`
        //     return `<div>start ${type}</div>${rawCode}<div>end</div>`
        // }
        // const { fence, code_block: codeBlock } = md.renderer.rules
        // console.log({ fence, codeBlock })
        // md.renderer.rules.fence = wrap('fence')(fence)
        // md.renderer.rules.code_block = wrap('codeBlock')(codeBlock)
      },
    ],
    // extendMarkdown: md => {
    //     // md.disable('pre-wrapper')
    //     md.set({
    //         highlight: (src, lang) => {
    //             console.log('highlight', { src, lang })
    //             return `<p>${lang}</p><pre a="b">${src}</pre>`
    //         }
    //     })
    // }
  },
};
