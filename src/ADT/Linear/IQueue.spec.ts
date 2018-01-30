import * as assert from 'assert';

import { QueueConstructor } from './IQueue';
import { EmptyCollectionError } from '../EmptyCollectionError';

export function spec(queueConstructor: QueueConstructor<number>): void {
	describe(`${queueConstructor.name} as IQueue,`, () => {
		const iterable = [0, 1, 2, 3];

		describe(queueConstructor.prototype.peek.name, () => {
			it('throws error when empty', () => {
				const queue = new queueConstructor();
				assert.throws(() => queue.peek(), (error: Error) => error instanceof EmptyCollectionError);
			});
			it('returns top item', () => {
				const queue = new queueConstructor(iterable);
				assert.equal(queue.peek(), 3);
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
