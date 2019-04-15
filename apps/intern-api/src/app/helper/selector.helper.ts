import { IdentifiableInterface } from '@intern/data';

export function selector<T extends IdentifiableInterface>(...args: Array<keyof T>): string {
  return args.join('.');
}