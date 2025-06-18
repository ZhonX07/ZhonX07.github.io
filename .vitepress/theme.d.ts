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