import { IList } from '../IList';
import { EmptyCollectionError } from '../../EmptyCollectionError';
import { IndexOutOfRangeError } from '../../IndexOutOfRangeError';

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
	public element(index: number): T {
		if (index >= this._array.length) {
			throw new IndexOutOfRangeError(index, this.count());
		}
		return this._array[index];
	}
	public insertAt(index: number, item: T): void {
		if (index >= this._array.length) {
			throw new IndexOutOfRangeError(index, this.count());
		}
		this._array.splice(index, 0, item);
	}
	public removeAt(index: number): void {
		if (index >= this._array.length) {
			throw new IndexOutOfRangeError(index, this.count());
		}
		this._array.splice(index, 1);
	}
	public prepend(item: T): void {
		this._array.unshift(item);
	}
	public append(item: T): void {
		this._array.push(item);
	}
	public head(): T {
		if (this._array.length === 0) {
			throw new EmptyCollectionError();
		}
		return this._array[0];
	}
	public tail(): ArrayList<T> {
		if (this._array.length === 0) {
			throw new EmptyCollectionError();
		}
		return new ArrayList(this._array.slice(1, this._array.length));
	}
}
