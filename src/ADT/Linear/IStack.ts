import { ICollection } from 'src/ADT/ICollection';

//https://en.wikipedia.org/wiki/Stack_(abstract_data_type)
export interface IStack<T> extends ICollection<T> {
	push(item: T): void;
	pop(): T;
	peek(): T;
}