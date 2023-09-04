---
title: pandas基础复习2
cover: 'https://img.tucang.cc/api/image/show/05831d79b95033d45f5319c1f9f4bab9'
description: pandas基础复习2-进阶操作整理
swiper_index: 9
tags: 'pandas, 数据分析'
categories: 数据分析
abbrlink: 1207525a
date: 2023-09-04 21:00:09
---

# Pandas数据处理


```python
import pandas as pd
df = pd.read_excel('https://raw.githubusercontent.com/xiryg/blog_picture/main/resource/pandas120.xlsx')
```


```python
df.head()
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
      <th>createTime</th>
      <th>education</th>
      <th>salary</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>2020-03-16 11:30:18</td>
      <td>本科</td>
      <td>20k-35k</td>
    </tr>
    <tr>
      <th>1</th>
      <td>2020-03-16 10:58:48</td>
      <td>本科</td>
      <td>20k-40k</td>
    </tr>
    <tr>
      <th>2</th>
      <td>2020-03-16 10:46:39</td>
      <td>不限</td>
      <td>20k-35k</td>
    </tr>
    <tr>
      <th>3</th>
      <td>2020-03-16 10:45:44</td>
      <td>本科</td>
      <td>13k-20k</td>
    </tr>
    <tr>
      <th>4</th>
      <td>2020-03-16 10:20:41</td>
      <td>本科</td>
      <td>10k-20k</td>
    </tr>
  </tbody>
</table>
</div>




```python
df.info()
```

    <class 'pandas.core.frame.DataFrame'>
    RangeIndex: 135 entries, 0 to 134
    Data columns (total 3 columns):
     #   Column      Non-Null Count  Dtype         
    ---  ------      --------------  -----         
     0   createTime  135 non-null    datetime64[ns]
     1   education   135 non-null    object        
     2   salary      135 non-null    object        
    dtypes: datetime64[ns](1), object(2)
    memory usage: 3.3+ KB


# 将salary列数据转换为最大值于最小值的平均值


```python
# data 的apply方法
def func(series):
    # print(seires)
    lst = series['salary'].split('-')
    smin = int(lst[0].strip('k'))
    smax = int(lst[1].strip('k'))
    avg_salary = int((smin+smax)/2 * 1000)
    return avg_salary
df['new_salary'] = df.apply(func,axis = 1)
```


```python
df.head()
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
      <th>createTime</th>
      <th>education</th>
      <th>salary</th>
      <th>new_salary</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>2020-03-16 11:30:18</td>
      <td>本科</td>
      <td>20k-35k</td>
      <td>27500</td>
    </tr>
    <tr>
      <th>1</th>
      <td>2020-03-16 10:58:48</td>
      <td>本科</td>
      <td>20k-40k</td>
      <td>30000</td>
    </tr>
    <tr>
      <th>2</th>
      <td>2020-03-16 10:46:39</td>
      <td>不限</td>
      <td>20k-35k</td>
      <td>27500</td>
    </tr>
    <tr>
      <th>3</th>
      <td>2020-03-16 10:45:44</td>
      <td>本科</td>
      <td>13k-20k</td>
      <td>16500</td>
    </tr>
    <tr>
      <th>4</th>
      <td>2020-03-16 10:20:41</td>
      <td>本科</td>
      <td>10k-20k</td>
      <td>15000</td>
    </tr>
  </tbody>
</table>
</div>



# 将数据根据学历进行分组并计算平均薪资


```python
print(df.groupby('education').mean(numeric_only=True))
```

                 new_salary
    education              
    不限         19600.000000
    大专         10000.000000
    本科         19361.344538
    硕士         20642.857143


# 查看数值型列的汇总统计


