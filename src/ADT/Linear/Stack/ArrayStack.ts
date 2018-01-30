import { Stack } from './Stack';
import { ArrayList } from '../ArrayList/';

export class ArrayStack<T> extends Stack<T> {
	constructor(iterable?: Iterable<T>) {
		super(new ArrayList<T>(iterable));
	}
}
