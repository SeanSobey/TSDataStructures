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
				const collection = new collectionConstructor(iterable);
				assert.deepEqual(Array.from(collection), iterable);
			});
		});
		describe(collectionConstructor.prototype.isEmpty.name, () => {
			it('returns true when empty', () => {
				const collection = new collectionConstructor([]);
				assert.equal(collection.isEmpty(), true);
			});
			it('returns false when not empty', () => {
				const collection = new collectionConstructor([1]);
				assert.equal(collection.isEmpty(), false);
			});
		});
		describe(collectionConstructor.prototype.count.name, () => {
			it('returns 0 when empty', () => {
				const collection = new collectionConstructor([]);
				assert.equal(collection.count(), 0);
			});
			it('returns count', () => {
				const collection = new collectionConstructor([1, 2, 3]);
				assert.equal(collection.count(), 3);
			});
		});
	});
}
