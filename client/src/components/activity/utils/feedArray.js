import dayjs from 'dayjs';
import isYesterday from 'dayjs/plugin/isYesterday';
import isToday from 'dayjs/plugin/isToday';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs().format();
dayjs.extend(isYesterday);
dayjs.extend(isToday);
dayjs.extend(customParseFormat);

function toDate(time) {
    let date = dayjs.unix(time);
    if (date.isYesterday()) return 'Yesterday';
    if (date.isToday()) return 'Today'
    let oneWeekAgo = dayjs().subtract(1, 'week')
    if (date.isAfter(oneWeekAgo)){
        return date.format('dddd')
    }
    return date.format('MMM DD');
}

function toSortedArray(dataObject){
    let dataArray = Object.entries(dataObject).map(([key, val])=>{
        return {...val} //IMPORTANT, CREATES SHALLOW COPY TO PREVENT MUTATING STATE
    })
    return dataArray.sort((a, b)=>{
        return b.time - a.time
    })
}

export function create(dataObject) { 
    let dataArray = toSortedArray(dataObject)
    return dataArray.reduce((acc, currentEntry) => {
        currentEntry.date = toDate(currentEntry.time);
        let lastSubArray = acc[acc.length - 1];
        if (!lastSubArray) return [[currentEntry]];
        let lastEntry = lastSubArray[lastSubArray.length - 1];
        if (lastEntry.date === currentEntry.date) {
            acc[acc.length - 1].unshift(currentEntry);
            return acc;
        }
        acc.push([currentEntry]);
        return acc;
    }, []);
}
