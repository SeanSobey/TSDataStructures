import { Stack } from './Stack';
import { LinkedList } from '../LinkedList/';

export class LinkedListStack<T> extends Stack<T> {
	constructor(iterable?: Iterable<T>) {
		super(new LinkedList<T>(iterable));
	}
}
