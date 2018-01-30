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
		throw new Error('Method not implemented.');
	}
	public dequeue(): T {
		throw new Error('Method not implemented.');
	}
	public peek(): T {
		throw new Error('Method not implemented.');
	}
}
