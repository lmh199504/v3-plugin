<template>
	<canvas ref="refCanvas" class="canvas"></canvas>
</template>
<script setup lang="ts">
import { onUnmounted } from 'vue';
import { onMounted, ref } from 'vue';
let requetId: number;
const refCanvas = ref<HTMLCanvasElement>();
let ctx: CanvasRenderingContext2D;
let canvas: HTMLCanvasElement;
class Particle {
	x: any;
	y: any;
	color: any;
	mx: number;
	my: number;
	size: number;
	age: number;
	constructor(x: number, y: Number, color: string) {
		this.x = x;
		this.y = y;
		this.color = color;
		this.mx = (0.5 - Math.random()) * 3;
		this.my = (0.5 - Math.random()) * 3;
		this.size = Math.random() * 3 + 1;
		this.age = 10;
	}
	update() {
		this.x += this.mx;
		this.y += this.my;
		this.age--;
		this.my += 0.01;
		this.size -= 0.01;
	}
	draw() {
		ctx.beginPath();
		if (this.age > 0) {
			ctx.shadowBlur = 10;
			ctx.shadowColor = '#FFF';
		} else {
			ctx.fillStyle = this.color;
		}
		ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
		ctx.fill();
	}
}

class FireWork {
	x: any;
	y: any;
	height: number;
	my: number;
	color: any;
	constructor(x: number, color: string) {
		this.x = x;
		this.y = canvas.height;
		this.height = Math.random() * 150 + 50;
		this.my = Math.random() * 4 + 3;
		this.color = color;
	}

	update() {
		this.y -= this.my;
	}
	draw() {
		ctx.beginPath();
		ctx.shadowBlur = 0;
		ctx.fillStyle = this.color;
		ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
		ctx.fill();
	}
}

let fireworks: FireWork[] = [];
let particles: Particle[] = [];

function launch() {
	ctx.fillStyle = 'rgb(0, 0, 0, 0.1)';
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	ctx.globalAlpha = 1;
	fireworks.forEach((firework, index) => {
		firework.draw();
		firework.update();
		if (firework.y < firework.height) {
			fireworks.splice(index, 1);
			fireworks.unshift(
				new FireWork(
					Math.random() * canvas.width,
					`hsl(${(Math.random() * 360) | 0},50%, 50%)`
				)
			);
			//爆炸
			Array(60)
				.fill(0)
				.forEach(() => {
					particles.push(new Particle(firework.x, firework.y, firework.color));
				});
		}
	});

	particles.forEach((particle, index) => {
		particle.draw();
		particle.update();
		ctx.shadowBlur = 0;
		if (particle.size < 0) {
			particles.splice(index, 1);
		}
	});

	requetId = requestAnimationFrame(launch);
}
onMounted(() => {
	if (refCanvas.value) {
		ctx = refCanvas.value.getContext('2d') as CanvasRenderingContext2D;
		canvas = refCanvas.value;
		canvas.width = document.body.clientWidth;
		canvas.height = document.body.clientHeight;
		Array(10)
			.fill(0)
			.forEach(() => {
				fireworks.push(
					new FireWork(
						Math.random() * (refCanvas.value as HTMLCanvasElement).width,
						`hsl(${(Math.random() * 360) | 0},50%, 50%)`
					)
				);
			});
		launch();
	}
});
onUnmounted(() => {
	if (requetId) {
		cancelAnimationFrame(requetId);
	}
});
</script>
<style scoped lang="less">
.canvas {
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	z-index: 0;
	pointer-events: none;
}
</style>
