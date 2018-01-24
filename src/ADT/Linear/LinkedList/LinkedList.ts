import { IList } from '../IList';
import { LinkedListNode } from './LinkedListNode';
import { LinkedListIterator } from './LinkedListIterator';

export class LinkedList<T> implements IList<T> {
	private _head: LinkedListNode<T> | null;
	constructor(iterable?: Iterable<T>) {
		this._head = null;
		if (iterable) {
			for (const item of iterable) {
				this.append(item);
			}
		}
	}
	public [Symbol.iterator](): Iterator<T> {
		return new LinkedListIterator<T>(this._head);
	}
	public isEmpty(): boolean {
		return this._head === null;
	}
	public count(): number {
		let count = 0;
		const iterator = new LinkedListIterator<T>(this._head);
		while (!iterator.next().done) {
			count++;
		}
		return count;
	}
	public prepend(item: T): void {
		this._head = new LinkedListNode<T>(this._head, item);
	}
	public append(item: T): void {
		const iterator = new LinkedListIterator<T>(this._head);
		while (iterator.node && iterator.node.next) {
			iterator.next();
		}
		const foot = iterator.node;
		const node = new LinkedListNode(null, item);
		if (foot) {
			foot.next = node;
		} else {
			this._head = node;
		}
	}
	public head(): T {
		if (this._head === null) {
			throw new Error('List is empty');
		}
		return this._head.data;
	}
	public tail(): LinkedList<T> {
		if (this._head === null) {
			throw new Error('List is empty');
		}
		const tail = new LinkedList<T>();
		const iterator = new LinkedListIterator<T>(this._head);
		while (iterator.node && iterator.node.next) {
			iterator.next();
			tail.append(iterator.node.data);
		}
		return tail;
	}
}
