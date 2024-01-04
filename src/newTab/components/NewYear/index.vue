<template>
	<div v-if="text" class="cut-down">
		<div class="text">新年倒计时</div>
		<div class="text">{{ text }}</div>
	</div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const newYearTime = new Date('2024-02-10 00:00:00');

const text = ref<string>();

function formatMilliseconds(milliseconds: number) {
	var seconds: string | number = milliseconds / 1000;
	var minutes: string | number = seconds / 60;
	var hours: string | number = minutes / 60;
	var days: string | number = hours / 24;

	seconds = Math.floor(seconds % 60);
	minutes = Math.floor(minutes % 60);
	hours = Math.floor(hours % 24);
	days = Math.floor(days);

	// 如果秒、分钟、小时或天是0，则显示为单个数字，否则显示为两位数字
	seconds = (seconds < 10 ? '0' : '') + seconds;
	minutes = (minutes < 10 ? '0' : '') + minutes;
	hours = (hours < 10 ? '0' : '') + hours;
	days = (days < 10 ? '0' : '') + days;

	return days + '天 ' + hours + '时 ' + minutes + '分 ' + seconds + '秒';
}

const setText = () => {
	const start = Date.now();
	const end = newYearTime.getTime();

	const diff = end - start;
	if (diff < 0) {
		text.value = '';
	} else {
		text.value = formatMilliseconds(diff) + '';
	}
};

setInterval(() => {
	setText();
}, 1000);
</script>
<style scoped lang="less">
.cut-down {
	position: absolute;
	left: 0%;
	top: 0%;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	user-select: none;
}
.text {
	color: #fff;
	text-shadow: #000 4px 4px 4px;
	font-size: 40px;
	text-align: center;
}
</style>
