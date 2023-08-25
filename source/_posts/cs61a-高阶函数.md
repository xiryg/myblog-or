---
title: 作为参数的函数
tags: 高阶函数
cover: 'https://img.tucang.cc/api/image/show/4070078c4876eed8700b2bf55aca0ac4'
categories: cs61a
abbrlink: e5fa646
description: cs61a - 作为参数的函数相关
date: 2023-08-09 21:04:01
---

# 作为参数的函数

<div style="background-color: #ffffe0; border: 1px solid #ccc; padding: 10px; border-radius: 5px;">
<details>
<summary><strong>INFO</strong></summary>


引自：[1.6 Higher-Order Functions](http://www.composingprograms.com/pages/16-higher-order-functions.html)

对应：Disc 01、Disc 02、HW 02、Lab 02、Hog



</details>

</div>



我们已经认识到，函数是一种抽象手段，用于描述与其参数的具体数值无关的复合操作。

```python
>>> def square(x):
    	return x * x
```

也就是说，在 <span style="box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); padding: 3px; background-color: pink;"><strong>square</strong></span> 中我们并不是单纯的讨论一个特定的数字的平方，而是在描述一种普适的获取任意数字平方的方法。当然，我们也可以在不定义这个函数的情况下，用下面的方式取得数字的平方，从而不用表现出 <span style="box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); padding: 3px; background-color: pink;"><strong>square</strong></span> 的使用。

```python
>>> 3 * 3
9
>>> 5 * 5
25
```

<!--more-->

这种做法对于诸如 <span style="box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); padding: 3px; background-color: pink;"><strong>square</strong></span> 之类的简单计算是足够的，但对于诸如 <span style="box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); padding: 3px; background-color: pink;"><strong>abs</strong></span> 或 <span style="box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); padding: 3px; background-color: pink;"><strong>fib</strong></span> 之类的更复杂的样例就会变得很麻烦。一般来说，缺少函数定义会对我们非常不利，它会迫使我们总是工作在特定的原始操作级别（本例中为乘法），而不是更高的操作级别。我们的程序将能够计算平方，但缺少表达平方的概念的能力。

我们对强大的编程语言提出的要求之一就是能够通过将名称分配给通用模板（general patterns）来构建抽象，然后直接使用该名称进行工作。函数提供了这种能力。正如我们将在下面的示例中看到的那样，代码中重复出现了一些常见的编程模板，但它们可以与许多不同的函数一起使用。这些模板也可以通过给它们命名来进行抽象。

为了将某些通用模板表达为具名概念（named concepts），我们需要构造一种“可以接收其他函数作为参数”或“可以把函数当作返回值”的函数。这种可以操作函数的函数就叫做高阶函数（higher-order functions）。本节将会展示：高阶函数可以作为一种强大的抽象机制，来极大地提高我们语言的表达能力。





## 作为参数的函数

考虑以下三个函数，它们都计算总和。

第一个是 `sum_naturals`，计算`n`以内的自然数之和：

```python
>>> def sum_naturals(n):
        total, k = 0, 1
        while k <= n:
            total, k = total + k, k + 1
        return total
>>> sum_naturals(100)
5050
```

第二个`sum_cubes`计算`n`以内的自然数的立方和。

```python
>>> def sum_cubes(n):
        total, k = 0, 1
        while k <= n:
            total, k = total + k*k*k, k + 1
        return total

>>> sum_cubes(100)
25502500
```

第三个`pi_sum` 会计算下列各项的和，它的值会非常缓慢地收敛（converge）到*π*

<img src="http://www.composingprograms.com/img/pi_sum.png" alt="p-1" style="zoom:150%;" />

```python
>>> def pi_sum(n):
        total, k = 0, 1
        while k <= n:
            total, k = total + 8 / ((4*k-3) * (4*k-1)), k + 1
        return total
>>> pi_sum(100)
3.1365926848388144
```
这三个函数显然具有共同的基本模式。它们大部分是相同的，仅在名称和用于计算要添加的项的`k`的函数上有所不同。我们可以通过填充同一模板中的槽来生成每个函数：

```python
def <name>(n):
    total, k = 0, 1
    while k <= n:
        total, k = total + <term>(k), k + 1
    return total
```

这种通用模板的存在是一个强有力的证据 → 表明了有一个实用的抽象手段正在“浮出水面”。这些函数都是用于求出各项的总和。作为程序设计者，我们希望我们的语言足够强大，以便我们可以编写一个表达“求和”概念的函数，而不仅仅是一个计算特定和的函数。在 Python 中，我们可以很轻易地做到这一点，方法就是使用上面展示的通用模板，并将“槽位”转换为形式参数：

在下面的示例中，`summation` 函数将上界 `n` 和计算第 `k` 项的函数 `term` 作为其两个参数。我们可以像使用任何函数一样使用 `summation` ，它简洁地表达了求和。花点时间单步调试（step through）走完这个示例，注意函数如何将 `cube` 绑定到局部名称 `term` 上以确保
$$
1 * 1*1+2*2*2+3*3*3=36
$$
正确。

<iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=def%20summation%28n,%20term%29%3A%0A%20%20%20%20total,%20k%20%3D%200,%201%0A%20%20%20%20while%20k%20%3C%3D%20n%3A%0A%20%20%20%20%20%20%20%20total,%20k%20%3D%20total%20%2B%20term%28k%29,%20k%20%2B%201%0A%20%20%20%20return%20total%0A%0Adef%20cube%28x%29%3A%0A%20%20%20%20return%20x*x*x%0A%0Adef%20sum_cubes%28n%29%3A%0A%20%20%20%20return%20summation%28n,%20cube%29%0A%0Aresult%20%3D%20sum_cubes%283%29&codeDivHeight=400&codeDivWidth=350&cumulative=true&curInstr=0&heapPrimitives=true&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>



使用会返回其参数的 `identity` 函数，我们还可以使用完全相同的 `summation` 函数对自然数求和。

```python
>>> def summation(n, term):
        total, k = 0, 1
        while k <= n:
            total, k = total + term(k), k + 1
        return total
>>> def identity(x):
        return x
>>> def sum_naturals(n):
        return summation(n, identity)
>>> sum_naturals(10)
55
```

`summation` 函数也可以直接调用，而无需为特定的数列去定义另一个函数。

```python
>>> summation(10, square)
385
```

我们可以通过定义函数 `pi_term` 来计算每一项，从而使用求和抽象来定义` pi_sum`。我们传递参数 `1e6`（1 * 10^6 = 1000000 的简写）来生成 `π `的近似值。

```python
>>> def pi_term(x):
        return 8 / ((4*x-3) * (4*x-1))
>>> def pi_sum(n):
        return summation(n, pi_term)
>>> pi_sum(1e6)
3.141592153589902
```

