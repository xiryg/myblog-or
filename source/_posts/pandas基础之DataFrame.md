---
title: pandas基础之DataFrame
tags: 'pandas, 数据分析'
cover: 'https://img.tucang.cc/api/image/show/ce75eb2f2b99c123feb6dad7268e59f7'
categories: 数据分析
abbrlink: d366272
swiper_index: 2
description: pandas基础之DataFrame的相关操作
date: 2023-08-02 23:13:47
---

### 简介

DataFrame是pandas中最常见的对象(series也是)

DataFrame提供的是一个**类似表的结构**，**由多个Series组成DataFrame 是一个表格型的数据类型**

DataFrame 常用于表达二维数据,什么叫做二维呢 ?  非常接近于电子表格,它的竖行称之为 columns，称之为 index，也就是说可以通过 columns 和 index 来确定一个主句的位置。

对于DataFrame的操作无非也就是`增删改查`



### DataFrame的三种创建

DataFrame()函数的参数index的值相当于行索引，若不手动赋值，将默认从0开始分配。**columns的值相当于列索引**，若不手动赋值，也将默认从0开始分配。



#### 二维数组创建(常用)

```python
import pandas  as pd  
import  numpy  as np 

s = np.random.randint(1,100,size = (3,2))

df  = pd.DataFrame(s,index=['a','b','c'],columns= ['A','B'])
```



#### 字典式和列表创建

```python

#  注意是字典里边有列表 
# 设置行和列
data1 = {
    "a":[1,2,3],    # 注意 字典里面第一个键 就是df 的columns 
    "b":[4,5,6],
    "c":[7,8,9]   
}
df = pd.DataFrame(data=data1, index=["p1", "p2", "p3"])
df

```

#### 字典和Series创建

```python
data2 = {"one":pd.Series([1,2,444],), # 必须得先添加index 
        "two":pd.Series([12,3,4] )}
df = pd.DataFrame(data2)

```

### Dataframe的常用属性和方法

#### 查看数据和类型

```python
import pandas as pd
import numpy as np
df = pd.DataFrame({'Country': ['China', 'China', 'India', 'India', 'America', 'Japan', 'China', 'India'],

                   'Income': [10000, 10000, 5000, 5002, 40000, 50000, 8000, 5000],

                   'Age': [50, 43, 34, 40, 25, 25, 45, 32]}
                 )



df.head()  #查看前5个 , 可以写数字 
df.tail()  # 查看后5个
df.dtypes  #  查看数据元素类型  s.dtype  和series进行对比
type(df)   # 查看数据集的类型
df.shape  # shape是属性  不是方法 千万不要加括号 
df.size
df.info()

# 查看索引
df.index  #  要注意没有括号
# 查看列名
df.columns  #  要注意没有括号
df.values    #  要注意没有括号  df.values  #  numpy类型数组

```

#### 列索引设置行索引

**set_index    把列索引设置成行索引** 

```python
df_new = df.set_index('Country')  #  把 country列设置成索引  
```



#### 还原列索引

```python
 # 即进行还原了刚才的set_index 的操作 
df_new01 = df_new.reset_index()   # 注意此时是 df_new
df_new01 
```

#### 添加一行

```python
# 第一种方法 
s= pd.Series(['i',100,30],index= ['Country','Income','Age'])
df.append(s,ignore_index= True)

# 第二种方法 
s= pd.Series(['i',100,30],index= ['Country','Income','Age'])
s.name = 8   #必须设置name属性 这样才能进行添加 name的值是 要添加的索引值 
df.append(s)


```

#### 删除一行

```python
df.drop(7) # 删除索引为7 的 
df = df.drop([6,8])  # 删除索引为6,8 行 默认是行  # 单个的话 有没有中括号都可以   默认删除为行 
```

#### 列操作

##### 查看列

```python
df.columns  #  Index(['Country', 'Income', 'Age'], dtype='object')

df['Country']  #  df.Country 含义是一样的 是series形式

df[['Country','Income']]  #  取两列的值  注意传入的列表形式  最后是df形式

df['Country'].unique()  # 去重 
df['Country'].nunique()  #  去重以后查看个数 

df['Country'].value_counts() # 统计元素数据的个数 
```

##### 增加一列

