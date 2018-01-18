import { ICollection } from '../ICollection';

//https://en.wikipedia.org/wiki/Associative_array
export interface IMap<TKey, TValue> extends ICollection<IKeyValuePair<TKey, TValue>> {
	add(value: TValue | IKeyValuePair<TKey, TValue>, key?: TKey): void;
	replace(value: TValue, key: TKey): void;
}

interface IKeyValuePair<TKey, TValue> {
	readonly key: TKey;
	readonly value: TValue;
}