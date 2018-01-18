export interface IComparable<T> {
	compareTo(other: T): -1 | 0 | 1;
}
