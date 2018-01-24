import * as assert from 'assert';

import { LinkedList } from './LinkedList';

describe(LinkedList.name, () => {
	describe(LinkedList.name, () => {
		it('works with no parameters', () => {
			assert.ok(new LinkedList());
		});
		it('works with iterable', () => {
			assert.ok(new LinkedList([1, 2, 3]));
		});
	});
	xdescribe(Symbol.iterator.toString(), () => {
		const iterable = [1, 2, 3];
		it('works', () => {
			const linkedList = new LinkedList(iterable);
			assert.deepEqual(Array.from(linkedList), Array.from(iterable));
		});
	});
	describe(LinkedList.prototype.isEmpty.name, () => {
		it('returns true when empty', () => {
			const linkedList = new LinkedList([]);
			assert.equal(linkedList.isEmpty(), true);
		});
		it('returns false when not empty', () => {
			const linkedList = new LinkedList([1]);
			assert.equal(linkedList.isEmpty(), false);
		});
	});
	describe(LinkedList.prototype.count.name, () => {
		it('returns count', () => {
			const linkedList = new LinkedList([1, 2, 3]);
			assert.equal(linkedList.count(), 3);
		});
	});
	describe(LinkedList.prototype.prepend.name, () => {
		const item = 1;
		it('with empty list, adds item to start', () => {
			const linkedList = new LinkedList<number>([]);
			linkedList.prepend(item);
			const array = Array.from(linkedList);
			assert.equal(array[0], item);
		});
		it('with non-empty list, adds item to start', () => {
			const linkedList = new LinkedList<number>([0]);
			linkedList.prepend(item);
			const array = Array.from(linkedList);
			assert.equal(array[0], item);
		});
	});
	describe(LinkedList.prototype.append.name, () => {
		const item = 1;
		it('with empty list, adds item to end', () => {
			const linkedList = new LinkedList<number>([]);
			linkedList.append(item);
			const array = Array.from(linkedList);
			assert.equal(array[0], item);
		});
		it('with non-empty list, adds item to end', () => {
			const linkedList = new LinkedList<number>([0]);
			linkedList.append(item);
			const array = Array.from(linkedList);
			assert.equal(array[1], item);
		});
	});
	describe(LinkedList.prototype.head.name, () => {
		const item = 1;
		it('throws when empty', () => {
			const linkedList = new LinkedList<number>();
			assert.throws(() => linkedList.head());
		});
		it('returns first element', () => {
			const linkedList = new LinkedList<number>([0, 0, 0]);
			linkedList.prepend(item);
			assert.equal(linkedList.head(), item);
		});
	});
	describe(LinkedList.prototype.tail.name, () => {
		const item = 1;
		it('throws when empty', () => {
			const linkedList = new LinkedList<number>();
			assert.throws(() => linkedList.tail());
		});
		it('returns tail', () => {
			const linkedList = new LinkedList<number>([1, 2, 3]);
			assert.deepEqual(Array.from(linkedList.tail()), [2, 3]);
		});
	});
});
