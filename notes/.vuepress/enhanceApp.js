const handleRunByRunkit = ({ container, code, callback }) => {
  if (typeof RunKit === "undefined") {
    return;
  }
  RunKit.createNotebook({
    element: container,
    source: code,
    gutterStyle: "inside",
    onLoad: callback,
    evaluateOnLoad: true,
  });
};
const handleRunByWorker = (code) => {
  console.log(
    `%c Run by Worker %c ${new Date()} `,
    "background:lightgreen",
    "background:lightblue"
  );
  new Worker(URL.createObjectURL(new Blob([code])));
};
const handleReset = ({ block, editor }) => {
  editor.setValue(block.initCode);
  block.querySelector("iframe")?.remove();
  block.dataset.current = "";
};
const runderEditorByCode = ({ container, CodeMirror, code, callback }) => {
  return CodeMirror(
    (elt) => {
      container.appendChild(elt);
    },
    {
      value: code,
      lineNumbers: true,
      styleActiveLine: true,
      matchBrackets: true,
      lineWrapping: true,
      // readOnly: "nocursor",
      mode: "javascript",
      theme: "runkit-light",
    }
  );
};

const renderEditors = () => {
  setTimeout(() => {
    const codeNodeList = document.querySelectorAll(".code-block");
    Promise.all([
      import("codemirror/lib/codemirror"),
      import("codemirror/mode/javascript/javascript"),
    ]).then(([{ default: CodeMirror }]) => {
      codeNodeList.forEach((codeBlock) => {
        const code = codeBlock.textContent;
        codeBlock.initCode = code;

        codeBlock.innerHTML = `<button class="btn-reset">Reset</button>
        <div class="code-container"></div>
        <button class="btn-worker">Run by worker</button>
        <button class="btn-runkit">Run by Runkit</button>
        `;
        const container = codeBlock.querySelector(".code-container");
        const editor = runderEditorByCode({ container, CodeMirror, code });
        codeBlock.addEventListener("click", (e) => {
          const { target } = e;
          if (target.tagName.toLowerCase() !== "button") {
            return;
          }
          switch (target.className) {
            case "btn-worker":
              handleRunByWorker(editor.getValue());
              break;
            case "btn-runkit":
              handleRunByRunkit({
                container,
                code,
                callback: () => {
                  codeBlock.dataset.current = "runkit";
                },
              });
              break;
            case "btn-reset":
              handleReset({ block: codeBlock, editor });
              break;
          }
        });
      });
    });
  }, 100);
};

export default ({ router }) => {
  const scriptTag = document.createElement("script");
  scriptTag.setAttribute("src", "https://embed.runkit.com");
  document.body.appendChild(scriptTag);

  router.afterEach(({ path: toPath, hash: toHash }, { path: fromPath }) => {
    if (toPath !== fromPath) {
      renderEditors();
    }
    // init scroll bug work around
    // https://github.com/vuejs/vuepress/issues/2562
    if (toHash) {
      const el = document.querySelector(decodeURIComponent(toHash));
      if (el && el.offsetTop) {
        window.scrollTo(0, el.offsetTop);
      }
    }
  });
};
