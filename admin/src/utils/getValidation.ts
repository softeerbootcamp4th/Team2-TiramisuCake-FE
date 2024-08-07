export function getValidation(str: string): boolean {
  const regex = /^[a-z0-9]*$/;
  return regex.test(str);
}
