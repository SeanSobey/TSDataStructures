import * as assert from 'assert';

import { ListConstructor } from './IList';
import { EmptyCollectionError } from '../EmptyCollectionError';
import { IndexOutOfRangeError } from '../IndexOutOfRangeError';

export function spec(listConstructor: ListConstructor<number>): void {
	describe(`${listConstructor.name} as IList,`, () => {
		const iterable = [0, 1, 2, 3];
		describe(listConstructor.prototype.element.name, () => {
			it('throws when out of range', () => {
				const list = new listConstructor();
				assert.throws(() => list.element(0), (error: Error) => error instanceof IndexOutOfRangeError);
			});
			it('returns element at start index', () => {
				const list = new listConstructor(iterable);
				assert.equal(list.element(0), 0);
			});
			it('returns element at end index', () => {
				const list = new listConstructor(iterable);
				assert.equal(list.element(3), 3);
			});
		});
		describe(listConstructor.prototype.insertAt.name, () => {
			const item = 4;
			it('throws when out of range', () => {
				const list = new listConstructor();
				assert.throws(() => list.insertAt(1, item), (error: Error) => error instanceof IndexOutOfRangeError);
			});
			it('inserts element at start index', () => {
				const list = new listConstructor(iterable);
				list.insertAt(0, item);
				assert.deepEqual(Array.from(list), [4, 0, 1, 2, 3]);
			});
			it('inserts element at middle index', () => {
				const list = new listConstructor(iterable);
				list.insertAt(2, item);
				assert.deepEqual(Array.from(list), [0, 1, 4, 2, 3]);
			});
			it('inserts element at end index', () => {
				const list = new listConstructor(iterable);
				list.insertAt(3, item);
				assert.deepEqual(Array.from(list), [0, 1, 2, 4, 3]);
			});
		});
		describe(listConstructor.prototype.removeAt.name, () => {
			it('throws when out of range', () => {
				const list = new listConstructor();
				assert.throws(() => list.removeAt(1), (error: Error) => error instanceof IndexOutOfRangeError);
			});
			it('removes element at start index', () => {
				const list = new listConstructor(iterable);
				list.removeAt(0);
				assert.deepEqual(Array.from(list), [1, 2, 3]);
			});
			it('returns item when removing element at start index', () => {
				const list = new listConstructor(iterable);
				assert.deepEqual(list.removeAt(0),0);
			});
			it('removes element at middle index', () => {
				const list = new listConstructor(iterable);
				list.removeAt(1);
				assert.deepEqual(Array.from(list), [0, 2, 3]);
			});
			it('returns item when removing element at middle index', () => {
				const list = new listConstructor(iterable);
				assert.deepEqual(list.removeAt(1), 1);
			});
			it('removes element at end index', () => {
				const list = new listConstructor(iterable);
				list.removeAt(3);
				assert.deepEqual(Array.from(list), [0, 1, 2]);
			});
			it('returns item when removing element at end index', () => {
				const list = new listConstructor(iterable);
				assert.deepEqual(list.removeAt(3), 3);
			});
		});
		describe(listConstructor.prototype.prepend.name, () => {
			const item = 1;
			it('adds item to start when empty', () => {
				const linkedList = new listConstructor([]);
				linkedList.prepend(item);
				const array = Array.from(linkedList);
				assert.equal(array[0], item);
			});
			it('adds item to start', () => {
				const linkedList = new listConstructor(iterable);
				linkedList.prepend(item);
				const array = Array.from(linkedList);
				assert.equal(array[0], item);
			});
		});
		describe(listConstructor.prototype.append.name, () => {
			const item = 1;
			it('adds item to end when empty', () => {
				const linkedList = new listConstructor();
				linkedList.append(item);
				const array = Array.from(linkedList);
				assert.equal(array[0], item);
			});
			it('returns index when empty', () => {
				const linkedList = new listConstructor();
				assert.equal(linkedList.append(item), 0);
			});
			it('adds item to end', () => {
				const linkedList = new listConstructor(iterable);
				linkedList.append(item);
				const array = Array.from(linkedList);
				assert.equal(array[4], item);
			});
			it('returns index', () => {
				const linkedList = new listConstructor(iterable);
				assert.equal(linkedList.append(item), 4);
			});
		});
		describe(listConstructor.prototype.head.name, () => {
			const item = 1;
			it('throws when empty', () => {
				const list = new listConstructor();
				assert.throws(() => list.head(), (error: Error) => error instanceof EmptyCollectionError);
			});
			it('returns first element', () => {
				const list = new listConstructor(iterable);
				list.prepend(item);
				assert.equal(list.head(), item);
			});
		});
		describe(listConstructor.prototype.tail.name, () => {
			it('throws when empty', () => {
				const list = new listConstructor();
				assert.throws(() => list.tail(), (error: Error) => error instanceof EmptyCollectionError);
			});
			it('returns tail', () => {
				const list = new listConstructor(iterable);
				assert.deepEqual(Array.from(list.tail()), [1, 2, 3]);
			});
		});
	});
}
