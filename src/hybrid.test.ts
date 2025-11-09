import { describe, expect, it } from "vitest";
import { HybridVec2, HybridVec3 } from "./hybrid";

describe("HybridVec2", () => {
	it("supports indexed access", () => {
		const hybridVec = new HybridVec2([6, 9]);

		expect(hybridVec[0]).toBe(6);
		expect(hybridVec[1]).toBe(9);
		expect(hybridVec[2]).toBeUndefined(); // Out of bounds
	});

	it("supports object property access", () => {
		const hybridVec = new HybridVec2([6, 9]);

		expect(hybridVec.x).toBe(6);
		expect(hybridVec.y).toBe(9);
	});

	it("supports for...of loop", () => {
		const hybridVec = new HybridVec2([6, 9]);

		let values: number[] = [];
		for (const value of hybridVec) {
			values.push(value);
		}

		expect(values).toStrictEqual([6, 9]);
	});

	it("supports array spread syntax", () => {
		const hybridVec = new HybridVec2([6, 9]);
		const spreaded = [...hybridVec];
		expect(spreaded).toStrictEqual([6, 9]);
	});

	it("supports object spread syntax", () => {
		const hybridVec = new HybridVec2([6, 9]);
		const spreaded = { ...hybridVec };
		expect(spreaded).toStrictEqual({ x: 6, y: 9 });
	});
});

describe("HybridVec3", () => {
	it("supports indexed access", () => {
		const hybridVec = new HybridVec3([0, 6, 9]);

		expect(hybridVec[0]).toBe(0);
		expect(hybridVec[1]).toBe(6);
		expect(hybridVec[2]).toBe(9);
		expect(hybridVec[3]).toBeUndefined(); // Out of bounds
	});

	it("supports object property access", () => {
		const hybridVec = new HybridVec3([0, 6, 9]);

		expect(hybridVec.x).toBe(0);
		expect(hybridVec.y).toBe(6);
		expect(hybridVec.z).toBe(9);
	});

	it("supports for...of loop", () => {
		const hybridVec = new HybridVec3([0, 6, 9]);

		let values: number[] = [];
		for (const value of hybridVec) {
			values.push(value);
		}

		expect(values).toStrictEqual([0, 6, 9]);
	});

	it("supports array spread syntax", () => {
		const hybridVec = new HybridVec3([0, 6, 9]);
		const spreaded = [...hybridVec];
		expect(spreaded).toStrictEqual([0, 6, 9]);
	});

	it("supports object spread syntax", () => {
		const hybridVec = new HybridVec3([0, 6, 9]);
		const spreaded = { ...hybridVec };
		expect(spreaded).toStrictEqual({ x: 0, y: 6, z: 9 });
	});
});
