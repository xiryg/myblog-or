---
title: python四大数据类型
tags: python
cover: 'https://img.tucang.cc/api/image/show/f3569f9efe878dd67ce35aad871f7b99'
description: python四大数据类型
categories: python
swiper_index: 11
abbrlink: '56639862'
date: 2023-11-02 22:40:48
---

# 列表（List）

列表是一个有序的元素集合。可以将它看作一个容器，里边可以放置各种数据类型的元素，也可以随时添加、修改和删除元素。

## 创建列表

创建一个列表非常简单，只需要将数据项放在`[]` 中，并以逗号 `,` 分隔开就好。

1. 使用方括号 `[]` 创建一个空列表或包含元素的列表：

   ```python
   # 创建一个空列表
   my_list = []
   
   # 创建一个包含元素的列表
   my_list = [1, 2, 3, 4]
   ```

2. 使用 `list()` 函数将其他可迭代对象（如字符串、元组、集合等）转换为列表：

   ```python
   # 将字符串转换为列表
   my_list = list("Hello")
   # 结果：['H', 'e', 'l', 'l', 'o']
   
   # 将元组转换为列表
   my_list = list((1, 2, 3, 4))
   # 结果：[1, 2, 3, 4]
   
   # 将集合转换为列表
   my_list = list({1, 2, 3, 4})
   # 结果：[1, 2, 3, 4]
   ```

## 访问列表元素

与字符串的索引一样，列表的索引从 `0` 开始，以此类推。

```python
words_list = ['liberal', 'rational', 'moral', 'canal', 'fatal']

# 访问第一个元素
first_element = words_list[0]
# 结果: liberal

# 访问第三个元素
third_element = words_list[2]
# 结果: moral
```

