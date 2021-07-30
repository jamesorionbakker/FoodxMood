import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs().format();
dayjs.extend(customParseFormat);

export function stringToUnixTime(date, time) {
    return dayjs(`${date} ${time}`, 'YYYY-MM-DD HH:mm').unix();
}
export function unixToDateString(unixTime = dayjs().unix()) {
    return dayjs.unix(unixTime).format('YYYY-MM-DD');
}
export function unixToTimeString(unixTime = dayjs().unix()) {
    return dayjs.unix(unixTime).format('HH:mm');
}
