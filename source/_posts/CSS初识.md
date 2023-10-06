---
title: CSS初识
tags: css
categories: 前端
description: css样式的基本了解与拓展
cover: 'https://img.tucang.cc/api/image/show/a9f4965cdfd2bc65d6f988ff7e282790'
swiper_index: 11
abbrlink: ca026353
date: 2023-10-06 23:28:06
---

# CSS样式
css，专门用来“美化”标签。
## 在标签上
```html
<div style="color: bisque">冯唐易老，李广难封。</div>
```

## 在head标签里写style标签

```html
<!DOCTYPE html>  
<html lang="en">  
<head>  
    <meta charset="UTF-8">  
    <title>Title</title>  
    <style> 
	  .c1{  
            color: red;  
         }  
    </style>  
</head>  
<body>  
    <div class="c1">豫章故郡，洪都新府。</div>  
</body>  
</html>
```

## 在css文件中写
```css
.c2{  
    color: #7719ae;  
}  
.c1{  
    height: 100px;  
}
```
```html
<!DOCTYPE html>  
<html lang="en">  
<head>  
    <meta charset="UTF-8">  
    <title>Title</title>  
    <link rel="stylesheet" href="2.css">  
</head>  
<body>  
    <div class="c1">豫章故郡，洪都新府。</div>  
    <div class="c2">星分翼轸，地接衡庐。</div>  
</body>  
</html>
```

