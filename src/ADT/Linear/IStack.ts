import { ICollection } from '../ICollection';

export interface StackConstructor<T> {
	new(iterable?: Iterable<T>): IStack<T>;
}

/**
 * A set of ordered items allowing operations at one end, LIFO.
 *
 * @export
 * @interface IStack
 * @extends {ICollection<T>}
 * @template T Item type.
 * @see https://en.wikipedia.org/wiki/Stack_(abstract_data_type)
 */
export interface IStack<T> extends ICollection<T> {
	/**
	 * Add an item.
	 *
	 * @param {T} item The item.
	 * @memberof IStack
	 */
	push(item: T): void;
	/**
	 * Remove the top item.
	 *
	 * @returns {T} The item.
	 * @memberof IStack
	 */
	pop(): T;
	/**
	 * Get the top item without removing it.
	 *
	 * @returns {T} The item.
	 * @memberof IStack
	 */
	peek(): T;
}
