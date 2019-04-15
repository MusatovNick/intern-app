import { IdentifiableInterface } from '@intern/data';

export function schema<T extends IdentifiableInterface>(
  config: Record<Exclude<keyof T, '_id'>, any>
): Record<Exclude<keyof T, '_id'>, any> {
  return config;
}