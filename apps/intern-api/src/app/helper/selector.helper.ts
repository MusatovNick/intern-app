export function selector<T>(...args: Array<keyof T>): string {
  return args.join('.');
}