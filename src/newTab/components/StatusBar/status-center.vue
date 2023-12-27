<template>
	<div class="status-center">
		<ShotApp v-for="item in appList" :key="item.id" :app-item="item" />
	</div>
</template>
<script setup lang="ts">
import { useAppStore } from '@/newTab/store';
import { storeToRefs } from 'pinia';
const appStore = useAppStore();
import ShotApp from './shotApp.vue';

const { appList } = storeToRefs(appStore);
</script>
<style scoped lang="less">
.status-center {
	height: 100%;
	display: flex;
}
</style>