![](https://img.tucang.cc/api/image/show/53162c03e091a456e396acd1b56e8b73)

元素也可以反向索引，最后一个元素索引`-1` ，往前一位则为 `-2` ，以此类推。

```python
words_list = ['liberal', 'rational', 'moral', 'canal', 'fatal']

# 访问最后一个元素
last_element = words_list[-1]
# 结果: fatal

# 访问倒数第三元素
third_last_element = words_list[-3]
# 结果: moral
```

![](https://img.58duihuan.com/2600548844924928)

**注意：** 如果使用的索引超出了列表的长度，将引发 `IndexError` 异常。

![](https://telegraph-a3p.pages.dev/file/4aec5d6a15bad0dc6e5cc.png)

## 修改列表元素

```python
my_list = [1, 2, 3, 4]

# 修改第二个元素
my_list[1] = 5
# 现在 my_list 的值为 [1, 5, 3, 4]
```

这种赋值也适用于切片

```python
# 修改前三个元素
my_list[:3] = [6, 7, 8]
# 现在 my_list 的值为 [6, 7, 8, 4, 5]
```

## 添加和删除元素

### 1. `append()`：向列表末尾添加一个元素

```python
my_list = [1, 2, 3]
my_list.append(4)
# 现在 my_list 的值为 [1, 2, 3, 4]
```

### 2. `extend()`：向列表末尾添加另一个列表的所有元素

```python
my_list = [1, 2, 3]
my_list.extend([4, 5, 6])
# 现在 my_list 的值为 [1, 2, 3, 4, 5, 6]
```

### 3. `insert()`：在指定位置插入一个元素

```python
my_list = [1, 2, 3]
my_list.insert(1, 4)
# 现在 my_list 的值为 [1, 4, 2, 3]
```

### 4. `remove()`：删除指定值的第一个元素

```python
my_list = [1, 2, 3, 4, 5]
my_list.remove(3)
# 现在 my_list 的值为 [1, 2, 4, 5]
```

### 5. `pop()`：删除指定位置上的元素并返回它的值

```python
my_list = [1, 2, 3, 4, 5]
popped_element = my_list.pop(2) # 删除索引为2的元素（即第三个元素）
# 现在 my_list 的值为 [1, 2, 4, 5]，popped_element 的值为 3
```

## 列表推导式

循环来生成列表：

```python
values = [1,2,3,4]
squares = []
for x in values:
    squares.append(x ** 2)
squares
# [1, 4, 9, 16]
```

列表推导式：

```python
values = [1,2,3,4]
squares = [i ** 2 for i in values]
squares
# [1, 4, 9, 16]
```

增加条件，保留平方小于10的：

```python
values = [1,2,3,4]
squares = [i ** 2 for i in values if i ** 2 <10]
squares
# [1, 4, 9]
```

# 字典（Dictionary）

用于存储键-值对。它是可变的、无序的，并且可以容纳任意类型的对象作为值。字典的键(不可变类型) 必须唯一，而值可以重复。

## 创建字典

可以使用花括号 `{}` 或 `dict()` 函数来创建一个空字典，或者使用大括号括起来的键-值对来初始化字典。

```python
my_dict = {}  # 创建一个空字典
my_dict = dict()  # 也可以使用 dict() 函数创建一个空字典

my_dict = {"key1": "value1", "key2": "value2"}  # 初始化具有键-值对的字典
```

## 访问字典元素

可以通过键来获取对应的元素

```python
my_dict = {"name": "xiryg", "age": 18}
print(my_dict["name"])  # 输出 "xiryg"
```

## 添加或修改键-值对

```python
my_dict = {"name": "xiryg", "age": 18}
my_dict["gender"] = "male"  # 添加新的键-值对
my_dict["age"] = 19  # 修改已有的键-值对
```

## 删除键-值对

可以使用 `del` 关键字或 `pop()` 方法来删除指定的键-值对。

```python
my_dict = {"name": "xiryg", "age": 18}
del my_dict["name"]  # 删除姓名信息
my_dict.pop("age") # 删除年龄信息并返回该值
```

## 遍历字典

可以使用 `for` 循环来遍历字典的键或值，或者同时遍历键和值。

```python
my_dict = {"name": "xiryg", "age": 18}
for key in my_dict:
    print(key)  # 输出所有键

for value in my_dict.values():
    print(value)  # 输出所有值

for key, value in my_dict.items():
    print(key, value)  # 输出所有键-值对
```

## 字典推导式

```python
my_dict = {x: x**2 for x in range(5)}
# 现在 my_dict 的值为 {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}

my_list = ["apple", "banana", "orange", "kiwi", "grapefruit"]
my_dict = {item: len(item) for item in my_list if len(item) >= 5}
# 现在 my_dict 的值为 {'apple': 5, 'banana': 6, 'orange': 6, 'grapefruit': 10}
```

# 集合（Set）

无序、不重复的数据结构，它可以用来存储多个元素。与列表和元组不同，集合不保持元素的顺序，并且不允许存在重复的元素。

## 创建集合

可以使用花括号 `{}` 或 `set()` 函数来创建一个空集合，或者使用大括号括起来的元素来初始化集合。

```python
my_set = set()  # 创建一个空集合
my_set = {1, 2, 3}  # 初始化具有元素的集合
```

## 添加元素

 可以使用 `add()` 方法向集合中添加单个元素，如果要添加多个元素，可以使用 `update()` 方法。

```python
my_set = {1, 2, 3}
my_set.add(4)  # 添加单个元素
my_set.update([5, 6])  # 添加多个元素
```

## 删除元素

使用 `remove()` 方法可以删除集合中的指定元素，如果元素不存在，则会引发 `KeyError` 异常。另外，`discard()` 方法也可以删除元素，但如果元素不存在，它不会引发异常。

```python
my_set = {1, 2, 3}
my_set.remove(2)  # 删除元素 2
my_set.remove(4) # 删除元素 4 引发异常
my_set.discard(4)  # 删除元素 4（如果存在）
```

## 集合运算

集合对象有许多内置的方法，可以执行常见的集合运算，如并集、交集、差集等。一些常用的方法有 `union()`、`intersection()`、`difference()`、`symmetric_difference()` 等。

```python
set1 = {1, 2, 3}
set2 = {3, 4, 5}
union_set = set1.union(set2)  # 并集：{1, 2, 3, 4, 5}
intersection_set = set1.intersection(set2)  # 交集：{3}
difference_set = set1.difference(set2)  # 差集：{1, 2}
sym_diff_set = set1.symmetric_difference(set2)  # 对称差集：{1, 2, 4, 5}
```

# 元组（Tuple）

一种有序、不可变的数据结构，可以用来存储多个元素。与列表和集合不同，元组一旦创建就不能再进行修改。

## 创建元组

可以使用小括号 `()` 来创建一个空元组，或者使用小括号包含的逗号分隔的元素来初始化元组。

```python
my_tuple = ()  # 创建一个空元组
my_tuple = (1, 2, 3)  # 初始化具有元素的元组
my_tuple = (1,)  # 创建一个只包含一个元素的元组
```

## 访问元素

可以通过下标索引访问元组中的单个元素，下标从0开始，也可以使用切片操作获取子元组。

```python
my_tuple = (1, 2, 3)
element = my_tuple[1]  # 访问第二个元素，值为2
sub_tuple = my_tuple[1:3]  # 获取子元组，值为(2, 3)
```

## 元组运算

元组对象支持许多内置的方法，可以执行常见的元组运算，如连接、重复、比较等。一些常用的方法有 `+`、`*`、`len()`、`count()`、`index()` 等。

```py
tuple1 = (1, 2, 3)
tuple2 = (4, 5, 6)
concatenated_tuple = tuple1 + tuple2  # 连接元组，值为(1, 2, 3, 4, 5, 6)
repeated_tuple = tuple1 * 3  # 重复元组，值为(1, 2, 3, 1, 2, 3, 1, 2, 3)
tuple_len = len(tuple1)  # 获取元组长度，值为3
tuple_count = tuple1.count(2)  # 计算元素2在元组中出现的次数，值为1
tuple_index = tuple1.index(2)  # 查找元素2在元组中第一次出现的下标，值为1
```

# 结语

通过本文的介绍，希望你可以对Python中的列表、字典、集合、元组有更深入的了解！

`φ(゜▽゜*)♪` 
