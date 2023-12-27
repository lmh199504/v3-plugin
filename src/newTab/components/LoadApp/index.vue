<template>
	<div class="app-wrapper" :style="styles" @mousedown="onMouseDown" ref="app">
		<div class="app-area">
			<div class="app-head" draggable="false">
				<div class="left">
					<div class="app-name">{{ props.appItem.appName }}</div>
				</div>
				<div class="right">
					<div class="menu app-hide" @click="hideApp">
						<SvgIcon name="minimize" />
					</div>
					<div v-if="!appItem.full" class="menu app-full" @click="full">
						<SvgIcon name="full-screen" />
					</div>
					<div v-else class="menu app-full" @click="unFull">
						<SvgIcon name="un-full" />
					</div>
					<div class="menu app-close" @click="closeApp">
						<SvgIcon name="close" />
					</div>
				</div>
			</div>
			<div class="app-content">
				<iframe :src="props.appItem.url"></iframe>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, nextTick } from 'vue';
import type { APPITEM } from '@/newTab/model/app';
import SvgIcon from '@/newTab/components/SvgIcon.vue';
import { useAppStore } from '@/newTab/store';
const app = ref<HTMLDivElement>();
const props = withDefaults(
	defineProps<{
		appItem: APPITEM;
	}>(),
	{
		appItem: () => ({
			appName: '',
			index: 1,
			show: false,
			height: 0,
			width: 0,
			full: false,
			id: '',
		}),
	}
);
const appStore = useAppStore();
const styles = computed(() => {
	if (props.appItem.full) {
		return {
			'z-index': props.appItem.index,
			display: props.appItem.show ? 'block' : 'none',
			width: '100%',
			height: '100%',
			left: 0,
			top: 0,
		};
	} else {
		return {
			'z-index': props.appItem.index,
			display: props.appItem.show ? 'block' : 'none',
		};
	}
});

const onMouseDown = (e: MouseEvent) => {
	const el = app.value;
	if (!el) {
		return;
	}
	const rect = el.getBoundingClientRect();
	const start = {
		x: e.clientX,
		y: e.clientY,
	};
	const end = {
		x: e.clientX,
		y: e.clientY,
	};

	const handleMove = (e: MouseEvent) => {
		// console.log(e);
		end.x = e.clientX;
		end.y = e.clientY;

		const diff = {
			x: end.x - start.x,
			y: end.y - start.y,
		};
		el.style.left = rect.left + diff.x + 'px';
		el.style.top = rect.top + diff.y + 'px';
		if (end.y <= 0) {
			el.style.top = 0 + 'px';
		}
	};

	const handleUp = (e: MouseEvent) => {
		end.x = e.clientX;
		end.y = e.clientY;

		if (end.y <= 0) {
			el.style.top = 0 + 'px';
		}

		document.removeEventListener('mousemove', handleMove);
		document.removeEventListener('mouseup', handleUp);
	};
	document.addEventListener('mousemove', handleMove);
	document.addEventListener('mouseup', handleUp);
};

const centerApp = () => {
	const el = app.value;
	if (!el) {
		return;
	}
	const rect = el.getBoundingClientRect();
	const winW = window.innerWidth;
	const winH = window.innerHeight;
	el.style.left = winW / 2 - rect.width / 2 + 'px';
	el.style.top = winH / 2 - rect.height / 2 + 'px';
};
onMounted(() => {
	centerApp();
});
const hideApp = () => {
	appStore.hideApp(props.appItem.id);
};
const full = () => {
	appStore.fullApp(props.appItem.id);
};
const unFull = () => {
	appStore.fullApp(props.appItem.id);
	nextTick(() => {
		centerApp();
	});
};
const closeApp = () => {
	appStore.closeApp(props.appItem.id);
};
</script>

<style scoped lang="less">
.app-wrapper {
	position: absolute;
	width: 800px;
	height: 600px;
	background-color: #fff;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	border-radius: 8px;
	.app-area {
		display: flex;
		flex-direction: column;
		height: 100%;
	}
	.app-head {
		user-select: none;
		display: flex;
		justify-content: space-between;
		padding: 12px;
		cursor: move;
		.right {
			display: flex;
			gap: 4px;
			cursor: pointer;
			.menu {
				color: #a1a1a1;
				font-size: 16px;
				&:hover {
					color: #149eff;
				}
			}
		}
	}
	.app-content {
		flex: 1;
		iframe {
			height: 100%;
			width: 100%;
			border: none;
		}
	}
}
</style>
