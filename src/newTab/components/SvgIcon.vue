<template>
	<svg :class="svgClass" v-bind="$attrs" :style="{ color: color }">
		<use :xlink:href="iconName" rel="external nofollow" />
	</svg>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
	name: {
		type: String,
		required: true,
	},
	color: {
		type: String,
		default: '',
	},
});

const iconName = computed(() => `#icon-${props.name}`);
const svgClass = computed(() => {
	if (props.name) {
		return `svg-icon ${iconName.value}`;
	}
	return 'svg-icon';
});
</script>

<style scoped lang="less">
.svg-icon {
	width: 1em;
	height: 1em;
	fill: currentColor;
	/* vertical-align: middle; */
	vertical-align: -0.15em;
}
</style>
