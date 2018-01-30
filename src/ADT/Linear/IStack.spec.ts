import * as assert from 'assert';

import { StackConstructor } from './IStack';

export function spec(stackConstructor: StackConstructor<number>): void {
	describe(`${stackConstructor.name} as IStack,`, () => {
		const iterable = [0, 1, 2, 3];
		describe(stackConstructor.prototype.push.name, () => {
			it('works with no parameters', () => {
				assert.ok(new stackConstructor());
			});
			it('works with iterable', () => {
				assert.ok(new stackConstructor(iterable));
			});
		});
		describe(stackConstructor.prototype.pop.name, () => {
		});
		describe(stackConstructor.prototype.peek.name, () => {
		});
	});
}
