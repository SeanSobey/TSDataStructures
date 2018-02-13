import { ICollection } from '../ICollection';
import { INode } from './INode';

//https://en.wikipedia.org/wiki/Graph_(abstract_data_type)
export interface IGraph<T> extends ICollection<INode<T>> {
	adjacent(x: INode<T>, y: INode<T>): boolean;
	neighbors(x: INode<T>): boolean;
	addEdge(x: INode<T>, y: INode<T>): void;
	removeEdge(x: INode<T>, y: INode<T>): void;
}
