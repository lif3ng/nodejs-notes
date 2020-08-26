export default ({ router }) => {
  // import("codemirror/mode/javascript/javascript")
  // import("codemirror/lib/codemirror.css")

  const scriptTag = document.createElement("script");
  scriptTag.setAttribute("src", "https://embed.runkit.com");
  document.body.appendChild(scriptTag);
  router.afterEach(({ path: toPath }, { path: fromPath }) => {
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
                console.log({ ele, elt });
                const clickCallback = () => {
                  console.log(elt, code);
                  if (typeof RunKit === "undefined") {
                    return;
                  }
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
        });
      }, 100);
    }
  });
};
