export interface CollectionConstructor<T> {
	new(iterable?: Iterable<T>): ICollection<T>;
}

export interface ICollection<T> extends Iterable<T> {
	/**
	 * Test whether or not a collection is empty.
	 *
	 * @returns {boolean}
	 * @memberof ICollection
	 */
	isEmpty(): boolean;
	/**
	 * The number of items in the collection.
	 *
	 * @returns {number}
	 * @memberof ICollection
	 */
	count(): number;
}