```python
df.describe()
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
      <th>new_salary</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>count</th>
      <td>135.000000</td>
    </tr>
    <tr>
      <th>mean</th>
      <td>19159.259259</td>
    </tr>
    <tr>
      <th>std</th>
      <td>8661.686922</td>
    </tr>
    <tr>
      <th>min</th>
      <td>3500.000000</td>
    </tr>
    <tr>
      <th>25%</th>
      <td>14000.000000</td>
    </tr>
    <tr>
      <th>50%</th>
      <td>17500.000000</td>
    </tr>
    <tr>
      <th>75%</th>
      <td>25000.000000</td>
    </tr>
    <tr>
      <th>max</th>
      <td>45000.000000</td>
    </tr>
  </tbody>
</table>
</div>



# 新增一列根据salary将数据分为三组


```python
# cut 方法
bins = [0,5000,20000,50000]
group_names = ['低','中','高']
df['categories'] = pd.cut(df['new_salary'],bins,labels=group_names)
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
      <th>createTime</th>
      <th>education</th>
      <th>salary</th>
      <th>new_salary</th>
      <th>categories</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>2020-03-16 11:30:18</td>
      <td>本科</td>
      <td>20k-35k</td>
      <td>27500</td>
      <td>高</td>
    </tr>
    <tr>
      <th>1</th>
      <td>2020-03-16 10:58:48</td>
      <td>本科</td>
      <td>20k-40k</td>
      <td>30000</td>
      <td>高</td>
    </tr>
    <tr>
      <th>2</th>
      <td>2020-03-16 10:46:39</td>
      <td>不限</td>
      <td>20k-35k</td>
      <td>27500</td>
      <td>高</td>
    </tr>
    <tr>
      <th>3</th>
      <td>2020-03-16 10:45:44</td>
      <td>本科</td>
      <td>13k-20k</td>
      <td>16500</td>
      <td>中</td>
    </tr>
    <tr>
      <th>4</th>
      <td>2020-03-16 10:20:41</td>
      <td>本科</td>
      <td>10k-20k</td>
      <td>15000</td>
      <td>中</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>130</th>
      <td>2020-03-16 11:36:07</td>
      <td>本科</td>
      <td>10k-18k</td>
      <td>14000</td>
      <td>中</td>
    </tr>
    <tr>
      <th>131</th>
      <td>2020-03-16 09:54:47</td>
      <td>硕士</td>
      <td>25k-50k</td>
      <td>37500</td>
      <td>高</td>
    </tr>
    <tr>
      <th>132</th>
      <td>2020-03-16 10:48:32</td>
      <td>本科</td>
      <td>20k-40k</td>
      <td>30000</td>
      <td>高</td>
    </tr>
    <tr>
      <th>133</th>
      <td>2020-03-16 10:46:31</td>
      <td>本科</td>
      <td>15k-23k</td>
      <td>19000</td>
      <td>中</td>
    </tr>
    <tr>
      <th>134</th>
      <td>2020-03-16 11:19:38</td>
      <td>本科</td>
      <td>20k-40k</td>
      <td>30000</td>
      <td>高</td>
    </tr>
  </tbody>
</table>
<p>135 rows × 5 columns</p>
</div>



# 按照salary列对数据进行降序排列 


