<script setup lang="ts">
import { useSystemStore } from '@/newTab/store';
import SvgIcon from '@/newTab/components/SvgIcon.vue';
const store = useSystemStore();
const handleClickStart = () => {
	store.toggleKey('showStart');
};
const handleClickSearch = () => {
	store.toggleKey('showSearch');
};
</script>
<template>
	<div class="status-left">
		<div class="icon window-icon" title="开始" @click="handleClickStart">
			<SvgIcon name="Windows" />
		</div>
		<div class="icon" title="搜索" @click="handleClickSearch">
			<SvgIcon name="sousuo" />
		</div>
		<div class="icon" title="任务视图">
			<SvgIcon name="task" />
		</div>
	</div>
</template>
<style scoped lang="less">
.status-left {
	display: flex;
	align-items: center;
	.icon {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 20px;
		width: 48px;
		height: 100%;
		cursor: pointer;
		color: var(--white);
		&:hover {
			background-color: rgba(57, 77, 85, 1);
		}
	}
	.window-icon {
		&:hover {
			color: var(--primary-color);
		}
	}
}
</style>
