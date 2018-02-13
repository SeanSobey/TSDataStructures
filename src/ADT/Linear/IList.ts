import { ICollection } from '../ICollection';

export interface ListConstructor<T> {
	new(iterable?: Iterable<T>): IList<T>;
}

/**
 * A countable number of ordered items, manipluatable by index.
 *
 * @export
 * @interface IList
 * @extends {ICollection<T>}
 * @template T Item type.
 * @see https://en.wikipedia.org/wiki/List_(abstract_data_type)
 */
export interface IList<T> extends ICollection<T> {
	/**
	 * Get a element at a specific index.
	 *
	 * @returns {T} The item.
	 * @memberof IList
	 */
	elementAt(index: number): T;
	/**
	 * Insert an element at a specific index.
	 *
	 * @param {number} index The index.
	 * @param {T} item The item.
	 * @memberof IList
	 */
	insertAt(index: number, item: T): void;
	/**
	 * Remove an element at a specific index.
	 *
	 * @param {number} index The index.
	 * @returns {T} The item.
	 * @memberof IList
	 */
	removeAt(index: number): T;
	/**
	 * Add an element to the start of the list.
	 *
	 * @param {T} item The item.
	 * @memberof IList
	 */
	prepend(item: T): void;
	/**
	 * Add an element to the end of the list.
	 *
	 * @param {T} item The item.
	 * @returns {number} The index.
	 * @memberof IList
	 */
	append(item: T): number;
	/**
	 * Get the element at the start of the list, or throw exception if the list is empty.
	 *
	 * @returns {T} The item.
	 * @memberof IList
	 */
	head(): T;
	/**
	 * Get all the element in the list except the first, or throw exception if the list is empty.
	 *
	 * @returns {IList<T>} A new list of items.
	 * @memberof IList
	 */
	tail(): IList<T>;
}
