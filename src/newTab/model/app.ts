export interface APPITEM {
	appName: string;
	url?: string;
	index: number;
	show: boolean;
	width: number;
	height: number;
	full: boolean;
	id: string;
}

export interface IAPP_DATA {
	appList: APPITEM[];
	maxZIndex: number;
}
