import { IList } from '../IList';
import { IStack } from '../IStack';
import { EmptyCollectionError } from '../../EmptyCollectionError';

export abstract class Stack<T> implements IStack<T> {
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
		const count = this._list.count();
		if (count === 0) {
			throw new EmptyCollectionError();
		}
		return this._list.removeAt(count - 1);
	}
	public peek(): T {
		const count = this._list.count();
		if (count === 0) {
			throw new EmptyCollectionError();
		}
		return this._list.elementAt(count - 1);
	}
}
