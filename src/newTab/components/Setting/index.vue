<template>
	<div>
		<div class="title">Windows 设置</div>
		<div class="input-wrapper">
			<input placeholder="查找设置" />
		</div>
		<div class="flex-wrapper" ref="refWrapper">
			<div class="flex-item" v-for="item in settingMenu" :key="item.title">
				<div class="setting-icon">
					<SvgIcon :name="item.icon" />
				</div>
				<div class="setting-info">
					<div class="setting-title">{{ item.title }}</div>
					<div class="setting-desc">{{ item.desc }}</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import SvgIcon from '../SvgIcon.vue';
import { onMounted } from 'vue';
import { onUnmounted } from 'vue';
const refWrapper = ref<HTMLDivElement>();
const settingMenu = [
	{
		title: '系统',
		desc: '显示、声音、通知、电源',
		icon: '笔记本电脑',
	},
	{
		title: '设备',
		desc: '蓝牙、打印机、鼠标',
		icon: '音响',
	},
	{
		title: '手机',
		desc: '连接Android 设备和 iphone',
		icon: '手机',
	},
	{
		title: '网络和Internet',
		desc: 'WLAN、飞行模式、VPN',
		icon: '网络',
	},
	{
		title: '个性化',
		desc: '背景、锁屏、颜色',
		icon: '笔记本',
	},
	{
		title: '应用',
		desc: '卸载、默认值',
		icon: '应用',
	},
	{
		title: '账户',
		desc: '你的帐户、电子邮件、同步设置、工作、家庭',
		icon: '账户',
	},
	{
		title: '时间和语言',
		desc: '卸载、默认值',
		icon: '时间',
	},
	{
		title: '游戏',
		desc: 'Game Bar,捕获游戏模式',
		icon: '游戏',
	},
	{
		title: '轻松使用',
		desc: '讲述人、放大镜、高对比度',
		icon: '已使用',
	},
	{
		title: '搜索',
		desc: '查找我的文件、权限',
		icon: '搜索',
	},
	{
		title: '隐私',
		desc: '位置、摄像头、麦克风',
		icon: '隐私',
	},
	{
		title: '更新和安全',
		desc: 'Windows 更新、恢复、备份',
		icon: '更新',
	},
];

const resize = () => {
	console.log(resize);
};
onMounted(() => {
	refWrapper.value?.addEventListener('resize', resize);
});
onUnmounted(() => {
	refWrapper.value?.removeEventListener('resize', resize);
});

console.log('设置');
</script>

<style scoped lang="less">
.title {
	text-align: center;
	color: #000000;
	font-size: 16px;
	margin-bottom: 20px;
}
.input-wrapper {
	display: flex;
	justify-content: center;
	input {
		border: 1px solid var(--primary-color);
		height: 35px;
		width: 300px;
		padding: 6px 10px;
		box-sizing: border-box;
		outline: none;
		&:active {
			border: 1px solid var(--primary-color);
		}
		&:focus {
			border: 1px solid var(--primary-color);
		}
		&:focus-visible {
			border: 1px solid var(--primary-color);
		}
	}
}
.flex-wrapper {
	display: flex;
	flex-wrap: wrap;
	gap: 40px;
	padding: 40px;
	.flex-item {
		display: flex;
		width: calc(100% / 3 - 40px);
		align-items: center;
	}
	.setting-icon {
		color: #0078d7;
		font-size: 30px;
		margin-right: 15px;
	}
	.setting-info {
		.setting-title {
			color: #000000;
			margin-bottom: 8px;
		}
		.setting-desc {
			color: #666666;
			font-size: 12px;
		}
	}
}
</style>
