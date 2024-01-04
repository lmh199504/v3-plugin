<template>
	<canvas class="fireworks" ref="refFirework" width="300" height="300"></canvas>
</template>
<script setup lang="ts">
import Firework from './Firework';
import { onMounted, ref } from 'vue';
const fireworks: Firework[] = [];
// let snapTime = 0;
let canvas: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D;
let gravity = 0.1;
const refFirework = ref<HTMLCanvasElement>();
onMounted(() => {
	canvas = refFirework.value as HTMLCanvasElement;
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
	init();
	draw();
});
let rnd = Math.random;
function rndNum(num: number) {
	return rnd() * num + 1;
}
function init() {
	let numOfFireworks = 20;
	for (let i = 0; i < numOfFireworks; i++) {
		fireworks.push(
			new Firework(rndNum(canvas.width), canvas.height, gravity, ctx)
		);
	}
}
const update = (time: number) => {
	for (let i = 0, len = fireworks.length; i < len; i++) {
		let p = fireworks[i];
		p.update(time, gravity);
	}
};
const draw = (time?: number) => {
	if (time) {
		update(time);
	}
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	ctx.fillStyle = 'blue';
	for (let i = 0, len = fireworks.length; i < len; i++) {
		let p = fireworks[i];
		if (p.dead) {
			p = fireworks[i] = new Firework(
				rndNum(canvas.width),
				canvas.height,
				gravity,
				ctx
			);
			if (time) {
				p.start = time;
			}
		}
		p.draw();
	}

	window.requestAnimationFrame(draw);
};
</script>
<style scoped lang="less">
.fireworks {
	position: fixed;
	z-index: 0;
	pointer-events: none;
	left: 0;
	top: 0;
}
</style>
