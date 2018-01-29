export class EmptyListError extends Error {
	constructor() {
		super('List is empty');
	}
}
