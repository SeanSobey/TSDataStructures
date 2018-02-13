import { DoublyLinkedList } from './DoublyLinkedList';
import { spec as collectionSpec } from '../../ICollection.spec';
import { spec as listSpec } from '../IList.spec';

collectionSpec(DoublyLinkedList);
listSpec(DoublyLinkedList);
