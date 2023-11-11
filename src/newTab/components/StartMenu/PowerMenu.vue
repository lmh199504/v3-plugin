<template>
	<div class="power_menu" ref="dialogRef">
		<div class="menu-item" @click="handleRestart">
			<div class="menu-icon"></div>
			<div class="menu-name">重启</div>
		</div>
		<div class="menu-item" @click="handleShut">
			<div class="menu-icon"></div>
			<div class="menu-name">关机</div>
		</div>
		<div class="menu-item" @click="handleSleep">
			<div class="menu-icon"></div>
			<div class="menu-name">睡眠</div>
		</div>
	</div>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import gsap from 'gsap';

const emit = defineEmits<{
	(event: 'hide'): void;
}>();
const dialogRef = ref<HTMLDivElement>();
onMounted(() => {
	if (dialogRef.value) {
		gsap.fromTo(
			dialogRef.value,
			{ bottom: -100 },
			{ bottom: 40, duration: 0.3 }
		);
	}
});
const handleClick = (e: Event) => {
	if (!dialogRef.value?.contains(e.target as Node)) {
		emit('hide');
	}
};
onMounted(() => {
	setTimeout(() => {
		document.addEventListener('click', handleClick);
	});
});
onUnmounted(() => {
	document.removeEventListener('click', handleClick);
});
/**
 * 重启
 */
const handleRestart = () => {
	console.log('重启');
	window.location.reload();
};
/**
 * 关机
 */
const handleShut = () => {
	console.log('关机');
};
/**
 * 睡眠
 */
const handleSleep = () => {
	console.log('睡眠');
};
</script>
<style scoped lang="less">
.power_menu {
	position: absolute;
	left: 0;
	bottom: 40px;
	background: #242424;
	width: 260px;
	box-shadow: -6px 0 10px 10px #353535;
	.menu-item {
		padding: 10px 20px;
		box-sizing: border-box;
		cursor: pointer;
		&:hover {
			background-color: #393939;
		}
	}
}
</style>
