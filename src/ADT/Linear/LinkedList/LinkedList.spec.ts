import { LinkedList } from './LinkedList';
import { spec as collectionSpec } from '../../ICollection.spec';
import { spec as listSpec } from '../IList.spec';

collectionSpec(LinkedList);
listSpec(LinkedList);
