import moment from 'moment';
import translate from 'Utilities/String/translate';
import formatTime from './formatTime';
import isToday from './isToday';
import isTomorrow from './isTomorrow';
import isYesterday from './isYesterday';

function getRelativeDay(date, includeRelativeDate) {
  if (!includeRelativeDate) {
    return '';
  }

  if (isYesterday(date)) {
    return translate('Yesterday');
  }

  if (isToday(date)) {
    return translate('Today');
  }

  if (isTomorrow(date)) {
    return translate('Tomorrow');
  }

  return '';
}

// FormatDateTime
// "{formattedDate} {formattedTime}"

// FormatDateTimeRelative
// "{relativeDay}, {formattedDate} {formattedTime}"

function formatDateTime(date, dateFormat, timeFormat, { includeSeconds = false, includeRelativeDay = false } = {}) {
  if (!date) {
    return '';
  }

  const relativeDay = getRelativeDay(date, includeRelativeDay);
  const formattedDate = moment(date).format(dateFormat);
  const formattedTime = formatTime(date, timeFormat, { includeMinuteZero: true, includeSeconds });

  // console.log(dateFormat, timeFormat);
  // console.log(formattedDate, formattedTime);

  if (relativeDay) {
    return translate('FormatDateTimeRelative', { relativeDay, formattedDate, formattedTime });
  }
  return translate('FormatDateTime', { formattedDate, formattedTime });
}

export default formatDateTime;
