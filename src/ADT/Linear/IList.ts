import { ICollection } from 'src/ADT/ICollection';

//https://en.wikipedia.org/wiki/List_(abstract_data_type)
export interface IList<T> extends ICollection<T> {
	prepend(item: T): void;
	append(item: T): void;
	head(): T;
	tail(): IList<T>;
}