import { IBag } from 'src/ADT/Associative/IBag';

//https://en.wikipedia.org/wiki/Set_(abstract_data_type)
export interface ISet<T> extends IBag<T> {
	intersection(set: ISet<T>): void;
	difference(set: ISet<T>): void;
}