```python
df['eco'] = range(1,9)  #  值的填入

df['enco'] = pd.Series(range(9))  

#会根据索引的对应进行填入 ,即series的和df 行索引 索引必须得相同  ,如果不相同,不会报错,但是会为缺失值 
df['enco'] = pd.Series(range(4),index = [3,43,5,6])
```

##### 删除列

```python

df.drop('Country')  # 会报错
df.drop('Country',axis= 1 )  # 用drop需要指定行和列 axis= 1是列  ,但不是对原对象进行删除(重新输入df还会有country这一列)
df.drop('Country',axis= 1, inplace= True )  #  直接对原对象进行删除  理解它很重要

del  df['Income']  #  直接对原对象的列进行删除

# 特别注意  :  drop函数中   axis = 1  代表的是列  axis= 0 代表的是行 其他的函数则相反 


```

##### 对列的所有值进行修改

```python
df['Income'] = 20  # 进行赋值 
```



##### 通过布尔值进行获取(重要)

```python
df.Age  #  查看年龄
df.Age.mean()    # 查看年龄的平均值 
df.Age> df.Age.mean()

df[df.Age> df.Age.mean()]  #  代表把是 True 值的都拿到了 
```

#### 行操作

问题如果我想要取第三行,第四行,第一列和第二列的数据 形成一个Dataframe怎么取  ?



##### ilock 和lock的区别

| 获取行子集的方法 | 说明                             |
| ---------------- | -------------------------------- |
| loc              | 基于索引标签获取行子集(显示索引) |
| ilock            | 基于行索引获取行子集(隐式索引)   |

```python
import pandas as pd
import numpy as np
df = pd.DataFrame({
    'Country':['China', 'China', 'India', 'India', 'America', 'Japan', 'China', 'India'],
    'Income': [10000, 10000, 5000, 5002, 40000, 50000, 8000, 5000],
    'Age': [50, 43, 34, 40, 25, 25, 45, 32]
},index = ['a','b','c','d','e','f','g','h'])

# 取列 
df['Country']  # series的形式 
df[['Country']]   #  Dataframe的形式 

# 取列已经知道了,取行怎么取 
df.head(3)

# 获取单行 loc后面默认取行 
df.loc['a'] # 把显示索引为 a 的 行数据取出来 是Series类型 
df.loc[['a']] # 把显示索引为 a 的 行数据取出来 是Dataframe的类型  因为是二维

df.loc[-1]  # 会报错  因为没有行名(显示索引)是为 -1  的 
df.iloc[0]

# 取指定多行
df.iloc[[1,2,4]] #  获取多行
df[0:3]  # 注意是隐式索引(了解)



# 行列混合
语法是df.loc[行,列]   (iloc同样适用)

# 取列 
df.loc[:,'Country'] #  逗号左边的冒号是的是取所有的行,冒号右边是取指定的列  series的形式 
df['Country']  # 等同于

df.loc[:,['Country','Income']]  #  特别注意:  loc对应的是名字 也就是显示索引   Dataframe的形式 
df[['Country','Age']]   # 等同于 

#获取指定的多行多列 : 特别注意两个中括号的使用 Dataframe的形式 
df.loc[['a','b'],['Country','Age']]
df.iloc[[0,2],[1,2]]


df.loc['a':'e','Country':'Age']  # 这个就不用加中括号  因为有冒号 
df.iloc[0:4,0:3]

# 获取单个数据
df.loc['a','Country'] 
df.loc[['a'],['Country']]
# 获取单个数据的Dataframe, 特别注意中括号的使用  小窍门: 只要前后都有两个中括号 一定就是Dataframe的类型包括冒号 也算是中括号的含义


# 特别注意 就是显式索引和隐式索引区间的问题  
df.iloc[0: 3,0:3]
df.loc['a':'c','Age': 'Income']

# 小练习: 取国家为India前两行行数据

df[df.Country == 'India'].iloc[0:2]
df[df.Country == 'India'].head(2)

# 小练习 : Age列等于偶数那些数据 赋值成 90岁 

df['Age'] = 90  #  正常赋值 

df[df['Age'] %2 == 0 ]['Age'] = 90    # 会出现异样  

new__index = df[df['Age'] %2 == 0 ].index   #先取出index 
df.loc[new__index,'Age'] =  90
```

