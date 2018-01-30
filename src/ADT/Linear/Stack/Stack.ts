import { IList } from '../IList';
import { IStack } from '../IStack';
import { ArrayList } from '../ArrayList/ArrayList';
import { LinkedList } from '../LinkedList/LinkedList';
import { EmptyCollectionError } from '../../EmptyCollectionError';

abstract class Stack<T> implements IStack<T> {
	constructor(
		private readonly _list: IList<T>
	) { }
	public [Symbol.iterator](): Iterator<T> {
		return this._list[Symbol.iterator]();
	}
	public isEmpty(): boolean {
		return this._list.isEmpty();
	}
	public count(): number {
		return this._list.count();
	}
	public push(item: T): void {
		this._list.append(item);
	}
	public pop(): T {
		const index = this._list.count();
		if (index === 0) {
			throw new EmptyCollectionError();
		}
		return this._list.removeAt(index - 1);
	}
	public peek(): T {
		const index = this._list.count();
		if (index === 0) {
			throw new EmptyCollectionError();
		}
		return this._list.element(index);
	}
}

export class ArrayStack<T> extends Stack<T> {
	constructor(iterable?: Iterable<T>) {
		super(new ArrayList<T>(iterable));
	}
}

export class LinkedListStack<T> extends Stack<T> {
	constructor(iterable?: Iterable<T>) {
		super(new LinkedList<T>(iterable));
	}
}
