import { Queue } from './Queue';
import { LinkedList } from '../LinkedList/';

export class LinkedListQueue<T> extends Queue<T> {
	constructor(iterable?: Iterable<T>) {
		super(new LinkedList<T>(iterable));
	}
}
