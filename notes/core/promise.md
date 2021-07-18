# Promise

Promise 用于为异步过程提供语言级别的支持。

Promise 有三个状态：

- pending 悬而未决
- fulfilled 达成正向结果
- rejected 未达成正向结果

## 类方法

### Promise.resolve

返回一个 fulfilled 状态的 Promise 实例。

可将一个值包裹成一个 Promise 实例

```js
console.log(Promise.resolve(1));
```

包裹 Promise 的实例后仍为该实例，是个幂等操作。

```js
let p = new Promise(() => {});
console.log(Promise.resolve(p) === p);
```

### Promise.reject

返回一个 rejected 状态的 Promise 实例

```js
console.log(Promise.reject("result"));
```

## 实例方法

### then

### catch

### finally
