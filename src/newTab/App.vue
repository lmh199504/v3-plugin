<script setup lang="ts">
import StatusBar from '@/newTab/components/StatusBar/index.vue';
import StartMenu from '@/newTab/components/StartMenu/index.vue';
import SearchMenu from '@/newTab/components/SearchMenu/index.vue';
import { useSystemStore } from '@/newTab/store';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import gsap from 'gsap';

const systemStore = useSystemStore();
const { showStart, showSearch } = storeToRefs(systemStore);

onMounted(() => {
	// 去除开机动画
	setTimeout(() => {
		gsap.to('#power-on', {
			opacity: 0,
			duration: 1,
			onComplete: () => {
				document.querySelector('#power-on')?.remove();
			},
		});
	}, 2000);
});
</script>

<template>
	<div class="content">
		<div class="desktop"></div>
		<!-- 状态栏 -->
		<status-bar />
		<!-- 开始菜单 -->
		<start-menu v-if="showStart" />
		<!-- 搜索弹窗 -->
		<search-menu v-if="showSearch" />
	</div>
</template>

<style scoped lang="less">
.content {
	height: 100vh;
	display: flex;
	flex-direction: column;
	background-image: url(./assets/desktop_bg.jpg);
	background-repeat: no-repeat;
	background-size: cover;
	// filter: brightness(0.5);
	.desktop {
		flex: 1;
		min-height: 0;
		overflow: hidden;
	}
}
</style>
