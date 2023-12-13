<template>
	<div class="desktop" @contextmenu="onContextMenu">
		<AppList />
		<ContextMenu v-model:visible="visible" :position="position" />
	</div>
</template>

<script setup lang="ts">
import AppList from '@/newTab/components/Application/app-list.vue';
import ContextMenu from '@/newTab/components/ContextMenu/index.vue';
import { reactive, ref } from 'vue';
const visible = ref(false);
const position = reactive({
	x: 0,
	y: 0,
});

const onContextMenu = (e: MouseEvent) => {
	console.log(e);
	e.preventDefault();
	e.stopPropagation();
	visible.value = true;
	position.x = e.x;
	position.y = e.y;
};
</script>
<style scoped lang="less">
.desktop {
	flex: 1;
}
</style>
