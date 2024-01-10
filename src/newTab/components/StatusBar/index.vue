<script setup lang="ts" name="status-bar">
import { storeToRefs } from 'pinia';
import { useSystemStore } from '@/newTab/store';
import StatusLeft from '@/newTab/components/StatusBar/status-left.vue';
import { CSSProperties, ComputedRef, computed } from 'vue';
import StatusCenter from './status-center.vue';
import StatusRight from './status-right.vue';

const store = useSystemStore();

const { statusBarHeight } = storeToRefs(store);

const style: ComputedRef<CSSProperties> = computed(() => {
	return {
		height: statusBarHeight.value + 'px',
	};
});
</script>
<template>
	<div class="status-bar" :style="style">
		<StatusLeft />
		<StatusCenter />
		<StatusRight />
	</div>
</template>
<style scoped lang="less">
.status-bar {
	width: 100%;
	background: #20343f;
	display: flex;
	position: relative;
	z-index: 10;
}
</style>
