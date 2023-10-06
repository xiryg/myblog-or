---
title: 图仓+tinyimage+PicGo
tags:
  - 图床
categories: 图床搭建
cover: https://img.tucang.cc/api/image/show/bc600b1b3b411e37d9ed9d9b99ad2c27
abbrlink: 558cad5e
description: 简单便捷的图床搭建方法
date: 2023-08-16 20:16:49
---

# 前言

我之前用过几个图床，但感觉都差了点意思：

​    **`Github` : 免费的，设置简单，但是访问速度很慢。**

​    **`sm.ms`  :  操作较麻烦，链接无了，图片也无了。**

​    **`阿里云&腾讯云`  :  对象存储要收费，白嫖党拒绝。**

​    **`七牛云`  :  用了一个月后，要绑定域名（备案过的）。**

​    ~ ~ ~

******

# 图仓

图仓链接 - [图仓 (tucang.cc)](https://tucang.cc/#/)

用户上传图片的时候，通过作者大佬自己的服务器，分发到不同的节点存储。通过图片链接取图片的时候，是从众多节点中选一个权重最大的访问，按道理讲，你节点足够多，就可以实现永久访问。<span style="box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); padding: 3px; background-color: yellow;"><strong>OvO</strong></span>

对于绝大多数人，像我，就是简单的上传图片，和使用图片。

## 上传图片

![image-20230816212457073](https://img.tucang.cc/api/image/show/baefbe8229de53e6ffe456fb96158520)



如上图所示，选取想要上传的文件夹，添加图片，开始上传即可。

## 使用图片

图片上传成功后，在 <span style="box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); padding: 3px; background-color: pink;"><strong>图片管理</strong></span> 处，选取和使用图片，找到自己要使用的图片，右键，如下图所示。

![image-20230816213203121](https://img.tucang.cc/api/image/show/05365754fed0f282f7a46e2d90f0f469)

点击 ”复制图片地址“ 获取图片链接。

点击 ”生成图片代码“  如下：

![image-20230816213746492](https://img.tucang.cc/api/image/show/5077d4a048481ab146c06afecccf2f06)

作者内置了几个模板,用起来挺方便。

“图片管理”处，跟电脑操作文件差不多，可以自己摸索以下。

# 图片的压缩

为了提高加载速度，节约存储空间，减少带宽消耗，上传的图片一般都是经过压缩的，很多图床的要求是单张图片不超过5M，图仓也是这样的。

推荐一个网站，一个软件。

* [TinyPNG](https://tinypng.com/)

  ![image-20230816220124567](https://img.tucang.cc/api/image/show/5f7b5312bd8c7085ba3158e6ef03d8b0)

一个在线压缩的网站，压缩后图片也保留了很高的质量，免费版有限制，基本够用。

* [tinyImage](https://github.com/focusbe/tinyImage)

  界面精简明了，功能强大，操作简单。

  ![image-20230816221112348](https://img.tucang.cc/api/image/show/d6d0313d93bdee2adc76d631c5ffb45f)

  我看到这两个的时候，有点疑惑，是一家的不，都是熊猫logo，名字还差不多，好像不是，算啦，好用就行。

  # PicGo：一款开源的图床管理工具

  Github下载地址：[Releases · Molunerfinn/PicGo (github.com)](https://github.com/Molunerfinn/PicGo/releases)

  PicGo官方指南：[PicGo is Here | PicGo](https://picgo.github.io/PicGo-Doc/zh/guide/)

  ![image-20230816222612219](https://img.tucang.cc/api/image/show/3d46d39a4165860afaa5f3f9355b61c7)

  界面如下图。

  ![image-20230816222820083](https://img.tucang.cc/api/image/show/be20251ee1703a45412a8863933caa13)

  图床设置里，并没有图仓的图床设置，所以我们要自定义Web图床。

  ## 插件下载

  ![image-20230816223207566](https://img.tucang.cc/api/image/show/0c2dc1d9fdb352ad016e38164b6c431e)

  “插件设置” -> 输入"自定义" -> “安装”（打红勾的）。等待一下（安装不成功，换流量即可，开热点）

  ## 图床设置

  ![](https://img.tucang.cc/api/image/show/076896d7ac84d221f68b8239372db109)

  自定义web图床：

  * 图床配置名：自己取一个（随意）

  * API地址：https://tucang.cc/api/v1/upload

  * POST参数名：file

  * JSON路径：data.url

  * 自定义请求头：有需要再填

  * 自定义body：

    ```json
    { 
        "token": "你的Token",
        "sync" : "true",
        "syncApiIds" : "1，2，3", 
        "folderId" : "文件id" 
    }
    ```

    * token获取：”我的“ -> "设置" -> ”重置“ -> "复制"
    * sync：true # 同步上传
    * syncApiIds: 同步上传的节点，从节点中查看。
    * folderd: 文件id        获取：选择文件 -> 右键 -> 详情 ->文件ID

  其余配置，查看使用文档：[tucang.cc](https://doc.tucang.cc/web/#/655396588/223024529)

  ******

  # 结束

  以上就是图床的搭建流程，应该还算详细，有疑惑之处，请在评论区评论，我看到后会立马回复，如有疏漏或错误的地方，还请指出，我会进行修改。希望这篇文章能对你有帮助！



















 
