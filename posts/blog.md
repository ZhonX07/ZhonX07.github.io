---
sticky: 999
date: 2025-06-20
cover: '/images/blog/configmts.png'
author: ZhonXu
singleColumn: true
categories: Vitepress
tags: [vitepress,blog]
---

一篇教你如何用 async 主题的 vitepress 部署博客的教程。

<!--more-->

# 如何使用 vitepress-theme-async 部署你的博客

:::warning
还没写完！
:::

之前有出过一期教大伙怎么用` Vitepress 默认主题 + Github Pages `部署博客的。但vitepress本来就是为文档站而设计，所以默认主题看着也确实不像是能担当博客站的样子，所以如果你足够细心，应该也发现了，我把那篇文章的标题改成了`如何使用 Vitepress + Github Pages 部署你的项目文档`。  

那就有小伙伴要问了：**有没有基于 Vitepress 的适合博客站的主题呢？**  

有的兄弟有的。我们这一次用`MaLuns`大佬做的[Vitepress-theme-async](https://github.com/Maluns/vitepress-theme-async)来部署博客站。

**但因为 vitepress-theme-async 的配置项较默认主题更复杂，对萌新而言可能更难上手，所以这一次所讲述的内容会更为详细。**

## 须知
本期教程中我们将使用`Windows Terminal + Powershell 7.5`而非`命令提示符`执行命令。

如果你使用的是`Windows 10`或没有安装`WT与pwsh7.5`的`Windows 11`，请前往`Microsoft Store`自行搜索安装或直接前往[微软商店官网-Windows 终端](https://apps.microsoft.com/detail/9n0dx20hk701?hl=zh-CN&gl=CN) 和 [微软商店官网-Powershell 7.5](https://apps.microsoft.com/detail/9mz1snwt0n5d?launch=true&mode=full&hl=zh-cn&gl=cn&ocid=bingwebsearch)（←点击可以直接跳转到页面，下同）下载。

## 第一步·部署

### 必要前置条件

1.安装 [node.js](https://nodejs.org/zh-cn) ，跳转到主页以后点击那个巨大的 `下载 Node.js (LTS)` 按钮，下载并安装 node ，这方面应该不需要再赘述。  

2.安装 [Visual Studio Code For Windows](https://code.visualstudio.com/docs/?dv=win64user) 。  
:::details 是 Mac 或者 Linux 用户？
点击下面链接以获取适合你系统的 VSCode 。  
[VSCode For Mac](https://code.visualstudio.com/docs/?dv=osx)  
[VSCode For Linux(deb)](https://code.visualstudio.com/docs/?dv=linux64_deb)  
[VSCode For Linux(rpm)](https://code.visualstudio.com/docs/?dv=linux64_rpm)
:::

3.安装 [Git](https://git-scm.com/downloads)

在一切准备妥当后，我们便可以进入下一步。



### 配置工作一：npm与pnpm

如果你在`中国大陆地区`使用npm，那么下载包时可能会非常慢。因此，我们需要配置大陆镜像源（推荐使用淘宝镜像）。

在安装完 node 以后，按下 `Win+R` 组合键，输入`wt`，进入终端后输入`node -v`，你应该看到这样的返回结果：
```shell
C:\Users\xxxx>node -v
v22.16.0
```
这代表你的 node 可以正常被调用。

接下来，输入：
```shell
npm config set registry https://registry.npmmirror.com/
npm get registry
```
你应当得到如下的返回结果：
```shell
C:\Users\xxxx>npm config set registry https://registry.npmmirror.com/

C:\Users\xxxx>npm get registry
https://registry.npmmirror.com/
```

这样，淘宝镜像源就配置完毕了。

接下来需要下载`pnpm`，这是一个更快、更节省磁盘空间的包管理器。

在终端输入：
```shell
npm install -g pnpm
```
这条指令使我们能够全局安装pnpm。

### 配置工作二：VS Code

VS Code 默认显示语言为英语，所以我们需要设置显示语言为简中/繁中。

按下 `Ctrl+Shift+X` 并在左侧的搜索框中输入`Chinese`，带有`Simplified`后缀的为简体中文语言包，带有`Traditional`字样的则为繁体中文语言包，根据个人喜好安装并重启 Code 即可。

### 配置工作三：Git & Github

打开 [Github](https://github.com) , 登录你的 Github 账号并按左上角的 `New` 新建一个仓库：
  
![新建仓库](/images/doc/newrepo.png)

**请勿勾选 `Add a README file` 和 `Add .gitignore` 。**

现在你就有了一个名为 `blog-demo` 的仓库。

现在回到终端。

**在确保自己已经安装了 Git 的情况下，**

设置 git 的用户名与邮箱，当然最好要是你在注册 github 时所填入的，虽然不一致也可以。

:::details 不一致会有哪些问题呢？
**如果不一致**，GitHub 还是能接收代码，但显示为“匿名提交”，**你就拿不到绿点贡献记录。**
:::

如：
```bash
git config --global user.name "你的用户名"       <--记得改！别直接复制粘贴！
git config --global user.email "你的邮箱地址"   <- ┚
```
好了，接下来配置 ssh 密钥。
按下 `Win+R` ，输入 `Git` ，选择 `Git Bash`。

![Git Bash](/images/doc/gitbash.png)

输入 `ssh-keygen -t rsa` 并敲三下回车。

:::details 为什么敲三下回车？
因为输入这个命令生成密钥时，会有提示问你是否需要设置密码。  
如果设置了话，每次使用 Git 都会用到密码，一般都是直接不写为空，直接回车就好。
:::

然后，输入 `cat ~/.ssh/id_rsa.pub`  查看密钥。

![查看密钥](/images/doc/key.png)

密钥复制备用， ~~待会下锅。~~ 

打开 [你的 Github 密钥配置界面](https://github.com/settings/keys)

![密钥配置](/images/doc/configUI.png)

点击 `New SSH key` ，将你的密钥输入进去并起一个 title 。

![起个title](/images/doc/titlekey.png)

**无论何时……**

**不要将你的 KEY 分享给他人！<br>不要将你的 KEY 分享给他人！<br>不要将你的 KEY 分享给他人！**


自己的家门钥匙要自己守好，**钥匙都满天飞了还只想着锁门，你靠空气防盗？**


:::details 如果不慎泄露了 KEY ？
立刻！马上！按下右边的 **Delete** 按钮删掉它！
![删除密钥](/images/doc/delkey.png)
:::

接下来配置本地仓库。

### 安装 async

按下`Win+R`输入`wt`并敲击回车，在命令提示符中输入以下命令：
```bash
REM 新建一个文件夹，这里以 D:\dev 为例
mkdir D:\dev && cd D:\dev  
```

此时你将被跳转至`D:\dev`目录。

输入
:::code-group
```bash [npm]
npm create async-theme@latest my-first-blog
```

```bash [yarn]
yarn create async-theme@latest my-first-blog
```

```bash [pnpm]
pnpm create async-theme@latest my-first-blog
```
:::
以在这个目录中初始化一个项目，`my-first-blog`可以换成你想要的名字。