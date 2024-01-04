export default class Vector {
	constructor(
		public x: number,
		public y: number
	) {}
	add(vec2: { x: number; y: number }) {
		this.x = this.x + vec2.x;
		this.y = this.y + vec2.y;
	}
}