```python
df.sort_values('new_salary',ascending=False)
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
      <th>createTime</th>
      <th>education</th>
      <th>salary</th>
      <th>new_salary</th>
      <th>categories</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>53</th>
      <td>2020-03-16 11:30:17</td>
      <td>本科</td>
      <td>30k-60k</td>
      <td>45000</td>
      <td>高</td>
    </tr>
    <tr>
      <th>37</th>
      <td>2020-03-16 11:04:00</td>
      <td>本科</td>
      <td>30k-50k</td>
      <td>40000</td>
      <td>高</td>
    </tr>
    <tr>
      <th>101</th>
      <td>2020-03-16 11:01:39</td>
      <td>本科</td>
      <td>30k-45k</td>
      <td>37500</td>
      <td>高</td>
    </tr>
    <tr>
      <th>16</th>
      <td>2020-03-16 10:36:57</td>
      <td>本科</td>
      <td>25k-50k</td>
      <td>37500</td>
      <td>高</td>
    </tr>
    <tr>
      <th>131</th>
      <td>2020-03-16 09:54:47</td>
      <td>硕士</td>
      <td>25k-50k</td>
      <td>37500</td>
      <td>高</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>123</th>
      <td>2020-03-16 11:20:44</td>
      <td>本科</td>
      <td>3k-6k</td>
      <td>4500</td>
      <td>低</td>
    </tr>
    <tr>
      <th>126</th>
      <td>2020-03-16 11:12:04</td>
      <td>本科</td>
      <td>3k-5k</td>
      <td>4000</td>
      <td>低</td>
    </tr>
    <tr>
      <th>110</th>
      <td>2020-03-16 11:12:04</td>
      <td>本科</td>
      <td>3k-5k</td>
      <td>4000</td>
      <td>低</td>
    </tr>
    <tr>
      <th>96</th>
      <td>2020-03-16 10:44:23</td>
      <td>不限</td>
      <td>3k-4k</td>
      <td>3500</td>
      <td>低</td>
    </tr>
    <tr>
      <th>113</th>
      <td>2020-03-16 10:48:43</td>
      <td>本科</td>
      <td>3k-4k</td>
      <td>3500</td>
      <td>低</td>
    </tr>
  </tbody>
</table>
<p>135 rows × 5 columns</p>
</div>




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
      <th>createTime</th>
      <th>education</th>
      <th>salary</th>
      <th>new_salary</th>
      <th>categories</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>2020-03-16 11:30:18</td>
      <td>本科</td>
      <td>20k-35k</td>
      <td>27500</td>
      <td>高</td>
    </tr>
    <tr>
      <th>1</th>
      <td>2020-03-16 10:58:48</td>
      <td>本科</td>
      <td>20k-40k</td>
      <td>30000</td>
      <td>高</td>
    </tr>
    <tr>
      <th>2</th>
      <td>2020-03-16 10:46:39</td>
      <td>不限</td>
      <td>20k-35k</td>
      <td>27500</td>
      <td>高</td>
    </tr>
    <tr>
      <th>3</th>
      <td>2020-03-16 10:45:44</td>
      <td>本科</td>
      <td>13k-20k</td>
      <td>16500</td>
      <td>中</td>
    </tr>
    <tr>
      <th>4</th>
      <td>2020-03-16 10:20:41</td>
      <td>本科</td>
      <td>10k-20k</td>
      <td>15000</td>
      <td>中</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>130</th>
      <td>2020-03-16 11:36:07</td>
      <td>本科</td>
      <td>10k-18k</td>
      <td>14000</td>
      <td>中</td>
    </tr>
    <tr>
      <th>131</th>
      <td>2020-03-16 09:54:47</td>
      <td>硕士</td>
      <td>25k-50k</td>
      <td>37500</td>
      <td>高</td>
    </tr>
    <tr>
      <th>132</th>
      <td>2020-03-16 10:48:32</td>
      <td>本科</td>
      <td>20k-40k</td>
      <td>30000</td>
      <td>高</td>
    </tr>
    <tr>
      <th>133</th>
      <td>2020-03-16 10:46:31</td>
      <td>本科</td>
      <td>15k-23k</td>
      <td>19000</td>
      <td>中</td>
    </tr>
    <tr>
      <th>134</th>
      <td>2020-03-16 11:19:38</td>
      <td>本科</td>
      <td>20k-40k</td>
      <td>30000</td>
      <td>高</td>
    </tr>
  </tbody>
</table>
<p>135 rows × 5 columns</p>
</div>



# 取出第33行的数据


```python
df.loc[32]
```




    createTime    2020-03-16 10:07:25
    education                      硕士
    salary                    15k-30k
    new_salary                  22500
    categories                      高
    Name: 32, dtype: object



# 删除列 createTime


```python
df.drop(columns=['createTime'],inplace=True)
```


```python
df.head()
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
      <th>education</th>
      <th>salary</th>
      <th>new_salary</th>
      <th>categories</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>本科</td>
      <td>20k-35k</td>
      <td>27500</td>
      <td>高</td>
    </tr>
    <tr>
      <th>1</th>
      <td>本科</td>
      <td>20k-40k</td>
      <td>30000</td>
      <td>高</td>
    </tr>
    <tr>
      <th>2</th>
      <td>不限</td>
      <td>20k-35k</td>
      <td>27500</td>
      <td>高</td>
    </tr>
    <tr>
      <th>3</th>
      <td>本科</td>
      <td>13k-20k</td>
      <td>16500</td>
      <td>中</td>
    </tr>
    <tr>
      <th>4</th>
      <td>本科</td>
      <td>10k-20k</td>
      <td>15000</td>
      <td>中</td>
    </tr>
  </tbody>
