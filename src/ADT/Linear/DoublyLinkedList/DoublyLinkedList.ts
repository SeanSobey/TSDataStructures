import { IList } from '../IList';
import { DoublyLinkedListNode } from './DoublyLinkedListNode';
import { DoublyLinkedListIterator } from './DoublyLinkedListIterator';
import { EmptyListError } from '../EmptyListError';
import { IndexOutOfRangeError } from '../IndexOutOfRangeError';

export class DoublyLinkedList<T> implements IList<T> {
	// tslint:disable-next-line:readonly-keyword
	private _head: DoublyLinkedListNode<T> | null;
	constructor(iterable?: Iterable<T>) {
		this._head = null;
		if (iterable) {
			for (const item of iterable) {
				this.append(item);
			}
		}
	}
	public [Symbol.iterator](): Iterator<T> {
		return new DoublyLinkedListIterator<T>(this._head);
	}
	public isEmpty(): boolean {
		return this._head === null;
	}
	public count(): number {
		// tslint:disable-next-line:no-let
		let count = 0;
		const iterator = new DoublyLinkedListIterator<T>(this._head);
		while (!iterator.next().done) {
			count++;
		}
		return count;
	}
	public atIndex(index: number): T {
		const iterator = new DoublyLinkedListIterator<T>(this._head);
		// tslint:disable-next-line:no-let
		for (let i = 0; i < index; i++) {
			const iteratorResult = iterator.next();
			if (iteratorResult.done) {
				throw new IndexOutOfRangeError();
			}
		}
		if (!iterator.node) {
			throw new IndexOutOfRangeError();
		}
		return iterator.node.data;
	}
	public prepend(item: T): void {
		this._head = new DoublyLinkedListNode<T>(this._head, null, item);
	}
	public append(item: T): void {
		const iterator = new DoublyLinkedListIterator<T>(this._head);
		while (iterator.node && iterator.node.next) {
			iterator.next();
		}
		const foot = iterator.node;
		const node = new DoublyLinkedListNode(null, foot, item);
		if (foot) {
			foot.next = node;
		} else {
			this._head = node;
		}
	}
	public head(): T {
		if (this._head === null) {
			throw new EmptyListError();
		}
		return this._head.data;
	}
	public tail(): DoublyLinkedList<T> {
		if (this._head === null) {
			throw new EmptyListError();
		}
		const tail = new DoublyLinkedList<T>();
		const iterator = new DoublyLinkedListIterator<T>(this._head);
		while (iterator.node && iterator.node.next) {
			iterator.next();
			tail.append(iterator.node.data);
		}
		return tail;
	}
}
