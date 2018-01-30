import { Queue } from './Queue';
import { ArrayList } from '../ArrayList/';

export class ArrayQueue<T> extends Queue<T> {
	constructor(iterable?: Iterable<T>) {
		super(new ArrayList<T>(iterable));
	}
}
