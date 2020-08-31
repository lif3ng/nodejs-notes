# Proxy 代理

## 基础

### 构造函数

```javascript
const p = new Proxy(target, handler);
```

- target 被包装的目标对象，任意类型的对象（引用类型）
- handler 描述包装行为的对象，该对象各属性值通常为对象

```js
// handler 传入 {}
const target = {
  id: "target",
};

const proxy = new Proxy(target, {});

// proxy 和 target 访问同一属性返回一致
console.log(target.id); // target
console.log(proxy.id); // target

// 给 target 的属性赋值会反映在 target, proxy 上
// 因为访问了同一个值
target.id = "foo";
console.log(target.id); // foo
console.log(proxy.id); // foo

// 给 proxy 的属性赋值会反映在 target, proxy 上
// 赋值转移到了 target 上
proxy.id = "bar";
console.log(target.id); // bar
console.log(proxy.id); // bar

// hasOwnProperty() 方法在两个地方
// 都会应用到目标对象
console.log(target.hasOwnProperty("id")); // true
console.log(proxy.hasOwnProperty("id")); // true

// 不同 runtime 实现中，Proxy.prototype 不同 (undefined/null), node 10 及以下返回 null
// http://www.ecma-international.org/ecma-262/#sec-properties-of-the-proxy-constructor
// Spec 说应该是 undefined，这是一条特别规定
console.log(Proxy, Proxy.prototype);
console.log(proxy instanceof Proxy);
```

```js
const target = {
  foo: "bar",
};

const handler = {
  // 捕获器在处理程序对象中以方法名为键
  get() {
    return "handler override";
  },
};

const proxy = new Proxy(target, handler);

console.log(target.foo); // bar
console.log(proxy.foo); // handler override

console.log(target["foo"]); // bar
console.log(proxy["foo"]); // handler override

console.log(Object.create(target)["foo"]); // bar
console.log(Object.create(proxy)["foo"]); // handler override
```
