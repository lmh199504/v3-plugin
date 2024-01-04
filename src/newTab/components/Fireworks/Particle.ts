import Vector from './Vector';
export default class Particle {
	pos: Vector | null = null;
	vel: { x: number; y: number } | null = null;
	dead: boolean = false;
	start: number = 0;
	ctx: CanvasRenderingContext2D | null = null;
	constructor(
		pos: { x: number; y: number },
		vel: { x: number; y: number },
		ctx: CanvasRenderingContext2D
	) {
		this.pos = new Vector(pos.x, pos.y);
		this.vel = vel;
		this.dead = false;
		this.start = 0;
		this.ctx = ctx;
	}
	update(time: number, gravity: number) {
		const timeSpan = time - this.start;

		if (timeSpan > 500) {
			this.dead = true;
		}

		if (!this.dead) {
			if (this.vel) {
				this.pos?.add(this.vel);
			}
			if (this.vel) {
				this.vel.y = this.vel.y + gravity;
			}
		}
	}

	draw() {
		if (!this.dead && this.pos) {
			this.drawDot(this.pos.x, this.pos.y, Math.random() > 0.5 ? 1 : 2);
		}
	}
	drawDot(x: number, y: number, size: number) {
		if (this.ctx) {
			this.ctx.beginPath();
			this.ctx.arc(x, y, size, 0, Math.PI * 2);
			this.ctx.fill();
			this.ctx.closePath();
		}
	}
}
