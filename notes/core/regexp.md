# RegExp

js 中正则实例有字面量写法 `/pattern/flags` 和构造函数 `new RegExp(pattern, flags)` 写法，区别是字面量需要对特殊字符进行转义。

## 模式 pattern

正则表达式。

使用构造函数时要注意对一些元字符进行转义。与字面量写法相比，构造函数中的第一个参数模式可读性比较差。

## 标记 flags

标记用于控制正则表达式的行为

| 标记 | 实例属性   | 行为              |
| ---- | ---------- | ----------------- |
| g    | global     | 全局匹配          |
| i    | ignoreCase | 忽略大小写        |
| s    | dotAll     | .匹配所有字符     |
| u    | unicode    | 启用 Unicode 匹配 |
| m    | multiline  | 多行匹配          |
| y    | sticky     | 粘性匹配          |

- global 全局匹配

  设置后匹配全部，不设置匹配到第一个就退出

```js
const reg = /a/;
const regG = /a/g;
console.log("aaa".match(reg), "aaa".match(regG));
```

- multiline 多行匹配

  `^` 和 `$` 元字符可以在每一行进行匹配

```js
`a
a
a
a`.match(/^a$/gm);
```

- dotAll 模式

  设置后 `.`可以匹配换行符

- sticky 粘附模式

  只从 lastIndex 开始匹配，与 global 全局模式相冲突，同时出现 sticky 时行为将覆盖 global 行为。

```js
let m1 = "abcabc".match(/ab/g);
let m2 = "abcabc".match(/ab/gy);
let m3 = "abcabc".match(/abc/gy);
console.log(m1, m2, m3);
```

## 实例属性

除了[标记](#标记-flags)对应的几个实例属性外，还有：

- source 正则字面量字符串，就是两斜杠中间的那部分
- flags 正则标记字符串
- lastIndex 下一次搜索的开始位置

```js
const exp = /^abc/gi;
console.log({ source: exp.source, flags: exp.flags });
```

## 实例方法

- exec

  返回一个数组，数组内容为匹配到的内容、从外到内、从左到右的匹配组内容。

```js
/(a(b(c)))/.exec("abcd");
```

数组中还包含三个属性:

`index`匹配内容的下标

`input`被匹配的完整字符串

`groups` 具名捕获组 `(?<name>)`

当标识为 `y` 或 `g` 时，`lastIndex` 会在匹配后向后移动

```js
const reg = /(a(?<center>b(c)))/g;
const result = reg.exec("abcd");
console.log(result.groups, result.index);
console.log(reg.lastIndex);
```

- test 返回 Boolean 值，标识为 `y` 或 `g` 时，`lastIndex` 会在匹配后向后移动，匹配到就返回 true.

```js
let reg = /a/g;
let s = "aa";
console.log(reg.test(s), reg.lastIndex);
console.log(reg.test(s), reg.lastIndex);
console.log(reg.test(s), reg.lastIndex);
console.log(reg.test(s), reg.lastIndex);
```

## 构造函数属性

`RegExp`上的属性标识作用域内上次正则的执行情况，有全名和简写两种方式来访问同一属性。

| 全名         | 简写 | note                                      |
| ------------ | ---- | ----------------------------------------- |
| input        | \$\_ | 最后搜索字符串（非标准）                  |
| lastMatch    | \$&  | 最后匹配的文本                            |
| lastParen    | \$+  | 最后匹配的捕获组（非标准）                |
| leftContext  | \$`  | input 字符串中出现在 lastMatch 前面的文本 |
| rightContext | \$'  | input 字符串中出现在 lastMatch 后面的文本 |
