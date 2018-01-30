import * as assert from 'assert';

import { QueueConstructor } from './IQueue';
import { EmptyCollectionError } from '../EmptyCollectionError';

export function spec(queueConstructor: QueueConstructor<number>): void {
	describe(`${queueConstructor.name} as IQueue,`, () => {
		const iterable = [0, 1, 2, 3];
		describe(queueConstructor.prototype.enqueue.name, () => {
			const item = 4;
			it('adds item when empty', () => {
				const queue = new queueConstructor();
				queue.enqueue(item);
				const array = Array.from(queue);
				assert.equal(array[0], item);
			});
			it('adds item to beginning', () => {
				const queue = new queueConstructor(iterable);
				queue.enqueue(item);
				const array = Array.from(queue);
				assert.equal(array[0], item);
			});
		});
		describe(queueConstructor.prototype.dequeue.name, () => {
			it('throws error when empty', () => {
				const queue = new queueConstructor();
				assert.throws(() => queue.dequeue(), (error: Error) => error instanceof EmptyCollectionError);
			});
			it('returns first item', () => {
				const queue = new queueConstructor(iterable);
				assert.equal(queue.dequeue(), 0);
			});
			it('removes item', () => {
				const queue = new queueConstructor(iterable);
				queue.dequeue();
				const array = Array.from(queue);
				assert.deepEqual(array, [1, 2, 3]);
			});
		});
		describe(queueConstructor.prototype.peek.name, () => {
			it('throws error when empty', () => {
				const queue = new queueConstructor();
				assert.throws(() => queue.peek(), (error: Error) => error instanceof EmptyCollectionError);
			});
			it('returns first item', () => {
				const queue = new queueConstructor(iterable);
				assert.equal(queue.peek(), 0);
			});
			it('doesn\'t remove item', () => {
				const queue = new queueConstructor(iterable);
				queue.peek();
				const array = Array.from(queue);
				assert.deepEqual(array, [0, 1, 2, 3]);
			});
		});
	});
}
