import { ICollection } from '../ICollection';

//https://en.wikipedia.org/wiki/Priority_queue
export interface IPriorityQueue<T> extends ICollection<T> {
	enqueue(item: T, priority: number): void;
	dequeue(): T;
	peek(): T;
}