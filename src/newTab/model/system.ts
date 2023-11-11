export interface ISystem {
	/**
	 * 显示开始菜单
	 */
	showStart: boolean;
	/**
	 * 状态栏高度
	 */
	statusBarHeight: number;
	/**
	 * 显示搜索框
	 */
	showSearch: boolean;
	/**
	 * 背景图
	 */
	bgImg: string;
}

export type StatusMenuKey = keyof Pick<ISystem, 'showSearch' | 'showStart'>;
