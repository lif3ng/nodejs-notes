# nodejs-notes

Node.js notes power by Vuepress, Runkit, CodeMirror

## 技术选型

采用 Github Actions 对每个 git push 进行文档编译，可通过 [pages 页面](https://lif3ng.github.io/nodejs-notes)访问。

内容主要是 JS core 和 Node.js API 常用接口的笔记，使用 Runkit 进行 demo 代码的运行，点击代码块即可执行代码。后续会考虑将 js core 部分完全依靠浏览器能力离线化运行。

文档框架是 Vuepress，可能会根据需要的 feature 对 markdown 渲染引擎 markdown-it 进行较深度定制，稳定后会考虑抽离出可复用的 Plugin.

Runkit 基本符合我对 Playground 的预期，不引入外部库的版本如果可以私有部署就更好了。后续我会尝试完成 DOM 版本的 Playground.

## 关于内容

Node.js 部分主要参考[官方文档](https://nodejs.org/dist/latest-v12.x/docs/api/)

JS core 部分主要参考 [JavaScript 高级程序设计（第 4 版）](https://www.ituring.com.cn/book/2472)
