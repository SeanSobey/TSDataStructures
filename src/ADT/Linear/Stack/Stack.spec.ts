import { ArrayStack, LinkedListStack } from './Stack';
import { spec as collectionSpec } from '../../ICollection.spec';
import { spec as stackSpec } from '../IStack.spec';

collectionSpec(ArrayStack);
stackSpec(ArrayStack);

collectionSpec(LinkedListStack);
stackSpec(LinkedListStack);
