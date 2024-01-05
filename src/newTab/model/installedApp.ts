export interface INSTALL_APP {
	/**
	 * 应用名称
	 */
	appName: string;
	/**
	 * 地址
	 */
	url?: string;
	/**
	 * 图标
	 */
	logo: string;
	/**
	 * 组件
	 */
	component?: any;
	/**
	 * 是否在桌面显示
	 */
	showInDesktop: boolean;
	/**
	 * 仅可打开一个
	 */
	onlyOne: boolean;
}

export interface INSTALL_APP_DATA {
	appList: INSTALL_APP[];
}
