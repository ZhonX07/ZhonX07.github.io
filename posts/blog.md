---
title: "如何使用 vitepress-theme-async 部署你的博客"
sticky: 999
date: 2025-06-20 12:00
cover: '/images/blog/configmts.png'
author: ZhonXu
layout: "home"
singleColumn: true
categories: Vitepress建站
tags: [vitepress,blog]
---

一篇教你如何用 async 主题的 vitepress 部署博客的教程。

<!--more-->

:::warning 不赞更新中
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

按下`Win+R`输入`wt`并敲击回车，在终端中输入以下命令：
```bash
mkdir D:\dev && cd D:\dev   #新建一个文件夹，这里以 D:\dev 为例
```

此时你将被跳转至`D:\dev`目录。

输入
:::code-group
```bash [npm]
npm create async-theme@latest my-first-blog
```

```bash [yarn]
yarn create async-theme my-first-blog
```

```bash [pnpm]
pnpm create async-theme@latest my-first-blog
```
:::
以在这个目录中初始化一个项目，`my-first-blog`可以换成你想要的名字。

在项目初始化完毕后，应当返回如下内容：
```shell
PS D:\dev> pnpm create async-theme@latest my-first-blog
.../1978cf6094a-1fbc                     |   +5 +
.../1978cf6094a-1fbc                     | Progress: resolved 5, reused 0, downloaded 5, added 5, done
Creating vitepress-theme-async project...

🎉 🎉 created successfully!

📚 📚 docs: https://vitepress-theme-async.imalun.com

project in D:\dev\my-first-blog

Done. Now run:

  ①  cd my-first-blog
  ②  pnpm install
  ③  pnpm run dev
  ④  pnpm run build
  ⑤  pnpm run serve
```

好，现在我们在 VS Code 里打开项目文件夹。

接下来，我们需要下载安装 async 所需要的依赖。

按下`Ctrl+J`呼出底部面板，找到`终端`，输入`pnpm install`，稍等片刻。
```bash
PS D:\dev\my-first-blog> pnpm install
Packages: +165
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Progress: resolved 207, reused 148, downloaded 17, added 165, done

dependencies:
+ vitepress-theme-async 0.0.25

devDependencies:
+ typescript 5.8.3
+ vitepress 1.6.3

╭ Warning ───────────────────────────────────────────────────────────────────────────────────╮
│                                                                                            │
│   Ignored build scripts: esbuild, vue-demi.                                                │
│   Run "pnpm approve-builds" to pick which dependencies should be allowed to run scripts.   │
│                                                                                            │
╰────────────────────────────────────────────────────────────────────────────────────────────╯

Done in 19.9s using pnpm v10.12.1
```
然后执行指令`pnpm run dev`并在浏览器新标签页输入`localhost:5173`，你应当看到这样的界面。

![首次打开项目](/images/blog/firststarted.png)

这样就好了，接下来我们来着手进行配置。

## 第二步·配置

首先，在 VScode 左侧的资源管理器中展开`.vitepress`文件夹，你会看到`config.ts` 这个文件，打开它，然后在同目录下新建一个名为`theme.d.ts`的文件。

### 配置博主信息

我们首先来配置如下图所示的博主信息。

![博主信息](/images/blog/authorinfo.png)