</table>
</div>



# 将 education列与salary列合并为新的一列


```python
df["new_c"] = df["new_salary"].astype(str) + df['education']
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
      <th>education</th>
      <th>salary</th>
      <th>new_salary</th>
      <th>categories</th>
      <th>new_c</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>本科</td>
      <td>20k-35k</td>
      <td>27500</td>
      <td>高</td>
      <td>27500本科</td>
    </tr>
    <tr>
      <th>1</th>
      <td>本科</td>
      <td>20k-40k</td>
      <td>30000</td>
      <td>高</td>
      <td>30000本科</td>
    </tr>
    <tr>
      <th>2</th>
      <td>不限</td>
      <td>20k-35k</td>
      <td>27500</td>
      <td>高</td>
      <td>27500不限</td>
    </tr>
    <tr>
      <th>3</th>
      <td>本科</td>
      <td>13k-20k</td>
      <td>16500</td>
      <td>中</td>
      <td>16500本科</td>
    </tr>
    <tr>
      <th>4</th>
      <td>本科</td>
      <td>10k-20k</td>
      <td>15000</td>
      <td>中</td>
      <td>15000本科</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>130</th>
      <td>本科</td>
      <td>10k-18k</td>
      <td>14000</td>
      <td>中</td>
      <td>14000本科</td>
    </tr>
    <tr>
      <th>131</th>
      <td>硕士</td>
      <td>25k-50k</td>
      <td>37500</td>
      <td>高</td>
      <td>37500硕士</td>
    </tr>
    <tr>
      <th>132</th>
      <td>本科</td>
      <td>20k-40k</td>
      <td>30000</td>
      <td>高</td>
      <td>30000本科</td>
    </tr>
    <tr>
      <th>133</th>
      <td>本科</td>
      <td>15k-23k</td>
      <td>19000</td>
      <td>中</td>
      <td>19000本科</td>
    </tr>
    <tr>
      <th>134</th>
      <td>本科</td>
      <td>20k-40k</td>
      <td>30000</td>
      <td>高</td>
      <td>30000本科</td>
    </tr>
  </tbody>
</table>
<p>135 rows × 5 columns</p>
</div>



# 将第一行与最后一行进行拼接 


```python
pd.concat([df[:1],df[-1:]])
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
      <th>education</th>
      <th>salary</th>
      <th>new_salary</th>
      <th>categories</th>
      <th>new_c</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>本科</td>
      <td>20k-35k</td>
      <td>27500</td>
      <td>高</td>
      <td>27500本科</td>
    </tr>
    <tr>
      <th>134</th>
      <td>本科</td>
      <td>20k-40k</td>
      <td>30000</td>
      <td>高</td>
      <td>30000本科</td>
    </tr>
  </tbody>
</table>
</div>



# 查看每列的数据类型 


```python
df.dtypes
```




    education       object
    salary          object
    new_salary       int64
    categories    category
    new_c           object
    dtype: object



# 检查数据中是否有缺失值及其数量


```python
df.isnull().any()
```




    education     False
    salary        False
    new_salary    False
    categories    False
    new_c         False
    dtype: bool




```python
df.isnull().sum()
```




    education     0
    salary        0
    new_salary    0
    categories    0
    new_c         0
    dtype: int64



# 将 new_salary 列类型转换为浮点数


```python
df['new_salary'].astype(float)
```




    0      27500.0
    1      30000.0
    2      27500.0
    3      16500.0
    4      15000.0
            ...   
    130    14000.0
    131    37500.0
    132    30000.0
    133    19000.0
    134    30000.0
    Name: new_salary, Length: 135, dtype: float64



# 计算salary列大于10000的数量


```python
len(df[df['new_salary'] > 10000])
```




    119



# 查看每种学历出现的次数


```python
df['education'].value_counts()
```




    本科    119
    硕士      7
    不限      5
    大专      4
    Name: education, dtype: int64



# 查看共有几种学历 


```python
df['education'].nunique()
```




    4




```python
df['education'].unique()
```




    array(['本科', '不限', '硕士', '大专'], dtype=object)
