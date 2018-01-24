export class LinkedListNode<T> {
	constructor(
		public next: LinkedListNode<T> | null,
		public readonly data: T
	) { }
}