将下面的代码块分别复制到两份文件中，并根据你的情况`进行修改`。
:::code-group
```ts [config.ts]
    user:{
			firstName:"的博客",
			lastName:'**你的名字**',
			avatar:"/avatar/<name>.jpg", //你需要把头像的图片文件放置在public目录下的avatar文件夹里，并且为它起个名字，别忘了在这里也一块改了。
			email:"<你的邮箱地址>",
		},
    sidebar: {
			typedTextPrefix: "", //这里是自定义文本前缀，如果这里写了东西，比如“我是”，那么自定义文本就会变成“我是 xxxx”。
			typedText: ['xxx'],  //这里写你的自定义文本
			social: [
				{
					name:'Github',
					url: 'xxxx', //你的 GIthub 主页链接
					icon: `<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M32 524.18q0 155.64 89.52 279.84t232.02 173.91q5.64 0.93 9.39 0.93t6.09-1.41 3.75-2.82 1.89-4.68 0.48-4.68v-94.23q-34.68 3.75-61.89-0.48t-42.66-13.14-27.18-22.02-15.93-23.91-8.43-22.5-5.16-13.59q-8.43-14.07-25.32-25.77t-25.32-18.75-1.89-13.59q46.89-24.39 105.93 61.89 31.89 47.82 111.57 28.14 9.39-38.43 37.5-65.64Q307.61 722 255.11 661.04t-52.5-148.14q0-81.57 51.57-141.57-20.64-60.93 5.64-128.43 27.18-1.89 60.93 10.77t47.34 21.57 23.91 16.41q53.43-15 120.48-15t121.41 15q12.18-8.43 27.18-17.82t45.93-20.16 57.18-8.91q25.32 66.57 6.57 126.57 52.5 60 52.5 141.57 0 87.18-53.43 148.59t-161.25 80.16q40.32 40.32 40.32 97.5v120.93q0 0.93 0.93 2.82 0 5.64 0.48 8.43t4.23 5.64 11.25 2.82q143.43-48.75 234.84-173.91t91.41-281.73q0-97.5-37.98-186.57t-102.18-153.27-153.27-102.18T512.03 44.15 325.46 82.13 172.19 184.31t-102.18 153.27-37.98 186.57z"></path></svg>`,
				},
				{
					name:'twitter',
					url: 'xxxxx', //你的 X 账户链接，如果日后有在阿里云腾讯云等国内大厂租服务器托管网站的计划，建议删掉这一项。
					icon: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.897-.959-2.178-1.555-3.594-1.555-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.083-.205-7.702-2.159-10.126-5.134-.422.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.6 3.419-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 14-7.496 14-13.986 0-.209 0-.423-.015-.637.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"/></svg>`,
				},
                {
					name:'Bilibili',
					url: 'xxxxx', //你的B站主页链接
					icon: `<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M360.896 183.968L269.984 95.872s-14.208-17.472 9.824-37.248c24.16-19.648 25.376-10.912 33.504-5.472s135.2 130.816 135.2 130.816h-87.616z m301.952 3.264l90.912-88.096s14.208-17.472-9.824-37.248c-24.032-19.648-25.376-10.912-33.504-5.472s-135.2 130.816-135.2 130.816h87.616z m341.152 163.104c-3.264-137.984-123.168-164.192-123.168-164.192s-614.336-4.96-742.496 0C10.176 222.304 20 350.336 20 350.336s1.696 274.272-0.128 413.12c13.824 138.848 120.864 160.928 120.864 160.928s42.72 0.864 73.92 0.864c3.264 8.992 5.696 52.544 54.24 52.544 48.416 0 54.24-52.544 54.24-52.544s354.88-1.696 384.352-1.696c1.696 14.816 8.992 54.976 57.536 54.24 48.416-0.864 51.712-57.536 51.712-57.536s16.384-1.696 65.664 0c114.944-21.376 121.6-156.064 121.6-156.064s-1.568-275.872 0-413.856z m-98.912 439.232c0 21.728-17.248 39.456-38.464 39.456H167.2c-21.248 0-38.464-17.6-38.464-39.456V326.336c0-21.728 17.248-39.456 38.464-39.456h699.424c21.248 0 38.464 17.6 38.464 39.456v463.232zM202.4 457.152l205.344-39.456 15.52 77.184-203.648 39.456z m638.976 0l-205.344-39.456-15.648 77.184 203.776 39.456z m-418.08 191.392s45.152 81.312 95.264-26.336c48.416 105.088 101.824 27.904 101.824 27.904l30.336 19.776s-56.672 91.136-131.424 22.208c-63.232 68.928-129.728-21.952-129.728-21.952l33.728-21.6z"></path></svg>`
				}
			],
		},
```
```ts [theme.d.ts]
interface UserConfig {
	name?: string;
	firstName?: string;
	lastName?: string;
	email?: string;
	domain?: string;
	avatar?: string;
	darkAvatar?: string;
	describe?: string;
	ruleText?: string;
}
interface SidebarConfig {
	typedTextPrefix?: string;
	typedText?: string[];
	info?: {
		key: string;
		val: string;
	}[];
	social?: {
		name: string;
		icon: string;
		url: string;
	}[];
}
```
:::

### 配置网站主题色

这是一套暗色模式配色推荐，如果觉得不好看或者有什么需要改改的，亦或是只是想要一份浅色模式配色，把 `theme.d.ts` 里的东西复制下来拿去问问 AI ，让它帮你生成一份就好了。

:::code-group
```ts [config.ts]
    themeColor: { 
			enable: true, 
			primary: ['#8be9fd', '#bd93f9'],       // 主色：亮青与薰衣草紫（参考 Dracula 风格）
            primaryWeak: ['#50fa7b', '#ffb86c'],   // 弱主色：鲜绿与橙色，高亮提示可用
            bodyColor: '#e4e4e4',                  // 正文字体：柔和浅灰，舒适易读
            bodyBgColor: '#282a36',                // 背景色：Dracula 示例的深灰:contentReference[oaicite:1]{index=1}
            themeColor: ['#f8f8f2', '#f8f8f2'],    // 主题字体色：接近白色，保持一致性
            themeBgColor: '#44475a',               // 卡片背景：稍亮背景，用于内容容器
            themeBg2Color: '#21222c',              // 区域背景2：更暗，比如底部或侧边栏
		},
