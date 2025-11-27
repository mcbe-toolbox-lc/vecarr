import type { Vector2Array, Vector2Object, Vector3Array, Vector3Object } from "./types";

/**
 * Converts a 2D vector object `{x, y}` to a `[x, y]` array.
 * Uses fallback values or 0 if properties are missing.
 *
 * @param obj - The source object.
 * @param fallbackValues - Fallback values.
 * @returns The resulting `[x, y]` array.
 */
export const toArr2 = (
	obj?: Partial<Vector2Object>,
	fallbackValues?: Partial<Vector2Object>,
): Vector2Array => {
	const x = obj?.x ?? fallbackValues?.x ?? 0;
	const y = obj?.y ?? fallbackValues?.y ?? 0;
	return [x, y];
};

/** Alias for `toArr2`. */
export const vector2_objectToArray = toArr2;

/**
 * Converts a 2D vector array `[x, y]` to an `{x, y}` object.
 *
 * @param arr - The source array.
 * @returns The resulting `{x, y}` object.
 */
export const toObj2 = (arr: Vector2Array): Vector2Object => ({
	x: arr[0],
	y: arr[1],
});

/** Alias for `toObj2`. */
export const vector2_arrayToObject = toObj2;

/**
 * Converts a 3D vector object `{x, y, z}` to a `[x, y, z]` array.
 * Uses fallback values or 0 if properties are missing.
 *
 * @param obj - The source object.
 * @param fallbackValues - Fallback values.
 * @returns The resulting `[x, y, z]` array.
 */
export const toArr3 = (
	obj?: Partial<Vector3Object>,
	fallbackValues?: Partial<Vector3Object>,
): Vector3Array => {
	const x = obj?.x ?? fallbackValues?.x ?? 0;
	const y = obj?.y ?? fallbackValues?.y ?? 0;
	const z = obj?.z ?? fallbackValues?.z ?? 0;
	return [x, y, z];
};

/** Alias for `toArr3`. */
export const vector3_objectToArray = toArr3;

/**
 * Converts a 3D vector array `[x, y, z]` to an `{x, y, z}` object.
 *
 * @param arr - The source array.
 * @returns The resulting `{x, y, z}` object.
 */
export const toObj3 = (arr: Vector3Array): Vector3Object => ({
	x: arr[0],
	y: arr[1],
	z: arr[2],
});

/** Alias for `toObj3`. */
export const vector3_arrayToObject = toObj3;
