export function getValidation(str: string): boolean {
  const regex = /^[a-z0-9]*$/;
  return regex.test(str);
}

export function getNumberValidation(
  str: string,
  min: number,
  max: number
): boolean {
  const regex = /^[0-9]*$/;
  if (!regex.test(str)) return false;

  const number = parseInt(str, 10);
  return number >= min && number <= max;
}
