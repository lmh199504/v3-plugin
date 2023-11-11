<template>
	<div class="start-menu" :style="style" ref="dialogRef">
		<div class="system-menu">
			<div class="top-menu">
				<div class="menu-item">
					<div class="menu-icon">
						<svg-icon name="menu" />
					</div>
					<div class="menu-name">开始</div>
				</div>
			</div>
			<div class="bottom-menu">
				<div class="menu-item">
					<div class="menu-icon">
						<svg-icon name="user" />
					</div>
					<div class="menu-name">{{ userStore.name }}</div>
				</div>
				<div class="menu-item">
					<div class="menu-icon">
						<svg-icon name="doc" />
					</div>
					<div class="menu-name">{{ $t('system.menu.文档') }}</div>
				</div>
				<div class="menu-item">
					<div class="menu-icon">
						<svg-icon name="picture" />
					</div>
					<div class="menu-name">{{ $t('system.menu.图片') }}</div>
				</div>
				<div class="menu-item">
					<div class="menu-icon">
						<svg-icon name="setting" />
					</div>
					<div class="menu-name">{{ $t('system.menu.设置') }}</div>
				</div>
				<div class="menu-item" @click="handlePower">
					<div class="menu-icon">
						<svg-icon name="power" />
					</div>
					<div class="menu-name">{{ $t('system.menu.电源') }}</div>
				</div>
			</div>
		</div>
		<div class="scroll-menu"></div>
		<div class="app-tag"></div>
		<PowerMenu v-if="showPower" @hide="handleHide" />
	</div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import SvgIcon from '../SvgIcon.vue';
import PowerMenu from './PowerMenu.vue';
import useStatusMenuVisible from '@/newTab/hooks/useStatusMenuVisible';
import { useUserStore } from '@/newTab/store';
const userStore = useUserStore();
const { style, dialogRef } = useStatusMenuVisible('showStart');
const showPower = ref(false);
const handlePower = () => {
	showPower.value = true;
};
const handleHide = () => {
	setTimeout(() => {
		showPower.value = false;
	});
};
</script>
<style scoped lang="less">
.start-menu {
	user-select: none;
	position: fixed;
	left: 0;
	min-height: 40vh;
	background-color: var(--start-menu-bg);
	min-width: 700px;
	z-index: 9;
	height: 500px;
	color: var(--white);
	overflow: hidden;
	padding: 2px 0 0 0;
	.system-menu {
		width: 40px;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		height: 100%;
		&:hover {
			width: 250px;
			box-shadow: -6px 0 10px 10px #353535;
			transition: all 0.3s linear;
			transition-delay: 0.5s;
		}
		.top-menu {
			flex: 1;
		}
		.menu-item {
			display: flex;
			width: 250px;
			&:hover {
				background-color: #575757;
			}
			.menu-icon {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				height: 40px;
				width: 40px;
				font-size: 20px;
			}
			.menu-name {
				line-height: 40px;
			}
		}
	}
}
</style>
