# Tag function

标签函数可以通过

```
fun``
```

的格式调用函数，可以传入普通的换行字符串也可以使用 ES6 的插值语法。

对参数处理如下图：

<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FqFP4H6AUminAmZ5vC2149K%2FUntitled%3Fnode-id%3D0%253A1" allowfullscreen></iframe>

## 自带的标签函数：

- `String.raw` 不需要对字符串进行转义

```
String.raw`\n` => "\\n"
```

## 一些社区使用标签函数的 DSL：

- styled-components
