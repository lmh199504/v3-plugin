import Vector from './Vector';
import Particle from './Particle';
const rnd = Math.random;
function rndNum(num: number) {
	return rnd() * num + 1;
}
export default class Firework {
	pos: Vector | null = null;
	vel: Vector | null = null;
	color: string | null = null;
	size: number = 0;
	dead: boolean = false;
	start: number = 0;
	ctx: CanvasRenderingContext2D | null = null;
	gravity: number | null = null;
	exParticles: Particle[] = [];
	exPLen: number = 100;
	rootShow: boolean = true;
	speedX: number;
	constructor(
		x: number,
		y: number,
		gravity: number,
		ctx: CanvasRenderingContext2D
	) {
		this.pos = new Vector(x, y);
		this.vel = new Vector(0, -rndNum(10) - 3);
		this.color = 'hsl(' + rndNum(360) + ', 100%, 60%)';
		this.size = 4;
		this.dead = false;
		this.start = 0;
		this.ctx = ctx;
		this.gravity = gravity;
		this.speedX = (Math.random() - 0.5 > 0 ? 1 : -1) * (Math.random() / 10);
	}
	update(time: number, gravity: number) {
		if (this.dead) {
			return;
		}
		if (this.vel) {
			this.rootShow = this.vel.y < 0;
		}

		if (this.rootShow && this.vel && this.pos) {
			this.pos.add(this.vel);
			this.vel.y = this.vel.y + gravity;
			this.vel.x += this.speedX;
		} else {
			if (this.exParticles.length === 0) {
				for (let i = 0; i < this.exPLen; i++) {
					const randomR = rndNum(5);
					const randomX = -rndNum(Math.abs(randomR) * 2) + Math.abs(randomR);
					const randomY =
						Math.sqrt(Math.abs(Math.pow(randomR, 2) - Math.pow(randomX, 2))) *
						(Math.random() > 0.5 ? 1 : -1);
					this.exParticles.push(
						new Particle(
							this.pos as Vector,
							new Vector(randomX, randomY),
							this.ctx as CanvasRenderingContext2D
						)
					);
					this.exParticles[this.exParticles.length - 1].start = time;
				}
			}
			let numOfDead = 0;
			for (let i = 0; i < this.exPLen; i++) {
				const p = this.exParticles[i];
				p.update(time, this.gravity as number);
				if (p.dead) {
					numOfDead++;
				}
			}

			if (numOfDead === this.exPLen) {
				this.dead = true;
			}
		}
	}
	draw() {
		if (this.dead) {
			return;
		}
		if (this.ctx) {
			this.ctx.fillStyle = this.color as any;
		}
		if (this.rootShow) {
			if (this.pos) {
				this.drawDot(this.pos.x, this.pos.y, this.size);
			}
		} else {
			for (let i = 0; i < this.exPLen; i++) {
				const p = this.exParticles[i];
				p.draw();
			}
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
