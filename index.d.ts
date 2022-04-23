export default class FPSControl {
	constructor(framerate: number);
	then: Date;
	setFps(value: number): void;
	framerate: number;
	check(): boolean;
}
