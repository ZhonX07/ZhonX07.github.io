import { defineConfig } from 'vitepress-theme-async/config';

export default defineConfig({
	
	lang:'zh-Hans',
  	appearance: 'force-dark',
	srcDir: './',
	themeConfig: {
		noticeOutdate: { 
			enable: true,
			style: 'flat',
			limitDay: 120,
			position: 'top',
		},
		globalComponents: ['TrmCardCategorie'],
		title:"ZhonXu 的小站",
		banner: {
			type: 'img',
			bgurl: '/images/banner/bannertwo.jpg',
			bannerTitle: '欢迎来到我的博客',
			bannerText: '以毫不动摇的意志！光啊！',
			position: 'center',
			fit: 'cover',
		},
		sidebar: {
			typedTextPrefix: "",
			typedText: ['以毫不动摇的意志，光啊！'], 
			social: [
				{
					name:'Github',
					url: 'https://github.com/ZhonX07',
					icon: `<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>ZhonXu 的 Github 账号</title><path d="M32 524.18q0 155.64 89.52 279.84t232.02 173.91q5.64 0.93 9.39 0.93t6.09-1.41 3.75-2.82 1.89-4.68 0.48-4.68v-94.23q-34.68 3.75-61.89-0.48t-42.66-13.14-27.18-22.02-15.93-23.91-8.43-22.5-5.16-13.59q-8.43-14.07-25.32-25.77t-25.32-18.75-1.89-13.59q46.89-24.39 105.93 61.89 31.89 47.82 111.57 28.14 9.39-38.43 37.5-65.64Q307.61 722 255.11 661.04t-52.5-148.14q0-81.57 51.57-141.57-20.64-60.93 5.64-128.43 27.18-1.89 60.93 10.77t47.34 21.57 23.91 16.41q53.43-15 120.48-15t121.41 15q12.18-8.43 27.18-17.82t45.93-20.16 57.18-8.91q25.32 66.57 6.57 126.57 52.5 60 52.5 141.57 0 87.18-53.43 148.59t-161.25 80.16q40.32 40.32 40.32 97.5v120.93q0 0.93 0.93 2.82 0 5.64 0.48 8.43t4.23 5.64 11.25 2.82q143.43-48.75 234.84-173.91t91.41-281.73q0-97.5-37.98-186.57t-102.18-153.27-153.27-102.18T512.03 44.15 325.46 82.13 172.19 184.31t-102.18 153.27-37.98 186.57z"></path></svg>`,
				},
				{
					name:'twitter',
					url: 'https://twitter.com/ZhonXuForCS',
					icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" version="1.1"><title>ZhonXu 的 X 账号</title><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/> </svg>`,
				},{
					name:'Bilibili',
					url: 'https://space.bilibili.com/651182298',
					icon: `<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>ZhonXu 的 Bilibili 账号</title><path d="M360.896 183.968L269.984 95.872s-14.208-17.472 9.824-37.248c24.16-19.648 25.376-10.912 33.504-5.472s135.2 130.816 135.2 130.816h-87.616z m301.952 3.264l90.912-88.096s14.208-17.472-9.824-37.248c-24.032-19.648-25.376-10.912-33.504-5.472s-135.2 130.816-135.2 130.816h87.616z m341.152 163.104c-3.264-137.984-123.168-164.192-123.168-164.192s-614.336-4.96-742.496 0C10.176 222.304 20 350.336 20 350.336s1.696 274.272-0.128 413.12c13.824 138.848 120.864 160.928 120.864 160.928s42.72 0.864 73.92 0.864c3.264 8.992 5.696 52.544 54.24 52.544 48.416 0 54.24-52.544 54.24-52.544s354.88-1.696 384.352-1.696c1.696 14.816 8.992 54.976 57.536 54.24 48.416-0.864 51.712-57.536 51.712-57.536s16.384-1.696 65.664 0c114.944-21.376 121.6-156.064 121.6-156.064s-1.568-275.872 0-413.856z m-98.912 439.232c0 21.728-17.248 39.456-38.464 39.456H167.2c-21.248 0-38.464-17.6-38.464-39.456V326.336c0-21.728 17.248-39.456 38.464-39.456h699.424c21.248 0 38.464 17.6 38.464 39.456v463.232zM202.4 457.152l205.344-39.456 15.52 77.184-203.648 39.456z m638.976 0l-205.344-39.456-15.648 77.184 203.776 39.456z m-418.08 191.392s45.152 81.312 95.264-26.336c48.416 105.088 101.824 27.904 101.824 27.904l30.336 19.776s-56.672 91.136-131.424 22.208c-63.232 68.928-129.728-21.952-129.728-21.952l33.728-21.6z"></path></svg>`
				},{
					name:'telegram',
					url:'https://baidu.com',
					icon:`<svg width="24px" height="24px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><title>ZhonXu 的 Telegram Group</title><path d="M23.91 3.79L20.3 20.84c-.25 1.21-.98 1.5-2 .94l-5.5-4.07-2.66 2.57c-.3.3-.55.56-1.1.56-.72 0-.6-.27-.84-.95L6.3 13.7l-5.45-1.7c-1.18-.35-1.19-1.16.26-1.75l21.26-8.2c.97-.43 1.9.24 1.53 1.73z"/></svg>`
				}
			],
		},
		categorieCard: {  
			enable: true,
			list: ["vitepress建站"],
			len:3,
		},

		user:{
			firstName:"的小站",
			lastName:'ZhonX07',
			avatar:"/avatar/ZhonX07.jpg",
			name: 'ZhonX07',
			email:"Creeper000011901@outlook.com",
		},
		notFound:{
			title: '你进错屋子了，蠢货！',
			text: '大斯莫克！是我，卡尔！冷静，冷静!',
			name:"回到安全屋"
		},
		topBars: [
			{ title: 'Home', url: '/' },
			{ title: 'About', url: '/about' },
		],
		
		links: [
			{
				name: 'Vitepress',
				url: 'https://vitepress.dev',
				image: 'https://vitepress.dev/vitepress-logo-mini.svg',
				desc: 'VitePress is a Static Site Generator (SSG) designed for building fast, content-centric websites',
			},
			{
				name: '白云苍狗',
				url: 'https://www.imalun.com/',
				image: 'https://www.imalun.com/images/avatar.jpg',
				desc: '醒，亦在人间；梦，亦在人间',
			},
		],
		rightside: {
			readmode: true,
			aside: false,
		},
		themeColor: { 
			enable: true, 
			primary: ['#a8e2e1', '#65a7d5'], // 爱丽丝淡蓝
			primaryWeak: ['#73bce6', '#a3d1f0'], // hover 较柔和蓝
			bodyColor: ['#e6f0fa', '#d0dce9'], // 明亮字体色
			bodyBgColor: ['#121821', '#1a202b'], // 深色科技蓝背景
			themeColor: ['#ffe4f0', '#ffccdd'], // 爱丽丝粉点缀
			themeBgColor: ['#1f2633', '#2a303f'], // 卡片背景
			themeBg2Color: ['#191f2b', '#202735'], // 底部背景
		},about: {  
			title: "勇士啊，光芒与你同在。",  
			introduction: "高三学生一名，平常会写点基于 `py` 和 `electron` 的小程序 ，偶尔会写点 Koishi 聊天机器人框架的插件", 
			blog: `<ul class="trm-list"> <li>程序：Vitepress </li> <li>主题：vitepress-theme-async </li> </ul>`, 
			privacy: "一个部署在 Github Pages 上的静态网页，你觉得它会收集什么隐私信息？", 
		}, 
		indexGenerator: {
			perPage: 6, 
		},
		outline: {
			level: [2, 6],
		},
		favicon: {
			logo: '/favicon.ico',
			icon16: '/favicon.ico',
			icon32: '/favicon.ico',
			visibilitychange: true,
		},
	},
});
