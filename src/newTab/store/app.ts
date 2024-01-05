import type { APPITEM, IAPP_DATA } from '@/newTab/model/app';
import { defineStore } from 'pinia';
import { useSystemStore } from './system';

export const useAppStore = defineStore('appOpen', {
	state: (): IAPP_DATA => ({
		appList: [],
	}),
	actions: {
		openApp(app: Pick<APPITEM, 'appName' | 'url' | 'logo' | 'component'>) {
			const systemStore = useSystemStore();

			this.appList.push({
				...app,
				index: systemStore.zIndex + 1,
				show: true,
				height: 600,
				width: 800,
				full: false,
				id: Date.now() + '',
			});
			systemStore.zIndex = systemStore.zIndex + 1;
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
		closeApp(id: string) {
			const index = this.appList.findIndex(item => item.id == id);
			if (index != -1) {
				this.appList.splice(index, 1);
			}
		},
		updateAppData(id: string, upVal: Partial<APPITEM>) {
			const index = this.appList.findIndex(item => item.id == id);
			if (index != -1) {
				this.appList[index] = {
					...this.appList[index],
					...upVal,
				};
			}
		},
	},
});
