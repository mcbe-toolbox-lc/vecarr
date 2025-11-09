import * as conversion from "./conversion";
import type { Vector2Array, Vector2Object, Vector3Array, Vector3Object } from "./types";

export class HybridVec2 {
	#array: Vector2Array;

	constructor(
		vec?: Vector2Array | Partial<Vector2Object>,
		fallbackValues?: Partial<Vector2Object>,
	) {
		if (Array.isArray(vec)) {
			this.#array = vec;
		} else {
			this.#array = conversion.toArr2(vec, fallbackValues);
		}

		const xDesc = Object.getOwnPropertyDescriptor(HybridVec2.prototype, "x")!;
		const yDesc = Object.getOwnPropertyDescriptor(HybridVec2.prototype, "y")!;

		Object.defineProperty(this, "x", { enumerable: true, get: xDesc.get, set: xDesc.set });
		Object.defineProperty(this, "y", { enumerable: true, get: yDesc.get, set: yDesc.set });

		// Define 'length' as a non-enumerable property
		Object.defineProperty(this, "length", {
			value: 2,
			writable: false,
			enumerable: false,
			configurable: false,
		});
	}

	// Object support

	get x(): number {
		return this.#array[0];
	}
	set x(value: number) {
		this.#array[0] = value;
	}
	get y(): number {
		return this.#array[1];
	}
	set y(value: number) {
		this.#array[1] = value;
	}

	// Array support

	readonly length = 2;

	[index: number]: number;

	get [0](): number {
		return this.#array[0];
	}
	set [0](value: number) {
		this.#array[0] = value;
	}
	get [1](): number {
		return this.#array[1];
	}
	set [1](value: number) {
		this.#array[1] = value;
	}

	*[Symbol.iterator](): Iterator<number> {
		yield this.#array[0];
		yield this.#array[1];
	}

	toString(): string {
		return `${this.x},${this.y}`;
	}
}

export class HybridVec3 {
	#array: Vector3Array;

	constructor(
		vec?: Vector3Array | Partial<Vector3Object>,
		fallbackValues?: Partial<Vector3Object>,
	) {
		if (Array.isArray(vec)) {
			this.#array = vec;
		} else {
			this.#array = conversion.toArr3(vec, fallbackValues);
		}

		const xDesc = Object.getOwnPropertyDescriptor(HybridVec3.prototype, "x")!;
		const yDesc = Object.getOwnPropertyDescriptor(HybridVec3.prototype, "y")!;
		const zDesc = Object.getOwnPropertyDescriptor(HybridVec3.prototype, "z")!;

		Object.defineProperty(this, "x", { enumerable: true, get: xDesc.get, set: xDesc.set });
		Object.defineProperty(this, "y", { enumerable: true, get: yDesc.get, set: yDesc.set });
		Object.defineProperty(this, "z", { enumerable: true, get: zDesc.get, set: zDesc.set });

		// Define 'length' as a non-enumerable property
		Object.defineProperty(this, "length", {
			value: 3,
			writable: false,
			enumerable: false,
			configurable: false,
		});
	}

	// Object support

	get x(): number {
		return this.#array[0];
	}
	set x(value: number) {
		this.#array[0] = value;
	}
	get y(): number {
		return this.#array[1];
	}
	set y(value: number) {
		this.#array[1] = value;
	}
	get z(): number {
		return this.#array[2];
	}
	set z(value: number) {
		this.#array[2] = value;
	}

	// Array support

	readonly length = 3;

	[index: number]: number;

	get [0](): number {
		return this.#array[0];
	}
	set [0](value: number) {
		this.#array[0] = value;
	}
	get [1](): number {
		return this.#array[1];
	}
	set [1](value: number) {
		this.#array[1] = value;
	}
	get [2](): number {
		return this.#array[2];
	}
	set [2](value: number) {
		this.#array[2] = value;
	}

	*[Symbol.iterator](): Iterator<number> {
		yield this.#array[0];
		yield this.#array[1];
		yield this.#array[2];
	}

	toString(): string {
		return `${this.x},${this.y},${this.z}`;
	}
}
