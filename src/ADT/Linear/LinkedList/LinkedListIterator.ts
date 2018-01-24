import { LinkedListNode } from './LinkedListNode';

export class LinkedListIterator<T> implements Iterator<T> {
	constructor(
		public node: LinkedListNode<T> | null
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
}
