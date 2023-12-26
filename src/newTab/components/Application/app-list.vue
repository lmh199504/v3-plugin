<template>
	<div class="application-list">
		<Application @menu="handleMenu" />
	</div>
</template>
<script setup lang="ts">
import Application from './app-item.vue';
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
}
</style>
