import * as assert from 'assert';

import { StackConstructor } from './IStack';
import { EmptyCollectionError } from '../EmptyCollectionError';

export function spec(stackConstructor: StackConstructor<number>): void {
	describe(`${stackConstructor.name} as IStack,`, () => {
		const iterable = [0, 1, 2, 3];
		describe(stackConstructor.prototype.push.name, () => {
			const item = 4;
			it('adds item when empty', () => {
				const stack = new stackConstructor();
				stack.push(item);
				const array = Array.from(stack);
				assert.equal(array[0], item);
			});
			it('adds item to end', () => {
				const stack = new stackConstructor(iterable);
				stack.push(item);
				const array = Array.from(stack);
				assert.equal(array[4], item);
			});
		});
		describe(stackConstructor.prototype.pop.name, () => {
			it('throws error when empty', () => {
				const stack = new stackConstructor();
				assert.throws(() => stack.pop(), (error: Error) => error instanceof EmptyCollectionError);
			});
			it('returns last item', () => {
				const stack = new stackConstructor(iterable);
				assert.equal(stack.pop(), 3);
			});
			it('removes item', () => {
				const stack = new stackConstructor(iterable);
				stack.pop();
				const array = Array.from(stack);
				assert.deepEqual(array, [0, 1, 2]);
			});
		});
		describe(stackConstructor.prototype.peek.name, () => {
			it('throws error when empty', () => {
				const stack = new stackConstructor();
				assert.throws(() => stack.peek(), (error: Error) => error instanceof EmptyCollectionError);
			});
			it('returns last item', () => {
				const stack = new stackConstructor(iterable);
				assert.equal(stack.peek(), 3);
			});
			it('doesn\'t remove item', () => {
				const stack = new stackConstructor(iterable);
				stack.peek();
				const array = Array.from(stack);
				assert.deepEqual(array, [0, 1, 2, 3]);
			});
		});
	});
}
