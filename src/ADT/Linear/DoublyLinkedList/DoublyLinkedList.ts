import { IList } from '../IList';
import { DoublyLinkedListNode } from './DoublyLinkedListNode';
import { DoublyLinkedListIterator } from './DoublyLinkedListIterator';
import { EmptyCollectionError } from '../../EmptyCollectionError';
import { IndexOutOfRangeError } from '../../IndexOutOfRangeError';

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
	public elementAt(index: number): T {
		return this.nodeAt(index).data;
	}
	public insertAt(index: number, item: T): void {
		if (index === 0) {
			return this.prepend(item);
		}
		const node = this.nodeAt(index - 1);
		node.next = new DoublyLinkedListNode<T>(node.next, node.previous, item);
	}
	public removeAt(index: number): T {
		if (index === 0) {
			if (!this._head) {
				throw new IndexOutOfRangeError(index, this.count());
			}
			const item = this._head.data;
			this._head = this._head.next;
			return item;
		}
		const node = this.nodeAt(index);
		if (node === null) {
			throw new IndexOutOfRangeError(index, this.count());
		}
		if (node.previous) {
			node.previous.next = node.next;
		}
		return node.data;
	}
	public prepend(item: T): void {
		this._head = new DoublyLinkedListNode<T>(this._head, null, item);
	}
	public append(item: T): number {
		const iterator = new DoublyLinkedListIterator<T>(this._head);
		// tslint:disable-next-line:no-let
		let count = 0;
		while (iterator.node && iterator.node.next) {
			iterator.next();
			count++;
		}
		const foot = iterator.node;
		const node = new DoublyLinkedListNode(null, foot, item);
		if (foot) {
			foot.next = node;
			count++;
		} else {
			this._head = node;
		}
		return count;
	}
	public head(): T {
		if (this._head === null) {
			throw new EmptyCollectionError();
		}
		return this._head.data;
	}
	public tail(): DoublyLinkedList<T> {
		if (this._head === null) {
			throw new EmptyCollectionError();
		}
		const tail = new DoublyLinkedList<T>();
		const iterator = new DoublyLinkedListIterator<T>(this._head);
		while (iterator.node && iterator.node.next) {
			iterator.next();
			tail.append(iterator.node.data);
		}
		return tail;
	}
	private nodeAt(index: number): DoublyLinkedListNode<T> {
		const iterator = new DoublyLinkedListIterator<T>(this._head);
		// tslint:disable-next-line:no-let
		for (let i = 0; i < index; i++) {
			const iteratorResult = iterator.next();
			if (iteratorResult.done) {
				throw new IndexOutOfRangeError(index, this.count());
			}
		}
		if (!iterator.node) {
			throw new IndexOutOfRangeError(index, this.count());
		}
		return iterator.node;
	}
}
