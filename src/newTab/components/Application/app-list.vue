<template>
	<div class="application-list">
		<Application />
	</div>
</template>
<script setup lang="ts">
import Application from './app-item.vue';
</script>
<style scoped lang="less">
.application-list {
	display: flex;
	flex-wrap: wrap;
}
</style>
