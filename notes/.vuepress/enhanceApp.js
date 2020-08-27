export default ({ router }) => {
  const scriptTag = document.createElement("script");
  scriptTag.setAttribute("src", "https://embed.runkit.com");
  document.body.appendChild(scriptTag);
  router.afterEach(({ path: toPath, hash: toHash }, { path: fromPath }) => {
    if (toPath !== fromPath) {
      setTimeout(() => {
        const codeNodeList = document.querySelectorAll(".code-block>div");
        Promise.all([
          import("codemirror/lib/codemirror"),
          import("codemirror/mode/javascript/javascript"),
        ]).then(([{ default: CodeMirror }]) => {
          codeNodeList.forEach((ele) => {
            const code = ele.textContent;
            CodeMirror(
              (elt) => {
                // console.log({ ele, elt });
                const clickCallback = () => {
                  console.log(elt, code);
                  if (typeof RunKit === "undefined") {
                    return;
                  }
                  console.log({ RunKit });
                  elt.removeEventListener("click", clickCallback);
                  RunKit.createNotebook({
                    element: elt.parentNode,
                    source: code,
                    gutterStyle: "inside",
                    onLoad: () => elt.remove(),
                    evaluateOnLoad: true,
                  });
                };
                ele.parentNode.replaceChild(elt, ele);
                elt.addEventListener("click", clickCallback);
              },
              {
                value: code,
                lineNumbers: true,
                styleActiveLine: true,
                matchBrackets: true,
                lineWrapping: true,
                readOnly: "nocursor",
                mode: "javascript",
                theme: "runkit-light",
              }
            );
          });

          // init scroll bug work around
          // https://github.com/vuejs/vuepress/issues/2562
          if (toHash) {
            const el = document.querySelector(decodeURIComponent(toHash));
            if (el && el.offsetTop) {
              window.scrollTo(0, el.offsetTop);
            }
          }
        });
      }, 100);
    }
  });
};
