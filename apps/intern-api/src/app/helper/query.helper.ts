import { Identifiable } from '@intern/data';

export function query<T extends Identifiable>(queryObj: Partial<T>) {
  return queryObj;
}