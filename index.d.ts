export default class FPSControl {
	constructor(framerate: number);
	then: Date;
	setFPS(value: number): void;
	framerate: number;
	check(): boolean;
}
