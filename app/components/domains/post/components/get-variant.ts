export const getVariant = <T extends string>(
  variants: Partial<Record<T, boolean>>,
  defaultVariant: string
): T => {
  for (const key in variants) {
    if (variants[key]) {
      return key;
    }
  }

  return defaultVariant as T;
};
