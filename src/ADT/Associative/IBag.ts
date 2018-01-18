import { ICollection } from '../ICollection';

//https://en.wikipedia.org/wiki/Set_(abstract_data_type)#Multiset
export interface IBag<T> extends ICollection<T> {
	union(set: IBag<T>): void;
	subset(set: IBag<T>): boolean;
	contains(item: T): boolean;
}