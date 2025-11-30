export interface IndexedCollection extends Iterable<number> {
	readonly length: number;
	[index: number]: number;
}

export const isIndexedCollection = (value: unknown): value is IndexedCollection => {
	if (typeof value !== "object" || value === null) {
		return false;
	}

	if (!("length" in value)) return false;

	const length = value.length;

	if (typeof length !== "number") return false; // length must be a number
	if (length < 0) return false; // length must be non-negative

	if (length !== Math.floor(length) || length > Number.MAX_SAFE_INTEGER) {
		return false; // length must be an integer and safe (not too large)
	}

	if (typeof value === "function") return false; // Exclude functions, as they can have a 'length' property

	return true;
};
