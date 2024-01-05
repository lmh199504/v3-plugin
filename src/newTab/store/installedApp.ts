import type { INSTALL_APP_DATA } from '@/newTab/model/installedApp';
import { defineStore } from 'pinia';
import { defineAsyncComponent } from 'vue';

export const useInstallAppStore = defineStore('installedApp', {
	state: (): INSTALL_APP_DATA => ({
		appList: [
			{
				appName: '最右',
				logo: new URL('@/assets/images/zuiyou.jpg', import.meta.url).href,
				url: 'https://izuiyou.com/',
				showInDesktop: true,
			},
			{
				appName: '中集',
				logo: new URL('@/assets/images/中集.png', import.meta.url).href,
				url: 'https://cds.cimcwetrans.com/',
				showInDesktop: true,
			},
			{
				appName: '小红书',
				logo: new URL('@/assets/images/xiaohongshu.jpg', import.meta.url).href,
				url: 'https://www.xiaohongshu.com/explore',
				showInDesktop: true,
			},
			{
				appName: '设置',
				logo: new URL('@/assets/images/设置.png', import.meta.url).href,
				url: '',
				component: defineAsyncComponent(
					() => import('@/newTab/components/Setting/index.vue')
				),
				showInDesktop: false,
			},
		],
	}),
});
