---
title: pandas基础复习
tags: 'pandas, 数据分析'
description: pandas基础复习-基本操作整理
swiper_index: 8
cover: 'https://img.tucang.cc/api/image/show/4d9b8126b1f955874ebd578759a18864'
categories: 数据分析
abbrlink: bfd17a4d
date: 2023-08-28 19:56:04
---

```python
# 导入相关包
import pandas as pd 
import numpy as np
```

# 字典创建为DataFrame


```python
data = {"grammer":["Python","C++","Java","Go",np.nan,"SQL","PHP","Python"],
        "score":[1,2,np.nan,4,5,6,7,10]}
```


```python
df = pd.DataFrame(data)
df
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }
    
    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>grammer</th>
      <th>score</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Python</td>
      <td>1.0</td>
    </tr>
    <tr>
      <th>1</th>
      <td>C++</td>
      <td>2.0</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Java</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>3</th>
      <td>Go</td>
      <td>4.0</td>
    </tr>
    <tr>
      <th>4</th>
      <td>NaN</td>
      <td>5.0</td>
    </tr>
    <tr>
      <th>5</th>
      <td>SQL</td>
      <td>6.0</td>
    </tr>
    <tr>
      <th>6</th>
      <td>PHP</td>
      <td>7.0</td>
    </tr>
    <tr>
      <th>7</th>
      <td>Python</td>
      <td>10.0</td>
    </tr>
  </tbody>
</table>
</div>



# 取得含有"Python"的行


```python
df[df['grammer'] == 'Python']
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }
    
    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>grammer</th>
      <th>score</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Python</td>
      <td>1.0</td>
    </tr>
    <tr>
      <th>7</th>
      <td>Python</td>
      <td>10.0</td>
    </tr>
  </tbody>
</table>
</div>



# 输出所有列名


```python
print(df.columns)
```

    Index(['grammer', 'score'], dtype='object')


# 修改第二列列名为 fraction


```python
df.rename(columns={'score':'fraction'},inplace= True)
```

# 统计 grammer 列中每种编程语言出现的次数


```python
df['grammer'].value_counts()
```




    Python    2
    C++       1
    Java      1
    Go        1
    SQL       1
    PHP       1
    Name: grammer, dtype: int64



# 将 fraction列的空值，用平均值填充


```python
df['fraction'] = df['fraction'].fillna(df['fraction'].mean())
```


```python
df
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }
    
    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>grammer</th>
      <th>fraction</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Python</td>
      <td>1.0</td>
    </tr>
    <tr>
      <th>1</th>
      <td>C++</td>
      <td>2.0</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Java</td>
      <td>5.0</td>
    </tr>
    <tr>
      <th>3</th>
      <td>Go</td>
      <td>4.0</td>
    </tr>
    <tr>
      <th>4</th>
      <td>NaN</td>
      <td>5.0</td>
    </tr>
    <tr>
      <th>5</th>
      <td>SQL</td>
      <td>6.0</td>
    </tr>
    <tr>
      <th>6</th>
      <td>PHP</td>
      <td>7.0</td>
    </tr>
    <tr>
      <th>7</th>
      <td>Python</td>
      <td>10.0</td>
    </tr>
  </tbody>
</table>
</div>



# 提取 fraction 列中值大于3的行


```python
df['fraction'] > 3
```




    0    False
    1    False
    2     True
    3     True
    4     True
    5     True
    6     True
    7     True
    Name: fraction, dtype: bool




```python
df[df['fraction'] > 3]
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }
    
    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>grammer</th>
      <th>fraction</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>2</th>
      <td>Java</td>
      <td>5.0</td>
    </tr>
    <tr>
      <th>3</th>
      <td>Go</td>
      <td>4.0</td>
    </tr>
    <tr>
      <th>4</th>
      <td>NaN</td>
      <td>5.0</td>
    </tr>
    <tr>
      <th>5</th>
      <td>SQL</td>
      <td>6.0</td>
    </tr>
    <tr>
      <th>6</th>
      <td>PHP</td>
      <td>7.0</td>
    </tr>
    <tr>
      <th>7</th>
      <td>Python</td>
      <td>10.0</td>
    </tr>
  </tbody>
</table>
</div>



# 按照 fraction 列进行去重复值操作


