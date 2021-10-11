(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{377:function(t,o,n){"use strict";n.r(o);var r=n(44),e=Object(r.a)({},(function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"proxy-代理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#proxy-代理"}},[t._v("#")]),t._v(" Proxy 代理")]),t._v(" "),n("h2",{attrs:{id:"创建-proxy"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#创建-proxy"}},[t._v("#")]),t._v(" 创建 Proxy")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" p "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Proxy")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" handler"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("ul",[n("li",[t._v("target 被包装的目标对象，任意类型的对象（引用类型）")]),t._v(" "),n("li",[t._v("handler 描述包装行为的对象，该对象各属性值通常为对象")])]),t._v(" "),n("div",{staticClass:"code-block inside-gutter"},[t._v('// handler 传入 {}\nconst target = {\n  id: "target",\n};\n\nconst proxy = new Proxy(target, {});\n\n// proxy 和 target 访问同一属性返回一致\nconsole.log(target.id); // target\nconsole.log(proxy.id); // target\n\n// 给 target 的属性赋值会反映在 target, proxy 上\n// 因为访问了同一个值\ntarget.id = "foo";\nconsole.log(target.id); // foo\nconsole.log(proxy.id); // foo\n\n// 给 proxy 的属性赋值会反映在 target, proxy 上\n// 赋值转移到了 target 上\nproxy.id = "bar";\nconsole.log(target.id); // bar\nconsole.log(proxy.id); // bar\n\n// hasOwnProperty() 方法在两个地方\n// 都会应用到目标对象\nconsole.log(target.hasOwnProperty("id")); // true\nconsole.log(proxy.hasOwnProperty("id")); // true\n\n// 不同 runtime 实现中，Proxy.prototype 不同 (undefined/null), node 10 及以下返回 null\n// http://www.ecma-international.org/ecma-262/#sec-properties-of-the-proxy-constructor\n// Spec 说应该是 undefined，这是一条特别规定\nconsole.log(Proxy, Proxy.prototype);\nconsole.log(proxy instanceof Proxy);\n')]),n("div",{staticClass:"code-block inside-gutter"},[t._v('const target = {\n  foo: "bar",\n};\n\nconst handler = {\n  // 捕获器在处理程序对象中以方法名为键\n  get() {\n    return "handler override";\n  },\n};\n\nconst proxy = new Proxy(target, handler);\n\nconsole.log(target.foo); // bar\nconsole.log(proxy.foo); // handler override\n\nconsole.log(target["foo"]); // bar\nconsole.log(proxy["foo"]); // handler override\n\nconsole.log(Object.create(target)["foo"]); // bar\nconsole.log(Object.create(proxy)["foo"]); // handler override\n')]),n("h2",{attrs:{id:"捕获器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#捕获器"}},[t._v("#")]),t._v(" 捕获器")]),t._v(" "),n("p",[t._v("使用代理的目的是定义捕获器（trap），捕获器就是在处理对象中定义的"),n("strong",[t._v("基本操作拦截器")]),t._v("。\n处理对象所有可拦截的行为都有对应的反射（Reflect）API 方法，可以直接调用获得默认行为。")]),t._v(" "),n("h2",{attrs:{id:"捕获器不变性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#捕获器不变性"}},[t._v("#")]),t._v(" 捕获器不变性")]),t._v(" "),n("p",[t._v("使用捕获器改变基本操作的行为，是有限制的。捕获程序需要遵循"),n("strong",[t._v("捕获器不变式")]),t._v("（trap invariant).")]),t._v(" "),n("p",[t._v("比如一个不可写不可配置的属性，无法通过 get 捕获器覆盖其返回值。")]),t._v(" "),n("div",{staticClass:"code-block inside-gutter"},[t._v('const target = {};\nObject.defineProperty(target, "foo", { value: "bar" });\nconsole.log(Object.getOwnPropertyDescriptor(target, "foo"));\n\nconst proxy = new Proxy(target, {\n  get() {\n    return "abc";\n  },\n});\nconsole.log(proxy.foo);\n')])])}),[],!1,null,null,null);o.default=e.exports}}]);