# Symbol

Symbol(符号)是 ES6 新增的数据类型，是原始值之一，用于确保对象属性使用唯一标识符，避免属性冲突。对象的 key 除了字符串只能是 Symbol 实例。

```javascript
Symbol([description]);
```

实例通过 `Symbol()` 进行初始化，不支持使用 new 关键字初始化（以避免创建 Symbol 包装类型）。可以传入字符串参数用作描述信息，这个字符串仅用于是、在 DevTools 调试，与 Symbol 的标识**无关**。

```js
const s1 = Symbol();
const s2 = Symbol();
console.log(s1 === s2);
const namedS1 = Symbol("foo");
const namedS2 = Symbol("foo");
console.log(namedS1 === namedS2);
```

所以在 DevTools 里以 Symbol 实例作为属性名，也许会看着一样，但是不会冲突。对其属性的操作在代码中有对应的局部变量。

```js
const key1 = Symbol("foo");
const key2 = Symbol("foo");
const obj = {
  [key1]: "value1",
  [key2]: "value2",
};
console.log(obj);
```

## 全局 Symbol 注册表

需要跨文件跨作用域使用某一 Symbol，可以通过字符串 key 索引到对应的 Symbol 对象复用。

`Symbol.key` 调用时会先检测全局注册表，发现不存在对应的 Symbol 实例，就生成一个新的 Symbol 实例并添加到全局注册表中，后续使用时直接返回这个 Symbol 实例。

```js
const s1 = Symbol.for("foo");
const s2 = Symbol.for("foo");
console.log(s1 === s2);
```

`Symbol.keyFor` 通过 Symbol 实例反查全局注册表中的 key,如果传入的参数不是注册表中全局 Symbol 实例，返回 undefined.传入非 Symbol 实例抛出 TypeError.

```js
const s = Symbol.for("foo");
console.log(Symbol.keyFor(s));
```

## Well-Known Symbols

[Well-Known Symbols](https://tc39.es/ecma262/#sec-well-known-symbols) 就是在 Devtools 中看到的原型链上 `Symbol(Symbol.xxx)` 属性，用于暴露语言的内部行为。

### Symbol.iterator

> A method that returns the default Iterator for an object. Called by the semantics of the for-of statement.

为对象返回默认迭代器的一个方法。for-of 循环调用这个函数进行迭代操作。

### Symbol.asyncIterator

### Symbol.hasInstance

### Symbol.isConcatSpreadable

### Symbol.match

### Symbol.matchAll

### Symbol.replace

### Symbol.search

### Symbol.species

### Symbol.split

### Symbol.toPrimitive

### Symbol.toStringTag

### Symbol.unscopables
