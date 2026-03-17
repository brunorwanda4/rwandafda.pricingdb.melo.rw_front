/**
 * Converts a number into a comma-separated string.
 * Example: 1000 -> "1,000"
 */
export const formatMoney = (num: number): string => {
  return new Intl.NumberFormat("en-US").format(num);
};