## 选择器
- ID选择器
```css
#c1{  
    color: #7719ae;  
}
```
-  类选择器
```css
.c2{  
    color: #7719ae;  
}
```
- 标签选择器
```css
div{

}
<div>xxx</div>
```
- 属性选择器
```css
input[type="text"]{  
    border: 3px solid royalblue;  
}  
.v1[xx="123"]{  
    color: pink;  
}  
.v1[xx="456"]{  
    color: gold;  
}
```
```html
<div>  
    <label>  
        用户名：  
        <input type="text" name="user" />  
    </label>  
</div>  
<div class="v1" xx="123">兰亭已矣，梓泽丘墟。</div>  
<div class="v1" xx="456">穷且益坚，不坠青云之志。</div>  
<div class="v1" xx="789">东隅已逝，桑榆非晚。</div>
```
![](https://img.tucang.cc/api/image/show/909627cc98df26fa6df8ed2c1914e4a1)
- 后代选择器
```css
.x1 li{  
    color: pink;  
}  
.x1 > a{  
    color: brown;  
}
```
```html
<div class="x1">  
    <a>百度</a>  
    <div>        <a>谷歌</a>  
    </div>  
    <ul>        <li>茉莉</li>  
        <li>荼蘼</li>  
        <li>蔷薇</li>  
    </ul>  
</div>
```
`.x1 li` 找到属性`x1` 下的 `li` 标签，
`.x1 > a` 找到属性`x1` 下的`a` 标签 (儿子标签)。

![](https://img.tucang.cc/api/image/show/56e3687f832316132991676127dcebff)

## 关于选择器
>  多：类选择器、标签选择器、后代选择器
>  少：属性选择器、ID选择器

关于多个样式和覆盖问题：
```html
<!DOCTYPE html>  
<html lang="en">  
<head>  
    <meta charset="UTF-8">  
    <title>Title</title>  
    <style>        
        .c1{  
            color: red;  
            border: 1px solid red;  
        }  
        .c2{  
            font-size: 30px;  
            color: palevioletred;  
        }  
    </style>  
</head>  
<body>  
    <div class="c1 c2">中国移动</div>  
</body>  
</html>
```
`c1` 和 `c2` 都作用与 `中国联通` 
![](https://img.tucang.cc/api/image/show/6a762137b4d430937ca02329c26d401b)
前者，`c1` 和 `c2` 样式无重复的。、
![](https://img.tucang.cc/api/image/show/6a633436fa6e97fd4d0276089c605502)
后者，`c2` 有对颜色的样式，就覆盖了 `c1` 的颜色样式。
**注：跟c1 c2 的写的顺序无关，而是和在定义的时候，c1 和 c2 的顺序有关，c2 在 c1 后，c2 的样式会覆盖c1。**

`补充` ：如何不覆盖
```html
<!DOCTYPE html>  
<html lang="en">  
<head>  
    <meta charset="UTF-8">  
    <title>Title</title>  
    <style>        
        .c1{  
            color: red ! important;  
            border: 1px solid red;  
        }  
        .c2{  
            font-size: 30px;  
            color: palevioletred;  
        }  
    </style>  
</head>  
<body>  
    <div class="c1 c2">中国移动</div>  
</body>  
</html>
```
在样式后加 `! important` 表示很重要。

## 样式
### 1.高度和宽度
```css
.c1{  
    height: 300px;  
    width: 500px;  
}
```
`注意事项` ：
- 宽度：支持百分比。
- 行内标签：默认无效
- 块级标签：默认有效（右侧区域空白，也不给其他占用）
### 2.块级和行内标签
- 块级
- 行内
- css样式：`display: inline-block` 
示例：行内&块级特性
```html
<!DOCTYPE html>  
<html lang="en">  
<head>  
    <meta charset="UTF-8">  
    <title>Title</title>  
    <style>        .c3{  
            display: inline-block;  
            height: 100px;  
            width: 200px;  
            border: 1px solid red;  
        }  
    </style>  
</head>  
<body>  
    <span class="c3">中国移动</span>  
  
    <span class="c3">中国联通</span>  
  
    <span class="c3">中国电信</span>  
</body>  
</html>
```
![](https://img.tucang.cc/api/image/show/2de2f4ece45cafe3434ec2e619c352dc)
块级和行内的转换：
```html
<!DOCTYPE html>  
<html lang="en">  
<head>  
    <meta charset="UTF-8">  
    <title>Title</title>  
</head>  
<body>  
    <span style="display: block">中国</span>  
    <div style="display: inline">俄罗斯</div>  
</body>  
</html>
```
行内转块级：`style="display: block"`
块级转行内：`style="display: inline"`
### 3.字体设置
- 颜色：可用 `rgb` 
- 大小
- 加粗
- 字体
```html
<!DOCTYPE html>  
<html lang="en">  
<head>  
    <meta charset="UTF-8">  
    <title>Title</title>  
    <style>        .c1{  
            color: palevioletred;  
            font-size: 30px;  
            font-weight: 600;  
            font-family: "dejavu sans mono", serif;  
        }  
    </style>  
</head>  
<body>  
    <span class="c1">松风吹解带，山月照弹琴。</span>  
</body>  
</html>
```
![](https://img.tucang.cc/api/image/show/33491f9929ac5e9dbdb7e9460c16dcaa)
### 4.文字对齐方式
```html
<!DOCTYPE html>  
<html lang="en">  
<head>  
    <meta charset="UTF-8">  
    <title>Title</title>  
    <style>        
      .c1{  
            color: #393cb0;  
            height: 60px;  
            width: 300px;  
            font-family: "dejavu sans mono", serif;  
            border: 2px solid palevioletred;  
            text-align: center; /* 水平方向居中 */            line-height: 60px; /* 垂直方向居中 height = line-height*/  
         }  
    </style>  
</head>  
<body>  
    <div class="c1">天上星河转，人间帘幕垂。</div>  
</body>  
</html>
```
![](https://img.tucang.cc/api/image/show/87fbfa9176e8c3fe17593847b95cd2ba)
### 5.浮动
```html
<!DOCTYPE html>  
<html lang="en">  
<head>  
    <meta charset="UTF-8">  
    <title>Title</title>  
</head>  
<body>  
    <span>左边</span>  
    <span style="float: right">右边</span>  
</body>  
</html>
```

标签`浮动` 起来会脱离文档流，会在页面上悬浮或左右漂浮。
```html
<!DOCTYPE html>  
<html lang="en">  
<head>  
    <meta charset="UTF-8">  
    <title>Title</title>  
    <style>        .item{  
            float: left;  
            width: 200px;  
            height: 170px;  
            border: 3px solid #7b062c;  
        }  
    </style>  
</head>  
<body>  
    <div style="background-color: #7719ae">  
        <div class="item"></div>  
        <div class="item"></div>  
        <div class="item"></div>  
        <div class="item"></div>  
        <div class="item"></div>  
        <div class="item"></div>  
        <div style="clear: both"></div>  
    </div>  
</body>  
</html>
```
标签浮动起来后，从父容器脱离，父容器无法自适应这些浮动元素的高度，父容器应有的高度被内部元素覆盖，导致背景颜色显示不出来。
- 不加 `<div style="clear: both"></div> `
![](https://img.tucang.cc/api/image/show/9816e59d6fb58c3ae13625588aeda2b4)
- 加 `<div style="clear: both"></div> ` 会在该行末尾清除浮动效果，使父容器重新占有一定高度并正确包裹浮动元素。因此，通过加上 `clear: both;` 属性，可以保证父容器正常地展示其内部元素及背景颜色。
![](https://img.tucang.cc/api/image/show/527b6febf60c1dbf41f0cd99ffa20f0a)
### 6.边距
#### 6.1内边距（padding）
指的是元素内容与其边框之间的空间。
```html
<!DOCTYPE html>  
<html lang="en">  
<head>  
    <meta charset="UTF-8">  
    <title>Title</title>  
    <style>        .outer{  
            color: #904125;  
            width: 200px;  
            height: 170px;  
            border: 2px solid #d8c3ca;  
            padding-top: 20px;  
            padding-left: 20px;  
            padding-right: 20px;  
            padding-bottom: 20px;  
        }  
    </style>  
</head>  
<body>  
    <div class="outer">  
        <div style="background-color: palevioletred">同是天涯沦落人，相逢何必曾相识！</div>  
        <div>天长地久有时尽，此恨绵绵无绝期。</div>  
    </div>  
</body>  
</html>
```
`padding-` 替换为"padding " 速记形式：`padding: 20px;`
或者：
`padding: 20px 10px 10px 10px;` 为 上、右、下、左，顺时针的。
#### 6.2外边距（margin）
指的是元素边框与相邻元素之间的空间。
```html
<!DOCTYPE html>  
<html lang="en">  
<head>  
    <meta charset="UTF-8">  
    <title>Title</title>  
</head>  
<body>  
<div style="background-color: palevioletred;height: 200px">同是天涯沦落人</div>  
<div style="background-color: #774ac5;height: 150px;margin-top: 20px">相逢何必曾相识</div>  
</body>  
</html>
```
与 `padding` 一样设置：
如 `margin-top`、`margin-right`、`margin-bottom`、`margin-left`，也可以使用缩写形式：
如 `margin: 10px 20px 10px 20px;` 表示依次为上、右、下、左设置为 10px、20px、10px、20px 的外边距。
#### 二者区别
- 内边距（padding）是相对于元素的内容区域而言，它会增加元素内容与边框之间的空间。
- 外边距（margin）是相对于元素与相邻元素的边距而言，它会影响元素与其他元素之间的距离。

# 总结 & 拓展
- `<body>` 标签，默认有内外边距、字体样式、或背景颜色等，如何解决：
```css
body {
  margin: 0;          /* 去除外边距 */
  padding: 0;         /* 去除内边距 */
  font-family: inherit;/* 继承字体样式 */
  background-color: transparent; /* 设置背景透明 */
}
```
- 内容居中

  - 文本居中

    - 水平居中：使用 CSS 的

       

      ```css
      text-align: center;
      ```

       

      样式将文本在水平方向上居中。

      ```html
      <div style="text-align: center;width: 200px;border: 1px solid red">相逢何必曾相识</div>
      ```

    - 垂直居中：可以通过设置行高

       

      ```css
      line-height：10px
      ```

       

      和容器高度相等来实现单行文本的垂直居中，或者使用 Flexbox 布局的方式实现多行文本的垂直居中。

      ```html
      <div style="display: flex; align-items: center; height: 100px; border: 1px solid red;">
        <span style="font-size: 20px;">相逢何必曾相识</span>
      </div>
      ```
	- 区块居中
	
	    - 水平居中
	
	      - 使用 CSS 的
	
	         
	
	        ```css
	        margin: 0 auto;
	        ```
	
	         
	
	        将区块在水平方向上居中。
	
	        ```html
	        <div style="width: 200px; margin: 0 auto; border: 1px solid red;">这是一个区块</div>
	        ```
	
	      - 使用 Flexbox 布局，将容器设置为 Flex 容器并使用属性
	
	         
	
	        ```css
	        justify-content: center;
	        ```
	
	         
	
	        实现子元素的水平居中。
	
	        ```html
	        <div style="display: flex; justify-content: center; border: 1px solid red;">
	          <div style="width: 200px;">这是一个区块</div>
	        </div>
	        ```
	
	    - 垂直居中
	
	      - 使用 CSS 的绝对定位和负边距（`top: 50%; transform: translateY(-50%);`）将区块在垂直方向上居中。
	
	        ```css
	        top: 50%; transform: translateY(-50%);
	        ```
	
	        
	
	        ```html
	        <div style="position: relative; height: 200px; border: 1px solid red;">
	          <div style="position: absolute; top: 50%; transform: translateY(-50%);">这是一个区块</div>
	        </div>
	        ```
	
	      - 使用 Flexbox 布局，将容器设置为 Flex 容器并使用属性
	
	         
	
	        ```css
	        align-items: center;
	        ```
	
	         
	
	        实现子元素的垂直居中。
	
	        ```html
	        <div style="display: flex; align-items: center; height: 200px; border: 1px solid red;">
	          <div style="width: 200px;">这是一个区块</div>
	        </div>
	        ```
