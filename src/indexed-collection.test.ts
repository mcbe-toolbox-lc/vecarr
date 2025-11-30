import { describe, expect, it } from "vitest";
import { isIndexedCollection } from "./indexed-collection";

describe("isIndexedCollection", () => {
	it("returns true for valid indexed collections", () => {
		expect(isIndexedCollection([1, 2, 3])).toBe(true);
		expect(isIndexedCollection(new Uint8Array([1, 2]))).toBe(true);
		expect(isIndexedCollection({ length: 0 })).toBe(true);
		expect(isIndexedCollection({ 0: "a", length: 1 })).toBe(true);
	});

	it("returns false for primitives and null", () => {
		expect(isIndexedCollection(null)).toBe(false);
		expect(isIndexedCollection(undefined)).toBe(false);
		expect(isIndexedCollection("string")).toBe(false); // strings are not objects
		expect(isIndexedCollection(123)).toBe(false);
	});

	it("returns false for functions", () => {
		expect(isIndexedCollection(() => {})).toBe(false);
		expect(isIndexedCollection(function test() {})).toBe(false);
	});

	it("returns false for invalid length properties", () => {
		expect(isIndexedCollection({})).toBe(false); // no length
		expect(isIndexedCollection({ length: "5" })).toBe(false); // wrong type
		expect(isIndexedCollection({ length: -1 })).toBe(false); // negative
		expect(isIndexedCollection({ length: 1.5 })).toBe(false); // float
		expect(isIndexedCollection({ length: Infinity })).toBe(false); // unsafe integer
	});
});
