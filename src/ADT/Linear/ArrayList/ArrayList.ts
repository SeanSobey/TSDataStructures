import { IList } from '../IList';
import { EmptyListError } from '../EmptyListError';
import { IndexOutOfRangeError } from '../IndexOutOfRangeError';

export class ArrayList<T> implements IList<T> {
	// tslint:disable-next-line:readonly-array
	private readonly _array: Array<T>;
	constructor(args?: Iterable<T> | number) {
		if (args) {
			if (typeof args === 'number') {
				this._array = new Array(args);
			} else {
				this._array = Array.from(args);
			}
		} else {
			this._array = new Array();
		}
	}
	public [Symbol.iterator](): Iterator<T> {
		return this._array[Symbol.iterator]();
	}
	public isEmpty(): boolean {
		return this._array.length === 0;
	}
	public count(): number {
		return this._array.length;
	}
	public atIndex(index: number): T {
		if (index >= this._array.length) {
			throw new IndexOutOfRangeError();
		}
		return this._array[index];
	}
	public prepend(item: T): void {
		this._array.unshift(item);
	}
	public append(item: T): void {
		this._array.push(item);
	}
	public head(): T {
		if (this._array.length === 0) {
			throw new EmptyListError();
		}
		return this._array[0];
	}
	public tail(): ArrayList<T> {
		if (this._array.length === 0) {
			throw new EmptyListError();
		}
		return new ArrayList(this._array.slice(1, this._array.length));
	}
}
