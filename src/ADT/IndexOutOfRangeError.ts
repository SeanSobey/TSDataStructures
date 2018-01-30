export class IndexOutOfRangeError extends Error {
	constructor(index: number, length: number) {
		super(`Index out of range. Index: ${index}, length: ${length}`);
	}
}
