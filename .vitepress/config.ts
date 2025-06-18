import { defineConfig } from 'vitepress-theme-async/config';

export default defineConfig({
	srcDir: './',
	themeConfig: {
		noticeOutdate: { 
			enable: true,
			style: 'flat',
			limitDay: 120,
			position: 'top',
		},
		banner: {
			type: 'img',
			bgurl: '/images/blog/GP.pnG',
			bannerTitle: '欢迎来到我的博客',
			bannerText: '以毫不动摇的意志！光啊！',
			position: 'center',
			fit: 'cover',
		},
		sidebar: {
			typedTextPrefix: "",
			typedText: ['アリスの誕生日は、みんなに出会えた今日です。先生と初めて会った、まさにその日です。'], 
			social: [
				{
					name: 'vue',
					url: 'https://cn.vuejs.org/',
					icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M356.9 64.3H280l-56 88.6-48-88.6H0L224 448 448 64.3h-91.1zm-301.2 32h53.8L224 294.5 338.4 96.3h53.8L224 384.5 55.7 96.3z"/></svg>`,
				},
				{
					name:'Github',
					url: 'https://github.com/ZhonX07',
					icon: `<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M32 524.18q0 155.64 89.52 279.84t232.02 173.91q5.64 0.93 9.39 0.93t6.09-1.41 3.75-2.82 1.89-4.68 0.48-4.68v-94.23q-34.68 3.75-61.89-0.48t-42.66-13.14-27.18-22.02-15.93-23.91-8.43-22.5-5.16-13.59q-8.43-14.07-25.32-25.77t-25.32-18.75-1.89-13.59q46.89-24.39 105.93 61.89 31.89 47.82 111.57 28.14 9.39-38.43 37.5-65.64Q307.61 722 255.11 661.04t-52.5-148.14q0-81.57 51.57-141.57-20.64-60.93 5.64-128.43 27.18-1.89 60.93 10.77t47.34 21.57 23.91 16.41q53.43-15 120.48-15t121.41 15q12.18-8.43 27.18-17.82t45.93-20.16 57.18-8.91q25.32 66.57 6.57 126.57 52.5 60 52.5 141.57 0 87.18-53.43 148.59t-161.25 80.16q40.32 40.32 40.32 97.5v120.93q0 0.93 0.93 2.82 0 5.64 0.48 8.43t4.23 5.64 11.25 2.82q143.43-48.75 234.84-173.91t91.41-281.73q0-97.5-37.98-186.57t-102.18-153.27-153.27-102.18T512.03 44.15 325.46 82.13 172.19 184.31t-102.18 153.27-37.98 186.57z"></path></svg>`,
				},
				{
					name:'twitter',
					url: 'https://twitter.com/ZhonXuForCS',
					icon: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.897-.959-2.178-1.555-3.594-1.555-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.083-.205-7.702-2.159-10.126-5.134-.422.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.6 3.419-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 14-7.496 14-13.986 0-.209 0-.423-.015-.637.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"/></svg>
`,
				}
			],
		},
		user:{
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
			aside: true,
		},
		outline: {
			level: [2, 6],
		},
		favicon: {
			logo: '/favicon.svg',
			icon16: '/favicon.svg',
			icon32: '/favicon.svg',
			visibilitychange: true,
		},
	},
});
