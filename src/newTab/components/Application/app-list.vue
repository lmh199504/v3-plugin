<template>
	<div class="application-list">
		<Application
			@menu="handleMenu"
			v-for="item in appList"
			:key="item.appName"
			:app-item="item"
		/>
	</div>
</template>
<script setup lang="ts">
import { useInstallAppStore } from '@/newTab/store';
import Application from './app-item.vue';
import { storeToRefs } from 'pinia';

const installAppStore = useInstallAppStore();

const { appList } = storeToRefs(installAppStore);
const emit = defineEmits<{ (event: 'menu', e: MouseEvent): void }>();
const handleMenu = (e: MouseEvent) => {
	emit('menu', e);
};
</script>
<style scoped lang="less">
.application-list {
	display: flex;
	flex-wrap: wrap;
	padding: 15px;
	gap: 20px;
	flex-direction: column;
}
</style>
