<template>
	<div class="menu-wrapper" v-if="visibleMenu" :style="style" ref="menuRef">
		<div class="menu-item">刷新</div>
	</div>
	<div class="mask" v-if="visibleMenu" @click="hideMenu"></div>
</template>
<script setup lang="ts">
import gsap from 'gsap';
import { computed, watchEffect, ref } from 'vue';
interface Props {
	visible: false;
	position: {
		x: number;
		y: number;
	};
}
const menuRef = ref(null);
const style = computed(() => {
	return {
		left: props.position.x + 'px',
		top: props.position.y + 'px',
	};
});

const emit = defineEmits<{
	(e: 'update:visible', value: boolean): void;
}>();
const props = withDefaults(defineProps<Props>(), {
	visible: false,
});

watchEffect(() => {
	gsap.fromTo(
		menuRef.value,
		{
			left: props.position.x + 'px',
			top: props.position.y + 'px',
			opacity: 0.5,
		},
		{
			left: props.position.x + 'px',
			top: props.position.y + 'px',
			opacity: 1,
		}
	);
});

const visibleMenu = computed({
	get() {
		return props.visible;
	},
	set(val) {
		emit('update:visible', val);
	},
});
const hideMenu = () => {
	visibleMenu.value = false;
};
</script>
<style scoped lang="less">
.menu-wrapper {
	position: fixed;
	left: 0;
	top: 0;
	z-index: 100;
	background: #eeeeee;
	width: 200px;
	padding: 10px;
	border-radius: 8px;
	user-select: none;
}
.mask {
	position: fixed;
	left: 0;
	top: 0;
	z-index: 99;
	width: 100%;
	height: 100%;
}
</style>
