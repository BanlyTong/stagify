export const isNotANumber = (expectedValue: string): boolean => {
  if (Number.isNaN(Number(expectedValue))) {
    return true;
  }

  return false;
};
