import { IList } from '../IList';
import { IQueue } from '../IQueue';
import { EmptyCollectionError } from '../../EmptyCollectionError';

export abstract class Queue<T> implements IQueue<T> {
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
	public enqueue(item: T): void {
		this._list.prepend(item);
	}
	public dequeue(): T {
		const count = this._list.count();
		if (count === 0) {
			throw new EmptyCollectionError();
		}
		return this._list.removeAt(0);
	}
	public peek(): T {
		const count = this._list.count();
		if (count === 0) {
			throw new EmptyCollectionError();
		}
		return this._list.element(0);
	}
}
