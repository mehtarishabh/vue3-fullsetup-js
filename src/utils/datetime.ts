import { default as dayjs } from 'dayjs';
import { default as timezone } from 'dayjs/plugin/timezone';
import { default as utc } from 'dayjs/plugin/utc';

dayjs.extend(utc);
dayjs.extend(timezone);

export const formatDateTime = (_dayJs, _format = 'MMMM D, YYYY h:mm A') =>
  dayjs(_dayJs).format(_format);

export const nowTimestampMilli = () => dayjs().valueOf();

export const nowTimestampSeconds = () => dayjs().unix();

export const nowTimezone = () => {
  return dayjs.tz.guess();
};
