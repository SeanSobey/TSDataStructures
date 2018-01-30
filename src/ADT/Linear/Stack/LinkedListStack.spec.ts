import { LinkedListStack } from './LinkedListStack';
import { spec as collectionSpec } from '../../ICollection.spec';
import { spec as stackSpec } from '../IStack.spec';

collectionSpec(LinkedListStack);
stackSpec(LinkedListStack);
