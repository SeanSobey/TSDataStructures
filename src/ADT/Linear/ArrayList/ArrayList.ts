import { IList } from '../IList';

export class ArrayList<T> implements IList<T> {
	private readonly _array: Array<T>;
	constructor(args?: Iterable<T> | number) {
		if (args) {
			if (typeof args === 'number') {
				this._array = new Array(args);
			} else {
				this._array = Array.from(args)
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
	public prepend(item: T): void {
		this._array.unshift(item);
	}
	public append(item: T): void {
		this._array.push(item);
	}
	public head(): T {
		if (this._array.length === 0) {
			throw new Error('List is empty');
		}
		return this._array[this._array.length - 1];
	}
	public tail(): IList<T> {
		if (this._array.length === 0) {
			throw new Error('List is empty');
		}
		return new ArrayList(this._array.slice(0, this._array.length - 1));
	}
}
