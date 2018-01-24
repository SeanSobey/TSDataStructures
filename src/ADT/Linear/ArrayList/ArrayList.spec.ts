import * as assert from 'assert';

import { ArrayList } from './ArrayList';

describe(ArrayList.name, () => {
	describe(ArrayList.name, () => {
		it('works with no parameters', () => {
			assert.ok(new ArrayList());
		});
		it('works with iterable', () => {
			assert.ok(new ArrayList([1,2,3]));
		});
	});
	describe(Symbol.iterator.toString(), () => {
		const iterable = [1, 2, 3];
		it('works', () => {
			const arrayList = new ArrayList(iterable);
			assert.deepEqual(Array.from(arrayList), iterable)
		});
	});
	describe(ArrayList.prototype.isEmpty.name, () => {
		it('returns true when empty', () => {
			const arrayList = new ArrayList([]);
			assert.equal(arrayList.isEmpty(), true);
		});
		it('returns false when not empty', () => {
			const arrayList = new ArrayList([1]);
			assert.equal(arrayList.isEmpty(), false);
		});
	});
	describe(ArrayList.prototype.count.name, () => {
		it('returns count', () => {
			const arrayList = new ArrayList([1,2,3]);
			assert.equal(arrayList.count(), 3);
		});
	});
	describe(ArrayList.prototype.prepend.name, () => {
		const item = 1;
		it('adds item to start', () => {
			const arrayList = new ArrayList<number>([0]);
			arrayList.prepend(item);
			const array = Array.from(arrayList);
			assert.equal(array[0], item);
		});
	});
	describe(ArrayList.prototype.append.name, () => {
		const item = 1;
		it('adds item to end', () => {
			const arrayList = new ArrayList<number>([0]);
			arrayList.append(item);
			const array = Array.from(arrayList);
			assert.equal(array[1], item);
		});
	});
	describe(ArrayList.prototype.head.name, () => {
		const item = 1;
		it('throws when empty', () => {
			const arrayList = new ArrayList<number>();
			assert.throws(() => arrayList.head());
		});
		it('returns first element', () => {
			const arrayList = new ArrayList<number>([0,0,0]);
			arrayList.append(item)
			assert.equal(arrayList.head(), item);
		});
	});
	describe(ArrayList.prototype.tail.name, () => {
		const item = 1;
		it('throws when empty', () => {
			const arrayList = new ArrayList<number>();
			assert.throws(() => arrayList.tail());
		});
		it('returns tail', () => {
			const iterable = [0, 0, 0];
			const arrayList = new ArrayList<number>(iterable);
			arrayList.append(item);
			assert.deepEqual(Array.from(arrayList.tail()), iterable);
		});
	});
});