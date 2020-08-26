# Array

## 创建

### 构造函数创建

```javascript
[element0, element1, ..., elementN]
new Array(element0, element1[, ...[, elementN]])
new Array(arrayLength)
```

- 不传入参数，返回 `[]`
- 传入一个参数 n
  - n 为数值，返回 length 为 n 的数组
  - n 为非数值，返回 `[n]`
- 传入多个参数，代表数组值枚举

### 字面量

`[1,2,]` 代表`[1,2]`

### 静态方法

Array 构造函数有两个 ES6 新增的静态方法 `from` 和 `of` 用于创建数组

- from 将类数组转化为数组

```js
// String
Array.from("abc"); // ["a", "b", "c"]
```

```js
// Map
const m = new Map().set(1, 2).set(3, 4);
console.log(m);
Array.from(m);
```

```js
// Set
const s = new Set().add(1).add(2).add(3).add(4);
console.log(s);
Array.from(s);
```

```js
// 数组浅复制
const a1 = [1, 2, 3, 4];
const a2 = Array.from(a1);

console.log({ a1, a2 });
console.log(a1 === a2); // false
```

```js
// 可以使用任何可迭代对象
const iter = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
  },
};
console.log(Array.from(iter)); // [1, 2, 3, 4]

// arguments对象可以被轻松地转换为数组
function getArgsArray() {
  return Array.from(arguments);
}
console.log(getArgsArray(1, 2, 3, 4)); // [1, 2, 3, 4]

// from()也能转换带有必要属性的自定义对象
const arrayLikeObject = {
  0: 1,
  1: 2,
  2: 3,
  3: 4,
  length: 4,
};
console.log(Array.from(arrayLikeObject)); // [1, 2, 3, 4]
```

```js
// 第2个参数代表 映射函数，Array.from(x,fn) 相当于 Array.from(x).map(fn)
// 第3个参数代表 this, 可通过 this 在映射函数中使用
const a1 = [1, 2, 3, 4];
const a2 = Array.from(
  a1,
  function (x, index) {
    console.log({ this: this, index, x });
    return `${this.prefix}-i${index}-${x}`;
  },
  { prefix: "abc" }
);
```

- of 将一组参数转为数组，看着不厉害也不好用

```js
// 可代替 Array.prototype.slice.call(arguments)
Array.of(1, 2, 3, 4);
```

## 空位

字面量创建数组是可以使用`,`创建空位

```js
console.log([, , ,]);
console.log(["x", , ,]);
console.log([, , "x"]);
console.log([, "x", ,]);
```

```js
// map 会跳过空位
[, "x", ,].map((...args) => {
  console.log(args);
  return "y";
});
```

```js
// join()视空位置为空字符串
[, "x", ,].join("-");
```

## 索引

可通过下标索引读写数组内容，创建空位

可通过修改 length 批量删除元素，创建空位

```js
const showLen = (array) => console.log(`len:${array.length}`, arr);
const arr = new Array(20);
showLen(arr);
arr[10] = 1010;
showLen(arr);
arr[5] = 55;
showLen(arr);
arr.length = 10;
showLen(arr);
```

## 检测

`instanceof Array` 一般情况下可以正常检测，浏览器环境下在有多个 frame 情况下无法跨 frame 检测， Array 字面量指向当前 window 的 Array.

ES5 提供了 `Array.isArray`, IE 9 + 可用，能检测 iframes.

## 迭代器

## 复制与填充

## 栈方法

## 队列方法

## 排序

## 操作
