import { IStack } from '../IStack';

export class Stack<T> implements IStack<T> {
	constructor(iterable?: Iterable<T>) {
	}
	public [Symbol.iterator](): Iterator<T> {
		throw new Error('Method not implemented.');
	}
	public isEmpty(): boolean {
		throw new Error("Method not implemented.");
	}
	public count(): number {
		throw new Error("Method not implemented.");
	}
	public push(item: T): void {
		throw new Error("Method not implemented.");
	}
	public pop(): T {
		throw new Error("Method not implemented.");
	}
	public peek(): T {
		throw new Error("Method not implemented.");
	}
}
