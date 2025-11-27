interface IndexedCollection extends Iterable<number> {
	readonly length: number;
	[index: number]: number;
}

export type Vector2Object = {
	x: number;
	y: number;
};

export type Vector2Array = [number, number] | IndexedCollection;

export type Vector3Object = {
	x: number;
	y: number;
	z: number;
};

export type Vector3Array = [number, number, number] | IndexedCollection;
