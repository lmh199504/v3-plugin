import type { APPITEM, IAPP_DATA } from '@/newTab/model/app';
import { defineStore } from 'pinia';

export const useAppStore = defineStore('appOpen', {
	state: (): IAPP_DATA => ({
		appList: [],
		maxZIndex: 1000,
	}),
	actions: {
		openApp(app: Pick<APPITEM, 'appName' | 'url'>) {
			this.appList.push({
				...app,
				index: this.maxZIndex + 1,
				show: true,
				height: 600,
				width: 800,
				full: false,
				id: Date.now() + '',
			});
			this.maxZIndex = this.maxZIndex + 1;
		},
		hideApp(id: string) {
			const index = this.appList.findIndex(item => item.id == id);
			if (index != -1) {
				this.appList[index].show = !this.appList[index].show;
			}
		},
		fullApp(id: string) {
			const index = this.appList.findIndex(item => item.id == id);
			if (index != -1) {
				this.appList[index].full = !this.appList[index].full;
			}
		},
	},
});
