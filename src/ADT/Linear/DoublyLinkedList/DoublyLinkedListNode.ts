export class DoublyLinkedListNode<T> {
	constructor(
		public next: DoublyLinkedListNode<T> | null,
		public previous: DoublyLinkedListNode<T> | null,
		public readonly data: T
	) { }
}
