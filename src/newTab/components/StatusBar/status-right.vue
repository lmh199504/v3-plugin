<template>
	<div class="status-right">
		<div class="icon">
			<SvgIcon name="wifi" />
		</div>
		<div class="icon">
			<SvgIcon name="音量" />
		</div>
		<div class="time">
			<div>{{ time['h:m'] }}</div>
			<div>{{ time['y-m-d'] }}</div>
		</div>
	</div>
</template>
<script setup lang="ts">
import { reactive, onUnmounted } from 'vue';
import SvgIcon from '@/newTab/components/SvgIcon.vue';

const time = reactive({
	'h:m': '00:00',
	'y-m-d': '00/00/00',
});

const timer = setInterval(() => {
	const date = new Date();
	const m = addZero(date.getMinutes());
	const h = addZero(date.getHours());
	const day = addZero(date.getDate());
	const mm = addZero(date.getMonth() + 1);
	const year = addZero(date.getFullYear());
	time['h:m'] = h + ':' + m;
	time['y-m-d'] = year + '/' + mm + '/' + day;
}, 1000);

function addZero(num: number) {
	return num > 9 ? num + '' : '0' + num;
}

onUnmounted(() => {
	clearInterval(timer);
});
</script>
<style scoped lang="less">
.status-right {
	display: flex;
	.time {
		display: flex;
		flex-direction: column;
		align-items: center;
		user-select: none;
		color: var(--white);
		font-size: 12px;
		justify-content: center;
		padding: 0 10px;
		&:hover {
			background-color: rgba(57, 77, 85, 1);
		}
	}
	.icon {
		color: var(--white);
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 0 6px;
		font-size: 16px;
		&:hover {
			background-color: rgba(57, 77, 85, 1);
		}
	}
}
</style>
