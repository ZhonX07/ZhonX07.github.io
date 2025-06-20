interface UserConfig {
	name?: string;
	lastName?: string;
	email?: string;
	domain?: string;
	avatar?: string;
	darkAvatar?: string;
	describe?: string;
	ruleText?: string;
}

interface NotFoundConfig {
	title?: string;
	text?: string;
	path?: string;
	name?: string;
}/**
 * 主题色配置
 */
interface ThemeColorConfig {
	/**
	 * 开启自定义主题色
	 */
	enable?: boolean;
	/**
	 * 主色调
	 */
	primary?: string | [string, string];
	/**
	 * 主色调弱
	 */
	primaryWeak?: string | [string, string];
	/**
	 * body 字体色
	 */
	bodyColor?: string | [string, string];
	/**
	 * body 背景色
	 */
	bodyBgColor?: string | [string, string];
	/**
	 * 主题字体色，
	 */
	themeColor?: string | [string, string];
	/**
	 * 主题背景色，用于各种卡片背景色
	 */
	themeBgColor?: string | [string, string];
	/**
	 * 主题背景色-2，用于底部背景区域
	 */
	themeBg2Color?: string | [string, string];
}/**
 * 固定按钮显示配置 || Fixed button config on the right
 */
interface FixedBtnConfig {
	/**
	 * 阅读模式按钮
	 */
	readmode?: boolean;
	/**
	 * 单双栏切换按钮
	 */
	aside?: boolean;
}/**
 * 页面分页配置 || [index | archives | categorys | tags] page sort paging config
 */
interface IndexGeneratorConfig {
	/**
	 * 分页大小
	 */
	perPage?: number;
	/**
	 * 排序方式
	 */
	orderBy?: string;
	/**
	 * 分页是否生成静态文件
	 */
	static?: boolean;
}/**
 * 关于页 || About page config
 */
interface AboutPageConfig {
	/**
	 * 标题
	 */
	title?: string;
	/**
	 * 个人简单描述
	 */
	introduction?: string;
	/**
	 * 博客信息
	 */
	blog?: string;
	/**
	 * 隐私权说明
	 */
	privacy?: string;
}
/**
 * 首页中显示的分类卡片
 */
interface CategorieCardConfig {
	/**
	 * 是否启用
	 */
	enable?: boolean;
	/**
	 * 需要显示分类数量，默认为 2 个
	 */
	len?: number;
	/**
	 * 固定显示分类
	 */
	list?: string[];
}
/**
 * 网站图标配置 || Configure the icon information of the blog
 */
interface FaviconConfig {
	/**
	 * logo
	 */
	logo?: string;
	/**
	 *  dark 下使用
	 */
	darkLogo?: string;
	/**
	 * 网站图标
	 */
	icon16?: string;
	/**
	 * 网站图标
	 */
	icon32?: string;
	/**
	 * iOS 添加到主屏幕使用图标
	 */
	appleTouchIcon?: string;
	/**
	 * 网站清单配置
	 */
	webmanifest?: string;
	/**
	 * 是否监听选项卡可见事件
	 */
	visibilitychange?: boolean;
	/**
	 * 选项卡不可见时显示角标
	 */
	hidden?: string;
	showText?: string;
	hideText?: string;
}
/**
 * 过期提取 || notice outdate
 */
interface NoticeOutdateConfig {
	/**
	 * 是否启用
	 */
	enable?: boolean;
	/**
	 * 样式
	 */
	style?: 'simple' | 'flat';
	/**
	 * 距离今天多少天时显示
	 */
	limitDay?: number;
	/**
	 * 显示在文章中位置
	 */
	position?: 'top' | 'bottom';
}
/**
 * 横幅配置 || Layout banner config
 */
interface BannerConfig {
	/**
	 * 横幅类型
	 */
	type?: 'img' | 'video';
	/**
	 * 横幅资源路径地址
	 */
	bgurl?: string;
	/**
	 * 横幅标题
	 */
	bannerTitle?: string;
	/**
	 * 横幅描述
	 */
	bannerText?: string;
	/**
	 * 同 CSS object-position
	 */
	position?: string;
	/**
	 * 同 CSS object-fit
	 */
	fit?: string;
}
/**
 * 侧栏配置 || Layout sidebar config
 */
interface SidebarConfig {
	/**
	 * 打字动画固定前缀
	 */
	typedTextPrefix?: string;
	/**
	 * 打字动画切换文案
	 */
	typedText?: string[];
	/**
	 * 个人信息
	 */
	info?: {
		key: string;
		val: string;
	}[];
	/**
	 * 社交地址图标链接
	 */
	social?: {
		/**
		 * 名称
		 */
		name: string;
		/**
		 * svg  eg: icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M356.9 64.3H280l-56 88.6-48-88.6H0L224 448 448 64.3h-91.1zm-301.2 32h53.8L224 294.5 338.4 96.3h53.8L224 384.5 55.7 96.3z"/></svg>`
		 */
		icon: string;
		/**
		 * 链接
		 */
		url: string;
	}[];
}