```
```ts [theme.d.ts]
interface ThemeColorConfig {
	enable?: boolean;
	primary?: string | [string, string];  //主色调
	primaryWeak?: string | [string, string];  //主色调弱
	bodyColor?: string | [string, string];  //body 字体色
	bodyBgColor?: string | [string, string];  //body 背景色
	themeColor?: string | [string, string];  //主题字体色
	themeBgColor?: string | [string, string];  //主题背景色，用于各种卡片背景色
	themeBg2Color?: string | [string, string];  //主题背景色-2，用于底部背景区域
}
```
:::

### 文章信息

有的时候你可能希望把你的某些文章置顶，那这个时候就得在你的 markdown 文件上下下功夫了。

写到这里有点犯懒，所以用ChatGPT整理了一下，嘻嘻。

当然这里最好是参照一下现有文档。

[vitepress官方文档](https://vitepress.dev/zh/guide/frontmatter) 与 [async主题文档](https://vitepress-theme-async.imalun.com/guide/page)

---

VitePress + Async 主题 frontmatter 字段总览表

|         字段        |                         类型                        |          说明          |
| :---------------: | :-----------------------------------------------: | :------------------: |
|     **title**     |                      *string*                     |         页面标题         |
| **titleTemplate** |                *string* / *boolean*               |        页面标题模板        |
|  **description**  |                      *string*                     |         页面描述         |
|      **head**     |                  *HeadConfig\[]*                  |  页面 `<head>` 额外标签配置  |
|     **layout**    |           `"doc"` / `"page"` / `"home"`           |        页面布局类型        |
|     **navbar**    |                     *boolean*                     |        是否显示导航栏       |
|    **sidebar**    |                     *boolean*                     |        是否显示侧边栏       |
|     **aside**     |                *boolean* / `"left"`               |      侧边栏位置（默认右侧）     |
|    **outline**    | *number* / `[number,number]` / `"deep"` / `false` |     大纲目录层级，默认 `2`    |
|  **lastUpdated**  |                 *boolean* / *Date*                |      是否显示最后更新时间      |
|    **editLink**   |                     *boolean*                     | 是否显示“在 GitHub 上编辑此页” |
|     **footer**    |                     *boolean*                     |        是否显示页脚        |
|   **pageClass**   |                      *string*                     |     页面自定义 CSS 类名     |
|     **search**    |                     *boolean*                     |      是否允许当前页面被搜索     |
|      **date**     |                      *string*                     |        文章发布日期        |
|     **sticky**    |                      *number*                     |      首页排序，越大越靠前      |
|     **banner**    |            *object*（带 type 和 bgurl 字段）            |       文章顶部横幅图配置      |
|     **cover**     |         *string* / *string\[]* / *object*         |   文章封面图（支持自动切换深浅模式）  |
|  **singleColumn** |                     *boolean*                     |       是否单栏显示详情页      |
|     **author**    |                      *string*                     |        文章作者名称        |
|   **categories**  |                      *string*                     |       文章分类（单个）       |
|      **tags**     |                    *string\[]*                    |       文章标签（多个）       |

---

示例 frontmatter 一览

```markdown
---
title: "我的教程页面"
titleTemplate: "我的博客 | %s"
description: "这是一篇 VitePress 教程文档"
layout: doc
navbar: true
sidebar: true
aside: left
outline: [2, 4]
lastUpdated: true
editLink: false
footer: true
pageClass: "custom-page"
search: true

date: 2025-06-20 12:00
sticky: 100
banner:
  type: img
  bgurl: /images/banner/bg.jpg
  bannerText: 欢迎来到我的博客
cover:
  - /images/cover/light.jpg
  - /images/cover/dark.jpg
singleColumn: true
author: ZhonXu
categories: VitePress
tags: ["vitepress", "async", "blog"]
---
```
