(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{373:function(a,t,n){"use strict";n.r(t);var s=n(44),r=Object(s.a)({},(function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h1",{attrs:{id:"array"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#array"}},[a._v("#")]),a._v(" Array")]),a._v(" "),n("h2",{attrs:{id:"创建"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#创建"}},[a._v("#")]),a._v(" 创建")]),a._v(" "),n("h3",{attrs:{id:"构造函数创建"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#构造函数创建"}},[a._v("#")]),a._v(" 构造函数创建")]),a._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("element0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" element1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("...")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" elementN"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Array")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("element0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" element1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("...")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" elementN"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Array")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("arrayLength"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),n("ul",[n("li",[a._v("不传入参数，返回 "),n("code",[a._v("[]")])]),a._v(" "),n("li",[a._v("传入一个参数 n\n"),n("ul",[n("li",[a._v("n 为数值，返回 length 为 n 的数组")]),a._v(" "),n("li",[a._v("n 为非数值，返回 "),n("code",[a._v("[n]")])])])]),a._v(" "),n("li",[a._v("传入多个参数，代表数组值枚举")])]),a._v(" "),n("h3",{attrs:{id:"字面量"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#字面量"}},[a._v("#")]),a._v(" 字面量")]),a._v(" "),n("p",[n("code",[a._v("[1,2,]")]),a._v(" 代表"),n("code",[a._v("[1,2]")])]),a._v(" "),n("h3",{attrs:{id:"静态方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#静态方法"}},[a._v("#")]),a._v(" 静态方法")]),a._v(" "),n("p",[a._v("Array 构造函数有两个 ES6 新增的静态方法 "),n("code",[a._v("from")]),a._v(" 和 "),n("code",[a._v("of")]),a._v(" 用于创建数组")]),a._v(" "),n("ul",[n("li",[a._v("from 将类数组转化为数组")])]),a._v(" "),n("div",{staticClass:"code-block inside-gutter"},[a._v('// String\nArray.from("abc"); // ["a", "b", "c"]\n')]),n("div",{staticClass:"code-block inside-gutter"},[a._v("// Map\nconst m = new Map().set(1, 2).set(3, 4);\nconsole.log(m);\nArray.from(m);\n")]),n("div",{staticClass:"code-block inside-gutter"},[a._v("// Set\nconst s = new Set().add(1).add(2).add(3).add(4);\nconsole.log(s);\nArray.from(s);\n")]),n("div",{staticClass:"code-block inside-gutter"},[a._v("// 数组浅复制\nconst a1 = [1, 2, 3, 4];\nconst a2 = Array.from(a1);\n\nconsole.log({ a1, a2 });\nconsole.log(a1 === a2); // false\n")]),n("div",{staticClass:"code-block inside-gutter"},[a._v("// 可以使用任何可迭代对象\nconst iter = {\n  *[Symbol.iterator]() {\n    yield 1;\n    yield 2;\n    yield 3;\n    yield 4;\n  },\n};\nconsole.log(Array.from(iter)); // [1, 2, 3, 4]\n\n// arguments对象可以被轻松地转换为数组\nfunction getArgsArray() {\n  return Array.from(arguments);\n}\nconsole.log(getArgsArray(1, 2, 3, 4)); // [1, 2, 3, 4]\n\n// from()也能转换带有必要属性的自定义对象\nconst arrayLikeObject = {\n  0: 1,\n  1: 2,\n  2: 3,\n  3: 4,\n  length: 4,\n};\nconsole.log(Array.from(arrayLikeObject)); // [1, 2, 3, 4]\n")]),n("div",{staticClass:"code-block inside-gutter"},[a._v('// 第2个参数代表 映射函数，Array.from(x,fn) 相当于 Array.from(x).map(fn)\n// 第3个参数代表 this, 可通过 this 在映射函数中使用\nconst a1 = [1, 2, 3, 4];\nconst a2 = Array.from(\n  a1,\n  function (x, index) {\n    console.log({ this: this, index, x });\n    return `${this.prefix}-i${index}-${x}`;\n  },\n  { prefix: "abc" }\n);\n')]),n("ul",[n("li",[a._v("of 将一组参数转为数组，看着不厉害也不好用")])]),a._v(" "),n("div",{staticClass:"code-block inside-gutter"},[a._v("// 可代替 Array.prototype.slice.call(arguments)\nArray.of(1, 2, 3, 4);\n")]),n("h2",{attrs:{id:"空位"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#空位"}},[a._v("#")]),a._v(" 空位")]),a._v(" "),n("p",[a._v("字面量创建数组是可以使用"),n("code",[a._v(",")]),a._v("创建空位")]),a._v(" "),n("div",{staticClass:"code-block inside-gutter"},[a._v('console.log([, , ,]);\nconsole.log(["x", , ,]);\nconsole.log([, , "x"]);\nconsole.log([, "x", ,]);\n')]),n("div",{staticClass:"code-block inside-gutter"},[a._v('// map 会跳过空位\n[, "x", ,].map((...args) => {\n  console.log(args);\n  return "y";\n});\n')]),n("div",{staticClass:"code-block inside-gutter"},[a._v('// join()视空位置为空字符串\n[, "x", ,].join("-");\n')]),n("h2",{attrs:{id:"索引"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#索引"}},[a._v("#")]),a._v(" 索引")]),a._v(" "),n("p",[a._v("可通过下标索引读写数组内容，创建空位")]),a._v(" "),n("p",[a._v("可通过修改 length 批量删除元素，创建空位")]),a._v(" "),n("div",{staticClass:"code-block inside-gutter"},[a._v("const showLen = (array) => console.log(`len:${array.length}`, arr);\nconst arr = new Array(20);\nshowLen(arr);\narr[10] = 1010;\nshowLen(arr);\narr[5] = 55;\nshowLen(arr);\narr.length = 10;\nshowLen(arr);\n")]),n("h2",{attrs:{id:"检测"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#检测"}},[a._v("#")]),a._v(" 检测")]),a._v(" "),n("p",[n("code",[a._v("instanceof Array")]),a._v(" 一般情况下可以正常检测，浏览器环境下在有多个 frame 情况下无法跨 frame 检测， Array 字面量指向当前 window 的 Array.")]),a._v(" "),n("p",[a._v("ES5 提供了 "),n("code",[a._v("Array.isArray")]),a._v(", IE 9 + 可用，能检测 iframes.")]),a._v(" "),n("h2",{attrs:{id:"迭代器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#迭代器"}},[a._v("#")]),a._v(" 迭代器")]),a._v(" "),n("p",[a._v("ES6 Array 原型上新增了检索方法：")]),a._v(" "),n("ul",[n("li",[a._v("keys 返回索引（下标）迭代器")]),a._v(" "),n("li",[a._v("values 返回值迭代器")]),a._v(" "),n("li",[a._v("entries 返回键值对数组迭代器")])]),a._v(" "),n("div",{staticClass:"code-block inside-gutter"},[a._v('const a = ["foo", "bar", "baz", "qux"];\n\n// 因为这些方法都返回迭代器，所以可以将它们的内容\n// 通过Array.from()直接转换为数组实例\nconst aKeys = Array.from(a.keys());\nconst aValues = Array.from(a.values());\nconst aEntries = Array.from(a.entries());\n\nconsole.log(aKeys); // [0, 1, 2, 3]\nconsole.log(aValues); // ["foo", "bar", "baz", "qux"]\nconsole.log(aEntries); // [[0, "foo"], [1, "bar"], [2, "baz"], [3, "qux"]]\n// 通过解构遍历 entries 迭代器\nfor (const [idx, element] of a.entries()) {\n  console.log({ idx, element });\n}\n')]),n("h2",{attrs:{id:"复制与填充"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#复制与填充"}},[a._v("#")]),a._v(" 复制与填充")]),a._v(" "),n("p",[a._v("ES6 Array 原型链上新增：")]),a._v(" "),n("ul",[n("li",[a._v("批量复制方法 "),n("code",[a._v("fill")])]),a._v(" "),n("li",[a._v("数组填充方法 "),n("code",[a._v("copyWithin")])])]),a._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[a._v("arr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("fill")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" start"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" end"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\narr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("copyWithin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("target"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" start"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" end"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),n("p",[a._v("这俩方法可以用于任意对象，而不仅仅是数组。")]),a._v(" "),n("div",{staticClass:"code-block inside-gutter"},[a._v('[].fill.call({ length: 5 }, "x", 1, -2);\n')]),n("p",[a._v("对越界下标，只要能解释得通，都能用")]),a._v(" "),n("div",{staticClass:"code-block inside-gutter"},[a._v('[].fill.call({ length: 5 }, "x", -10, 100);\n')]),n("h2",{attrs:{id:"array-str-转换"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#array-str-转换"}},[a._v("#")]),a._v(" array -> str 转换")]),a._v(" "),n("p",[a._v("toString 调用数组项的 toString，然后通过逗号拼接")]),a._v(" "),n("p",[a._v("toLocaleString 调用数组项的 toLocalString，然后通过逗号拼接")]),a._v(" "),n("p",[a._v("根据运算符规则，如果期望位置是一个字符串，则调用其 toString 方法。如："),n("code",[a._v("alert(value)")]),a._v(", "),n("code",[a._v("'' + value")])]),a._v(" "),n("div",{staticClass:"code-block inside-gutter"},[a._v('const arr = [1, "xyz", new Date()];\nconsole.log(arr.toString());\nconsole.log("" + arr);\nconsole.log(arr.toLocaleString());\n')]),n("p",[a._v("join 可以指定分隔符，传入 "),n("code",[a._v(",")]),a._v(" 时返回结果和 toString 结果相同。")]),a._v(" "),n("div",{staticClass:"code-block inside-gutter"},[a._v('const arr = ["a", "b", "c"];\nconsole.log(arr.toString(), arr.join(","));\nconsole.log(arr.join("---"));\n')]),n("div",{staticClass:"code-block inside-gutter"},[a._v('const arr = ["a", null, "b", undefined];\nconsole.log(arr.join("-"));\nconsole.log(arr.toString());\nconsole.log(arr.toLocaleString());\n')]),n("h2",{attrs:{id:"栈方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#栈方法"}},[a._v("#")]),a._v(" 栈方法")]),a._v(" "),n("p",[a._v("push(v) 推入")]),a._v(" "),n("p",[a._v("pop() 弹出")]),a._v(" "),n("div",{staticClass:"code-block inside-gutter"},[a._v('arr = [];\narr.push("a");\nconsole.log("push a", arr);\narr.push("b");\nconsole.log("push b", arr);\nconsole.log("pop", arr.pop());\nconsole.log("arr", arr);\nconsole.log("pop", arr.pop());\nconsole.log("arr", arr);\n')]),n("h2",{attrs:{id:"队列方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#队列方法"}},[a._v("#")]),a._v(" 队列方法")]),a._v(" "),n("h2",{attrs:{id:"排序"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#排序"}},[a._v("#")]),a._v(" 排序")]),a._v(" "),n("h2",{attrs:{id:"操作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#操作"}},[a._v("#")]),a._v(" 操作")]),a._v(" "),n("h2",{attrs:{id:"参考"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[a._v("#")]),a._v(" 参考")]),a._v(" "),n("ul",[n("li",[a._v("一个 "),n("a",{attrs:{href:"https://js-array-playground.netlify.app/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Array Playground"),n("OutboundLink")],1),a._v(" "),n("a",{attrs:{href:"https://github.com/Sellsuki/js-array-playground",target:"_blank",rel:"noopener noreferrer"}},[a._v("仓库"),n("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=r.exports}}]);