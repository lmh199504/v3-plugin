<template>
	<div class="preload">
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
	</div>
</template>

<style>
@keyframes loader {
	1% {
		left: -10%;
		opacity: 1;
	}

	60% {
		left: 110%;
		opacity: 1;
	}

	61% {
		opacity: 0;
	}
}

.preload {
	z-index: 1000;
	position: fixed;
	width: 100%;
	height: 100%;
	background: #1e1e1e;
	top: 0;
	left: 0;
	transition: opacity 0.3s;
}

.preload span {
	display: block;
	bottom: 45%;
	height: 10px;
	width: 10px;
	position: fixed;
	background: #0078d7;
	z-index: 1001;
	display: inline-block;
	margin: 0 2px;
	border-radius: 100%;
	animation: loader 5s infinite cubic-bezier(0.03, 0.615, 0.995, 0.415);
	transform: translate(-50%, -50%);
	opacity: 0;
}

.preload span:nth-child(1) {
	animation-delay: 0.5s;
}

.preload span:nth-child(2) {
	animation-delay: 0.4s;
}

.preload span:nth-child(3) {
	animation-delay: 0.3s;
}

.preload span:nth-child(4) {
	animation-delay: 0.2s;
}

.preload span:nth-child(5) {
	animation-delay: 0.1s;
}

.preload span:nth-child(6) {
	animation-delay: 0;
}
</style>
