import type { ISystem, StatusMenuKey } from '@/newTab/model/system';
import { defineStore } from 'pinia';

export const useSystemStore = defineStore('system', {
	state: (): ISystem => ({
		showStart: false,
		statusBarHeight: 40,
		showSearch: false,
		bgImg: '',
	}),
	actions: {
		setWindowStart(visible: boolean) {
			this.showStart = visible;
		},
		toggleWindowStart() {
			this.showStart = !this.showStart;
		},
		toggleKey(key: StatusMenuKey) {
			this[key] = !this[key];
		},
		hideKey(key: StatusMenuKey) {
			this[key] = false;
		},
	},
});
