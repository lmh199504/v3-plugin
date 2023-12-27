<template>
	<div class="shot-app" :title="appItem.appName" @click="handleClick">
		<div class="logo">
			<img :src="appItem.logo" alt="" />
		</div>
	</div>
</template>
<script setup lang="ts">
import { useAppStore } from '@/newTab/store';
import { useSystemStore } from '@/newTab/store';

const systemStore = useSystemStore();
const appStore = useAppStore();
const props = defineProps({
	appItem: {
		type: Object,
		required: true,
	},
});

const handleClick = () => {
	appStore.updateAppData(props.appItem.id, {
		index: systemStore.zIndex + 1,
	});
	systemStore.zIndex = systemStore.zIndex + 1;
};
</script>
<style scoped lang="less">
.shot-app {
	width: 40px;
	border-bottom: 2px solid #76b9ed;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
	cursor: pointer;
	box-sizing: border-box;
	margin-right: 2px;
	&:hover {
		background: rgba(57, 77, 85, 1);
	}
	.logo {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		img {
			width: 30px;
			height: 30px;
			border-radius: 4px;
		}
	}
}
</style>
