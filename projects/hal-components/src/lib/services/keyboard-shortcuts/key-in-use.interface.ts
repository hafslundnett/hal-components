import { KeyName } from './key-name.enum';

export interface KeyInUse {
  keyName: KeyName;
  ctrlDown: boolean;
  altDown: boolean;
  shiftDown: boolean;
  description: string;
}
