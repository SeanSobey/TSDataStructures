import { LinkedListQueue } from './LinkedListQueue';
import { spec as collectionSpec } from '../../ICollection.spec';
import { spec as queueSpec } from '../IQueue.spec';

collectionSpec(LinkedListQueue);
queueSpec(LinkedListQueue);
