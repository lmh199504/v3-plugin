<template>
	<div class="search-wrapper" ref="dialogRef" :style="style"></div>
</template>
<script setup lang="ts">
import useStatusMenuVisible from '@/newTab/hooks/useStatusMenuVisible';

const { style, dialogRef } = useStatusMenuVisible('showSearch');
</script>
<style scoped lang="less">
.search-wrapper {
	position: fixed;
	left: 48px;
	min-height: 40vh;
	background-color: var(--start-menu-bg);
	min-width: 700px;
	z-index: 9;
	height: 500px;
}
</style>
