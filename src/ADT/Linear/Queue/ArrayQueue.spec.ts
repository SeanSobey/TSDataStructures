import { ArrayQueue } from './ArrayQueue';
import { spec as collectionSpec } from '../../ICollection.spec';
import { spec as queueSpec } from '../IQueue.spec';

collectionSpec(ArrayQueue);
queueSpec(ArrayQueue);
