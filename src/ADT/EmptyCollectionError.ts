export class EmptyCollectionError extends Error {
	constructor() {
		super('List is empty');
	}
}
