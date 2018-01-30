import { ICollection } from '../ICollection';

export interface StackConstructor<T> {
	new(iterable?: Iterable<T>): IStack<T>;
}

//https://en.wikipedia.org/wiki/Stack_(abstract_data_type)
export interface IStack<T> extends ICollection<T> {
	push(item: T): void;
	pop(): T;
	peek(): T;
}
