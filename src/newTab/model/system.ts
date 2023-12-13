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
	/**
	 * 当前最大的 z-index
	 */
	zIndex: number;
}

export type StatusMenuKey = keyof Pick<ISystem, 'showSearch' | 'showStart'>;
