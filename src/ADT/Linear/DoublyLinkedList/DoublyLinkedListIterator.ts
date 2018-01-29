import { DoublyLinkedListNode } from './DoublyLinkedListNode';

export class DoublyLinkedListIterator<T> implements Iterator<T> {
	constructor(
		public node: DoublyLinkedListNode<T> | null
	) { }
	public next(): IteratorResult<T> {
		const node = this.node;
		if (node) {
			this.node = node.next;
			return {
				done: false,
				value: node.data
			};
		}
		return {
			done: true,
			value: undefined as any
		};
	}
	public previous(): IteratorResult<T> {
		const node = this.node;
		if (node) {
			this.node = node.previous;
			return {
				done: false,
				value: node.data
			};
		}
		return {
			done: true,
			value: undefined as any
		};
	}
}
