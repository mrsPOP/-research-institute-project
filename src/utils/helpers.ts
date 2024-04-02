export function createUniqueKey(value: string | number) {
  const date = new Date();
  return `${value}_${date.getTime()}`;
}