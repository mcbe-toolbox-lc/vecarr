import { describe, expect, it } from "vitest";
import { toArr2, toArr3, toObj2, toObj3 } from "./conversion";
import type { Vector2Array, Vector2Object, Vector3Array, Vector3Object } from "./types";

describe("conversion", () => {
	describe("Vector2", () => {
		it("to array", () => {
			const original: Vector2Object = {
				x: 6,
				y: 9,
			};
			const converted = toArr2(original);
			expect(converted).toStrictEqual([6, 9]);
		});

		it("to array with fallback values", () => {
			const original: Partial<Vector2Object> = {
				y: 9,
			};
			const fallbackValues: Partial<Vector2Object> = {
				x: 6,
				y: 6,
			};
			const converted = toArr2(original, fallbackValues);
			expect(converted).toStrictEqual([6, 9]);
		});

		it("to object", () => {
			const original: Vector2Array = [6, 9];
			const converted = toObj2(original);
			expect(converted).toStrictEqual({ x: 6, y: 9 });
		});
	});

	describe("Vector3", () => {
		it("to array", () => {
			const original: Partial<Vector3Object> = {
				x: 0,
			};
			const fallbackValues: Partial<Vector3Object> = {
				y: 7,
				z: 2,
			};
			const converted = toArr3(original, fallbackValues);
			expect(converted).toStrictEqual([0, 7, 2]);
		});

		it("to array with fallback values", () => {
			const original: Vector3Object = {
				x: 0,
				y: 7,
				z: 2,
			};
			const converted = toArr3(original);
			expect(converted).toStrictEqual([0, 7, 2]);
		});

		it("to object", () => {
			const original: Vector3Array = [0, 7, 2];
			const converted = toObj3(original);
			expect(converted).toStrictEqual({ x: 0, y: 7, z: 2 });
		});
	});
});
