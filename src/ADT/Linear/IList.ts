import { ICollection } from '../ICollection';

export interface ListConstructor<T> {
	new(iterable?: Iterable<T>): IList<T>;
}

//https://en.wikipedia.org/wiki/List_(abstract_data_type)
export interface IList<T> extends ICollection<T> {
	/**
	 * Get a element at a specific index.
	 *
	 * @returns T
	 * @memberof IList
	 */
	atIndex(index: number): T;
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
	 * @memberof IList
	 */
	append(item: T): void;
	/**
	 * Get the element at the start of the list, or throw exception if the list is empty.
	 *
	 * @returns {T}
	 * @memberof IList
	 */
	head(): T;
	/**
	 * Get all the element in the list except the first, or throw exception if the list is empty.
	 *
	 * @returns {IList<T>}
	 * @memberof IList
	 */
	tail(): IList<T>;
}
