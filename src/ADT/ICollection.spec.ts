import * as assert from 'assert';

import { CollectionConstructor } from './ICollection';

export function spec(collectionConstructor: CollectionConstructor<number>): void {
	describe(`${collectionConstructor.name} as ICollection,`, () => {
		const iterable = [0, 1, 2, 3];
		describe(collectionConstructor.name, () => {
			it('works with no parameters', () => {
				assert.ok(new collectionConstructor());
			});
			it('works with iterable', () => {
				assert.ok(new collectionConstructor(iterable));
			});
		});
		describe(Symbol.iterator.toString(), () => {
			it('works', () => {
				const list = new collectionConstructor(iterable);
				assert.deepEqual(Array.from(list), iterable);
			});
		});
		describe(collectionConstructor.prototype.isEmpty.name, () => {
			it('returns true when empty', () => {
				const list = new collectionConstructor([]);
				assert.equal(list.isEmpty(), true);
			});
			it('returns false when not empty', () => {
				const list = new collectionConstructor([1]);
				assert.equal(list.isEmpty(), false);
			});
		});
		describe(collectionConstructor.prototype.count.name, () => {
			it('returns count', () => {
				const list = new collectionConstructor([1, 2, 3]);
				assert.equal(list.count(), 3);
			});
		});
	});
}
