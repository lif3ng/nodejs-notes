# OS 操作系统

```js
const os = require("os");
console.info({
  EOL: os.EOL,
  arch: os.arch(),
  constants: os.constants,
});
```

## EOL

string

操作系统的行位标识

- POSIX 平台为：`\n`
- Windows 平台为：`\r\n`

## arch()

string

返回 Node.js 被编译的操作系统架构， 可能的值包括：`'arm'`, `'arm64'`, `'ia32'`, `'mips'`,
`'mipsel'`, `'ppc'`, `'ppc64'`, `'s390'`, `'s390x'`, `'x32'`, and `'x64'`.

## constants
