export interface INSTALL_APP {
	appName: string;
	url?: string;
	logo: string;
}

export interface INSTALL_APP_DATA {
	appList: INSTALL_APP[];
}
