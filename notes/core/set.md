# Set 集合

## 初始化

构造函数接收一个可迭代对象，生成迭代后去重的集合，对于引用类型会根据引用判断相等来去重。留空或传入 null 创建空集合，传入非可迭代对象保存。

```js
// new Set([iterable]);
const s = new Set("abcabc");
```

## 属性

### size

返回集合元素数量

## 操作相关方法

### add

添加指定值的元素

### delete

删除指定元素

### clear

清空集合中所有元素

### has

判断指定值是否在集合中

## 迭代相关方法

### keys, values

在集合中，keys 是 values 的别名，返回集合中每个元素的迭代器对象。

```js
const s = new Set("abc");
console.log(s.keys === s.values);
const iterator = s.values();
while ((x = iterator.next().value)) {
  console.log(x);
}
```

## entries

## forEach

和数组类似，只是原本的下标位置同样是元素本身

```js
const s = new Set("abc");
s.forEach(console.log);
```
