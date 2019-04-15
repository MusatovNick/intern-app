import { IdentifiableInterface } from '@intern/data';

export function query<T extends IdentifiableInterface>(queryObj: Partial<T>) {
  return queryObj;
}