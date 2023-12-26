<template>
	<div
		class="application"
		@contextmenu="handleContextMenu"
		@dblclick="handleDBClick"
	>
		<div class="logo">
			<img src="@/assets/images/zuiyou.jpg" alt="" />
		</div>
		<div class="name">最右</div>
	</div>
</template>

<script setup lang="ts">
import { useAppStore } from '@/newTab/store';
const appStore = useAppStore();
const emit = defineEmits<{ (event: 'menu', e: MouseEvent): void }>();
const handleContextMenu = (e: MouseEvent) => {
	e.stopPropagation();
	e.preventDefault();
	emit('menu', e);
};
const handleDBClick = () => {
	appStore.openApp({
		appName: '最右',
		url: 'https://izuiyou.com/',
	});
};
</script>
<style scoped lang="less">
.application {
	display: flex;
	flex-direction: column;
	cursor: pointer;
	.logo {
		width: 40px;
		height: 40px;
		margin-bottom: 4px;
		img {
			height: 100%;
			width: 100%;
			border-radius: 8px;
		}
	}
	.name {
		text-align: center;
		font-size: 12px;
		color: #fff;
		text-shadow: #000 4px 4px 4px;
	}
}
</style>
