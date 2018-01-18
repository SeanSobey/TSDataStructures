import { ICollection } from 'src/ADT/ICollection';

//https://en.wikipedia.org/wiki/Queue_(abstract_data_type)
export interface IQueue<T> extends ICollection<T> {
	enqueue(item: T): void;
	dequeue(): T;
	peek(): T;
}