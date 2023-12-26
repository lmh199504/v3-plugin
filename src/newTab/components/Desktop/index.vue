<template>
	<div class="desktop" @contextmenu="onContextMenu">
		<AppList @menu="onContextMenu" />
		<ContextMenu v-model:visible="visible" :position="position" />

		<LoadApp v-for="item in appList" :key="item.appName" :app-item="item" />
	</div>
</template>

<script setup lang="ts">
import AppList from '@/newTab/components/Application/app-list.vue';
import ContextMenu from '@/newTab/components/ContextMenu/index.vue';
import LoadApp from '@/newTab/components/LoadApp/index.vue';
import { reactive, ref } from 'vue';
import { useAppStore } from '@/newTab/store';
import { storeToRefs } from 'pinia';
const visible = ref(false);
const position = reactive({
	x: 0,
	y: 0,
});
const appStore = useAppStore();
const { appList } = storeToRefs(appStore);
const onContextMenu = (e: MouseEvent) => {
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
