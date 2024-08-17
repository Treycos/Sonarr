import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import createLanguagesSelector from 'Store/Selectors/createLanguagesSelector';
import createSettingsSectionSelector from 'Store/Selectors/createSettingsSectionSelector';
import createUISettingsSelector from 'Store/Selectors/createUISettingsSelector';

export const useDateTimeFormat = (options?: Intl.DateTimeFormatOptions) => {
  const selected = useSelector(createSettingsSectionSelector('ui'));
  const stuff = useSelector(createUISettingsSelector());
  const lang = useSelector(createLanguagesSelector());

  console.log(stuff);

  return useMemo(
    () =>
      new Intl.DateTimeFormat('en', {
        hour12: stuff.timeFormat !== 'HH:mm',
        ...options,
      }),
    [options]
  );
};
