export interface CollectionConstructor<T> {
	new(iterable?: Iterable<T>): ICollection<T>;
}

/**
 * A countable number of ordered items.
 *
 * @export
 * @interface ICollection
 * @extends {Iterable<T>}
 * @template T Item type.
 * @see https://en.wikipedia.org/wiki/Collection_(abstract_data_type)
 */
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