```python
df.drop_duplicates(['fraction'])  # 自上而下
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }
    
    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>grammer</th>
      <th>fraction</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Python</td>
      <td>1.0</td>
    </tr>
    <tr>
      <th>1</th>
      <td>C++</td>
      <td>2.0</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Java</td>
      <td>5.0</td>
    </tr>
    <tr>
      <th>3</th>
      <td>Go</td>
      <td>4.0</td>
    </tr>
    <tr>
      <th>5</th>
      <td>SQL</td>
      <td>6.0</td>
    </tr>
    <tr>
      <th>6</th>
      <td>PHP</td>
      <td>7.0</td>
    </tr>
    <tr>
      <th>7</th>
      <td>Python</td>
      <td>10.0</td>
    </tr>
  </tbody>
</table>
</div>



# 计算 fraction 列的平均值


```python
df['fraction'].mean()
```




    5.0



# 将 grammer 列转换为list


```python
df['grammer'].to_list()
```




    ['Python', 'C++', 'Java', 'Go', nan, 'SQL', 'PHP', 'Python']



# 将 DataFrame 保存为csv


```python
df.to_csv('data.csv')
```

# 查看数据行列数


```python
df.shape
```




    (8, 2)



# 提取 fraction 列 值大于 2 且 小于 7 的行


```python
df[(df['fraction'] > 2) & (df['fraction'] < 7)]
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }
    
    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>grammer</th>
      <th>fraction</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>2</th>
      <td>Java</td>
      <td>5.0</td>
    </tr>
    <tr>
      <th>3</th>
      <td>Go</td>
      <td>4.0</td>
    </tr>
    <tr>
      <th>4</th>
      <td>NaN</td>
      <td>5.0</td>
    </tr>
    <tr>
      <th>5</th>
      <td>SQL</td>
      <td>6.0</td>
    </tr>
  </tbody>
</table>
</div>



# 提取 fraction 列最大值所在的行


```python
df['fraction'].max()
```




    10.0




```python
df[df['fraction'] == df['fraction'].max()]
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }
    
    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>grammer</th>
      <th>fraction</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>7</th>
      <td>Python</td>
      <td>10.0</td>
    </tr>
  </tbody>
</table>
</div>



# 查看最后5行


```python
df.tail()   # tail(x)   后 x 行
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }
    
    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>grammer</th>
      <th>fraction</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>3</th>
      <td>Go</td>
      <td>4.0</td>
    </tr>
    <tr>
      <th>4</th>
      <td>NaN</td>
      <td>5.0</td>
    </tr>
    <tr>
      <th>5</th>
      <td>SQL</td>
      <td>6.0</td>
    </tr>
    <tr>
      <th>6</th>
      <td>PHP</td>
      <td>7.0</td>
    </tr>
    <tr>
      <th>7</th>
      <td>Python</td>
      <td>10.0</td>
    </tr>
  </tbody>
</table>
</div>



# 查看前五行


```python
df.head()  # head(x)   前 x 行   
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }
    
    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>grammer</th>
      <th>fraction</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Python</td>
      <td>1.0</td>
    </tr>
    <tr>
      <th>1</th>
      <td>C++</td>
      <td>2.0</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Java</td>
      <td>5.0</td>
    </tr>
    <tr>
      <th>3</th>
      <td>Go</td>
      <td>4.0</td>
    </tr>
    <tr>
      <th>4</th>
      <td>NaN</td>
      <td>5.0</td>
    </tr>
  </tbody>
</table>
</div>



# 删除最后一行


```python
# method 1
df.drop([len(df)-1])
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }
    
    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>grammer</th>
      <th>fraction</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Python</td>
      <td>1.0</td>
    </tr>
    <tr>
      <th>1</th>
      <td>C++</td>
      <td>2.0</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Java</td>
      <td>5.0</td>
    </tr>
    <tr>
      <th>3</th>
      <td>Go</td>
      <td>4.0</td>
    </tr>
    <tr>
      <th>4</th>
      <td>NaN</td>
      <td>5.0</td>
    </tr>
    <tr>
      <th>5</th>
      <td>SQL</td>
      <td>6.0</td>
    </tr>
    <tr>
      <th>6</th>
      <td>PHP</td>
      <td>7.0</td>
    </tr>
  </tbody>
</table>
</div>




