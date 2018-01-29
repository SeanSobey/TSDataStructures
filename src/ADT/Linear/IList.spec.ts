import * as assert from 'assert';

import { ListConstructor } from './IList';

export function spec(listCtor: ListConstructor<number>): void {
	describe(listCtor.name, () => {
		describe(listCtor.name, () => {
			it('works with no parameters', () => {
				assert.ok(new listCtor());
			});
			it('works with iterable', () => {
				assert.ok(new listCtor([1, 2, 3]));
			});
		});
		describe(Symbol.iterator.toString(), () => {
			const iterable = [1, 2, 3];
			it('works', () => {
				const arrayList = new listCtor(iterable);
				assert.deepEqual(Array.from(arrayList), iterable);
			});
		});
		describe(listCtor.prototype.isEmpty.name, () => {
			it('returns true when empty', () => {
				const arrayList = new listCtor([]);
				assert.equal(arrayList.isEmpty(), true);
			});
			it('returns false when not empty', () => {
				const arrayList = new listCtor([1]);
				assert.equal(arrayList.isEmpty(), false);
			});
		});
		describe(listCtor.prototype.count.name, () => {
			it('returns count', () => {
				const arrayList = new listCtor([1, 2, 3]);
				assert.equal(arrayList.count(), 3);
			});
		});
		describe(listCtor.prototype.atIndex.name, () => {
			it('throws when out of range', () => {
				const arrayList = new listCtor();
				assert.throws(() => arrayList.atIndex(0));
			});
			it('returns element at index', () => {
				const arrayList = new listCtor([0, 1, 2, 3]);
				assert.equal(arrayList.atIndex(2), 2);
			});
		});
		describe(listCtor.prototype.prepend.name, () => {
			const item = 1;
			it('with empty list, adds item to start', () => {
				const linkedList = new listCtor([]);
				linkedList.prepend(item);
				const array = Array.from(linkedList);
				assert.equal(array[0], item);
			});
			it('with non-empty list, adds item to start', () => {
				const linkedList = new listCtor([0]);
				linkedList.prepend(item);
				const array = Array.from(linkedList);
				assert.equal(array[0], item);
			});
		});
		describe(listCtor.prototype.append.name, () => {
			const item = 1;
			it('with empty list, adds item to end', () => {
				const linkedList = new listCtor([]);
				linkedList.append(item);
				const array = Array.from(linkedList);
				assert.equal(array[0], item);
			});
			it('with non-empty list, adds item to end', () => {
				const linkedList = new listCtor([0]);
				linkedList.append(item);
				const array = Array.from(linkedList);
				assert.equal(array[1], item);
			});
		});
		describe(listCtor.prototype.head.name, () => {
			const item = 1;
			it('throws when empty', () => {
				const arrayList = new listCtor();
				assert.throws(() => arrayList.head());
			});
			it('returns first element', () => {
				const arrayList = new listCtor([0, 0, 0]);
				arrayList.prepend(item);
				assert.equal(arrayList.head(), item);
			});
		});
		describe(listCtor.prototype.tail.name, () => {
			it('throws when empty', () => {
				const arrayList = new listCtor();
				assert.throws(() => arrayList.tail());
			});
			it('returns tail', () => {
				const arrayList = new listCtor([1, 2, 3]);
				assert.deepEqual(Array.from(arrayList.tail()), [2, 3]);
			});
		});
	});
}
