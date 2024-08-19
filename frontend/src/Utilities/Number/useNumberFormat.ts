import { useMemo } from 'react';

export const useLocalNumberFormat = (options?: Intl.NumberFormatOptions) => {
  return useMemo(
    () => new Intl.NumberFormat(document.documentElement.lang, options),
    [options]
  );
};

// https://stackoverflow.com/questions/77215632/why-intl-numberformat-formats-1000000000-bytes-as-1bb-instead-of-1gb
export const useLocalFileSizeFormat = () => {
  return useLocalNumberFormat({
    style: 'unit',
    unit: 'digital-byte',
    notation: 'compact',
    unitDisplay: 'narrow',
    minimumFractionDigits: 2,
    maximumSignificantDigits: 2,
  });
};
