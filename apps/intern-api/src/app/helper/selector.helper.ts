import { Identifiable } from '@intern/data';

export function selector<T extends Identifiable>(...args: Array<keyof T>): string {
  return args.join(' ');
}