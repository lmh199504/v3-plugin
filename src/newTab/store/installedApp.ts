import type { INSTALL_APP_DATA } from '@/newTab/model/installedApp';
import { defineStore } from 'pinia';

export const useInstallAppStore = defineStore('installedApp', {
	state: (): INSTALL_APP_DATA => ({
		appList: [
			{
				appName: '最右',
				logo: new URL('@/assets/images/zuiyou.jpg', import.meta.url).href,
				url: 'https://izuiyou.com/',
			},
			{
				appName: '中集',
				logo: new URL('@/assets/images/中集.png', import.meta.url).href,
				url: 'https://cds.cimcwetrans.com/',
			},
			{
				appName: '百度',
				logo: new URL('@/assets/images/百度.png', import.meta.url).href,
				url: 'https://baidu.com',
			},
		],
	}),
});
