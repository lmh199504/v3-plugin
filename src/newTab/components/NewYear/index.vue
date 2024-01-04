<template>
	<div class="content">
		<div class="middle">
			<h1 class="label">New Year Countdown</h1>
			<div class="time">
				<span>
					<div id="d">{{ date.d }}</div>
					Days
				</span>
				<span>
					<div id="h">{{ date.h }}</div>
					Hours
				</span>
				<span>
					<div id="m">{{ date.m }}</div>
					Minutes
				</span>
				<span>
					<div id="s">{{ date.s }}</div>
					Seconds
				</span>
			</div>
		</div>
		<canvas ref="refCanvas" />
	</div>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted, reactive, ref } from 'vue';
const refCanvas = ref<HTMLCanvasElement>();
class Snowflake {
	public x: number;
	public y: number;
	public vx: number;
	public vy: number;
	public radius: number;
	public alpha: number;
	constructor() {
		this.x = 0;
		this.y = 0;
		this.vx = 0;
		this.vy = 0;
		this.radius = 0;
		this.alpha = 0;

		this.reset();
	}

	reset() {
		this.x = this.randBetween(0, window.innerWidth);
		this.y = this.randBetween(0, -window.innerHeight);
		this.vx = this.randBetween(-3, 3);
		this.vy = this.randBetween(2, 5);
		this.radius = this.randBetween(1, 4);
		this.alpha = this.randBetween(0.1, 0.9);
	}

	randBetween(min: number, max: number) {
		return min + Math.random() * (max - min);
	}

	update() {
		this.x += this.vx;
		this.y += this.vy;

		if (this.y + this.radius > window.innerHeight) {
			this.reset();
		}
	}
}

class Snow {
	canvas: HTMLCanvasElement;
	ctx: any;
	updateBound: () => void;
	width: number | undefined;
	height: number | undefined;
	snowflakes: Snowflake[];
	constructor() {
		this.snowflakes = [];
		this.canvas = refCanvas.value as HTMLCanvasElement;
		this.ctx = this.canvas.getContext('2d');
		window.addEventListener('resize', () => this.onResize());
		this.onResize();
		this.updateBound = this.update.bind(this);
		requestAnimationFrame(this.updateBound);

		this.createSnowflakes();
	}

	onResize() {
		this.width = window.innerWidth;
		this.height = window.innerHeight;
		this.canvas.width = this.width;
		this.canvas.height = this.height;
	}

	createSnowflakes() {
		const flakes = window.innerWidth / 4;

		this.snowflakes = [];

		for (let s = 0; s < flakes; s++) {
			this.snowflakes.push(new Snowflake());
		}
	}

	update() {
		this.ctx.clearRect(0, 0, this.width, this.height);

		for (let flake of this.snowflakes) {
			flake.update();

			this.ctx.save();
			this.ctx.fillStyle = '#FFF';
			this.ctx.beginPath();
			this.ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
			this.ctx.closePath();
			this.ctx.globalAlpha = flake.alpha;
			this.ctx.fill();
			this.ctx.restore();
		}
		requestAnimationFrame(this.updateBound);
	}
}

onMounted(() => {
	new Snow();
});
const comingdate = new Date('2024-02-10 00:00:00');
const date: Record<string, string | number> = reactive({
	d: 0,
	h: 0,
	m: 0,
	s: 0,
});
const countdown = setInterval(() => {
	const now = new Date();
	const des = comingdate.getTime() - now.getTime();
	const days = Math.floor(des / (1000 * 60 * 60 * 24));
	const hours = Math.floor((des % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const mins = Math.floor((des % (1000 * 60 * 60)) / (1000 * 60));
	const secs = Math.floor((des % (1000 * 60)) / 1000);

	date.d = getTrueNumber(days);
	date.h = getTrueNumber(hours);
	date.m = getTrueNumber(mins);
	date.s = getTrueNumber(secs);

	if (des <= 0) clearInterval(countdown);
}, 1000);

const getTrueNumber = (x: number) => (x < 10 ? '0' + x : x);

onUnmounted(() => {
	clearInterval(countdown);
});
</script>
<style scoped lang="less">
@import url('https://fonts.googleapis.com/css?family=Aleo');

:root {
	font-family: 'Aleo', sans-serif;
}

.content {
	width: 100%;
	height: 100%;
	padding: 0;
	margin: 0;
	// background: rgb(119, 13, 13);
	// background: radial-gradient(
	// 	circle,
	// 	rgba(119, 13, 13, 0.92) 64%,
	// 	rgba(0, 0, 0, 0.6) 100%
	// );
	position: fixed;
	left: 0;
	top: 0;
	z-index: 0;
	pointer-events: none;
}

canvas {
	width: 100%;
	height: 100%;
}

.label {
	font-size: 2.2rem;
	background: url(../../assets/6368077651977322227241996.png);
	background-clip: text;
	-webkit-background-clip: text;
	color: transparent;
	animation: moveBg 30s linear infinite;
}

@keyframes moveBg {
	0% {
		background-position: 0% 30%;
	}
	100% {
		background-position: 1000% 500%;
	}
}

.middle {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	text-align: center;
	user-select: none;
}

.time {
	color: #d99c3b;
	text-transform: uppercase;
	display: flex;
	justify-content: center;
}

.time span {
	padding: 0 14px;
	font-size: 0.8rem;
}

.time span div {
	font-size: 3rem;
}

@media (max-width: 740px) {
	.label {
		font-size: 1.7rem;
	}
	.time span {
		padding: 0 16px;
		font-size: 0.6rem;
	}
	.time span div {
		font-size: 2rem;
	}
}
</style>