loc 更加灵活多变，代码的可读性更高，iloc 的代码简洁，但可读性不高。具体在数据
分析工作中使用哪一种方法，根据情况而定，大多数时候建议使用 loc 方法.

##### 易错点

```python

df['a' : 'c']  #   显性索引都是闭区间
df[0 : 4]   # 隐式索引是左闭右开区间  



df.loc[:,'Income']  # series类型   一般会df['Income']  取值 
df.loc[:,['Income']]  #  Dataframe类型 ,小窍门 : 因为有两个中括号(冒号也有中括号的含义)是二维的有行和列 
 
df.loc['b','Income']  #  取值 为一个元素
df.loc['b',['Income']]  # series类型 ,只有一个'b',是series类型 此时loc分不清取一个还是多个 

df.loc[['b'],['Income']]  # 这样才是 Datafame类型  和之前的对比 ,因为是有两个中括号
```



#### 写入文件

**特别注意 :**

写入文件的的时候 , 一定要一个单元格运行一次代码  不要一行单元格运行多个代码 否则会出现尴尬的错误

```python
test_dict = {
    'name': ['Alice', 'Bob', 'Cindy', 'Eric', 'Helen', 'Grace '],
    'math': [90, 89, 99, 78, 97, 93],
    'english': [89, 94, 80, 94, 94, 90]
}  # 准备数据

df = pd.DataFrame(test_dict)   


df.to_csv('./ceshi2.csv')  # 存储数据 

pd.read_csv('./ceshi2.csv')  #  读入数据 

```



非常尴尬的一点就是  :   多了一个 unnameed : 0  这一列   这是在 存储 csv的时候  默认把之前的在jupyter显示的索引存进去 

两种办法解决  :   

- to_csv(index = False )   即可解决 
- 用drop进行删除列为  unnameed : 0   然后 drop的参数里变成  inplace  =  True 即可 



```python
test_dict = {'id':[1,2,3,4,5,6],'name':['Alice','Bob','Cindy','Eric','Helen','Grace '],'math':[90,89,99,78,97,93],'english':[89,94,80,94,94,90]}

df = pd.DataFrame(test_dict)

df.to_csv('./ceshi2.csv',index =  False)  # 消除  unnamed 列 

pd.read_csv('./ceshi2.csv')
```

### 案例分析

数据集 :  scientists.csv

```python
import pandas as pd
import  numpy as np 

df  = pd.read_csv('./scientists.csv')
df.head()
df.tail()
df.dtypes
df.info
df.index
df.columns
df.values
df.shape
# df.set_index('Name')
# df.set_index('Name').reset_index()  # 还原 
# df.reset_index(drop = True)  #  在原来的索引乱序的前提时候用  drop =  True   series的时候已经讲过 

# 首先看一下数据类型是什么,才能在添加行的时候对症下药
df.info()
s = pd.Series(['Lee','1900-03-03','1999-03-03',90,'musician'],index = ['Name','Born','Died','Age','Occupation'])
df.append(s,ignore_index = True)  #  或者是用之前的 s.name = 8 

# df.drop(7)  #删除第7行  或者 加中括号 [4,7] 删除4, 7 行 
# df.drop('Name',axis = 1)    # inplace = True  表示对最原始的df进行修改 ,但是注意 不是修改csv 文件 !
df.Name[0:4]   #  选择前4个科学家的名字 
# df['other'] = range(0,len(df))  
# df['other'] = pd.Series(np.random.randint(1,100,size =(8,)))
df[df['Age'] > df['Age'].mean()]



df.iloc[0:6]  #说下区别 
df.loc[0:6] #显示索引 

df.iloc[0,2]   # 获取单个数据
df.loc[0,'Age']

df.iloc[0]  # 取行
df['Age']  # 取列 

df[['Age','Name']] # 取指定列 
df.iloc[[1,3,4]]  #  取多行

df.loc[[2,4],['Age','Name']]  #  取指定的多行和多列 
df.iloc[[2,4],[1,4]]  # 用 iloc 进行获取 指定的多行多列 

df.loc[[2,4],['Age','Name']].loc[2,'Age'] # 基础之前在取值 

df = df.iloc[[2,4],[1,4]]  # 用 iloc 进行获取 指定的多行多列 
df.to_csv('./测试.csv',index =  False)
df = pd.read_csv('测试.csv')
```
