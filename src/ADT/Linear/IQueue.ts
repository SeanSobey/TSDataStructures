import { ICollection } from '../ICollection';

export interface QueueConstructor<T> {
	new(iterable?: Iterable<T>): IQueue<T>;
}

/**
 * A set of ordered items allowing operations at one end, FIFO.
 *
 * @export
 * @interface IQueue
 * @extends {ICollection<T>}
 * @template T Item type.
 * @see https://en.wikipedia.org/wiki/Queue_(abstract_data_type)
 */
export interface IQueue<T> extends ICollection<T> {
	/**
	 * Adds an item to the end of the Queue.
	 *
	 * @param {T} item The item.
	 * @memberof IQueue
	 */
	enqueue(item: T): void;
	/**
	 * Removes and returns the item at the beginning of the Queue.
	 *
	 * @returns {T} The item.
	 * @memberof IQueue
	 */
	dequeue(): T;
	/**
	 * Returns the item at the beginning of the Queue without removing it.
	 *
	 * @returns {T} The item.
	 * @memberof IQueue
	 */
	peek(): T;
}