```python
# method 2
df.drop(df.shape[0]-1)
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }
    
    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>grammer</th>
      <th>fraction</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Python</td>
      <td>1.0</td>
    </tr>
    <tr>
      <th>1</th>
      <td>C++</td>
      <td>2.0</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Java</td>
      <td>5.0</td>
    </tr>
    <tr>
      <th>3</th>
      <td>Go</td>
      <td>4.0</td>
    </tr>
    <tr>
      <th>4</th>
      <td>NaN</td>
      <td>5.0</td>
    </tr>
    <tr>
      <th>5</th>
      <td>SQL</td>
      <td>6.0</td>
    </tr>
    <tr>
      <th>6</th>
      <td>PHP</td>
      <td>7.0</td>
    </tr>
  </tbody>
</table>
</div>




```python
# method 3
df.drop(df.index[-1])
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }
    
    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>grammer</th>
      <th>fraction</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Python</td>
      <td>1.0</td>
    </tr>
    <tr>
      <th>1</th>
      <td>C++</td>
      <td>2.0</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Java</td>
      <td>5.0</td>
    </tr>
    <tr>
      <th>3</th>
      <td>Go</td>
      <td>4.0</td>
    </tr>
    <tr>
      <th>4</th>
      <td>NaN</td>
      <td>5.0</td>
    </tr>
    <tr>
      <th>5</th>
      <td>SQL</td>
      <td>6.0</td>
    </tr>
    <tr>
      <th>6</th>
      <td>PHP</td>
      <td>7.0</td>
    </tr>
  </tbody>
</table>
</div>



# 添加一行数据 ['ASP',8.28]


```python
s = pd.Series({'grammer':'ASP','fraction':8.28})
```


```python
# DateFrame.append()方法已经被弃用了，所以用 pandas.concat方法
df = pd.concat([df, s.to_frame().T], ignore_index=True)
df
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }
    
    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>grammer</th>
      <th>fraction</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Python</td>
      <td>1.0</td>
    </tr>
    <tr>
      <th>1</th>
      <td>C++</td>
      <td>2.0</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Java</td>
      <td>5.0</td>
    </tr>
    <tr>
      <th>3</th>
      <td>Go</td>
      <td>4.0</td>
    </tr>
    <tr>
      <th>4</th>
      <td>NaN</td>
      <td>5.0</td>
    </tr>
    <tr>
      <th>5</th>
      <td>SQL</td>
      <td>6.0</td>
    </tr>
    <tr>
      <th>6</th>
      <td>PHP</td>
      <td>7.0</td>
    </tr>
    <tr>
      <th>7</th>
      <td>Python</td>
      <td>10.0</td>
    </tr>
    <tr>
      <th>8</th>
      <td>ASP</td>
      <td>8.28</td>
    </tr>
  </tbody>
</table>
</div>



# 对数据进行排序，按照"fraction"列值的大小


```python
df.sort_values("fraction")  
# 相关参数
# ascending(默认True)  升序：True 降序: False
# ignore_index(默认False) True: 重新索引
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }
    
    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>grammer</th>
      <th>fraction</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Python</td>
      <td>1.0</td>
    </tr>
    <tr>
      <th>1</th>
      <td>C++</td>
      <td>2.0</td>
    </tr>
    <tr>
      <th>3</th>
      <td>Go</td>
      <td>4.0</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Java</td>
      <td>5.0</td>
    </tr>
    <tr>
      <th>4</th>
      <td>NaN</td>
      <td>5.0</td>
    </tr>
    <tr>
      <th>5</th>
      <td>SQL</td>
      <td>6.0</td>
    </tr>
    <tr>
      <th>6</th>
      <td>PHP</td>
      <td>7.0</td>
    </tr>
    <tr>
      <th>8</th>
      <td>ASP</td>
      <td>8.28</td>
    </tr>
    <tr>
      <th>7</th>
      <td>Python</td>
      <td>10.0</td>
    </tr>
  </tbody>
</table>
</div>



# 统计 grammer 列每个字符串的长度


```python
df['grammer'] = df['grammer'].fillna('Lisp')
```


```python
df['len_str'] = df['grammer'].apply(lambda x: len(x))
df
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }
    
    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>grammer</th>
      <th>fraction</th>
      <th>len_str</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Python</td>
      <td>1.0</td>
      <td>6</td>
    </tr>
    <tr>
      <th>1</th>
      <td>C++</td>
      <td>2.0</td>
      <td>3</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Java</td>
      <td>5.0</td>
      <td>4</td>
    </tr>
    <tr>
      <th>3</th>
      <td>Go</td>
      <td>4.0</td>
      <td>2</td>
    </tr>
    <tr>
      <th>4</th>
      <td>Lisp</td>
      <td>5.0</td>
      <td>4</td>
    </tr>
    <tr>
      <th>5</th>
      <td>SQL</td>
      <td>6.0</td>
      <td>3</td>
    </tr>
    <tr>
      <th>6</th>
      <td>PHP</td>
      <td>7.0</td>
      <td>3</td>
    </tr>
    <tr>
      <th>7</th>
      <td>Python</td>
      <td>10.0</td>
      <td>6</td>
    </tr>
    <tr>
      <th>8</th>
      <td>ASP</td>
      <td>8.28</td>
      <td>3</td>
    </tr>
  </tbody>
</table>
</div>
