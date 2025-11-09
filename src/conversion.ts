import type { Vector2Array, Vector2Object, Vector3Array, Vector3Object } from "./types";

export const toArr2 = (
	obj?: Partial<Vector2Object>,
	fallbackValues?: Partial<Vector2Object>,
): Vector2Array => {
	const x = obj?.x ?? fallbackValues?.x ?? 0;
	const y = obj?.y ?? fallbackValues?.y ?? 0;
	return [x, y];
};

export const toObj2 = (arr: Vector2Array): Vector2Object => ({
	x: arr[0],
	y: arr[1],
});

export const toArr3 = (
	obj?: Partial<Vector3Object>,
	fallbackValues?: Partial<Vector3Object>,
): Vector3Array => {
	const x = obj?.x ?? fallbackValues?.x ?? 0;
	const y = obj?.y ?? fallbackValues?.y ?? 0;
	const z = obj?.z ?? fallbackValues?.z ?? 0;
	return [x, y, z];
};

export const toObj3 = (arr: Vector3Array): Vector3Object => ({
	x: arr[0],
	y: arr[1],
	z: arr[2],
});
