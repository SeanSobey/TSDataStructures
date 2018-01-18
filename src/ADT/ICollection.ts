export interface ICollection<T> extends Iterable<T> {
	isEmpty(): boolean;
	count(): number;
	add(item: T): void;
	remove(item: T): void;
	clear(): void;
}
