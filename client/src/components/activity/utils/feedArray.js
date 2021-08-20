import dayjs from 'dayjs';
import isYesterday from 'dayjs/plugin/isYesterday';
import isToday from 'dayjs/plugin/isToday';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs().format();
dayjs.extend(isYesterday);
dayjs.extend(isToday);
dayjs.extend(customParseFormat);

function unixTimeToDate(time) {
    let date = dayjs.unix(time);
    if (date.isYesterday()) return 'Yesterday';
    if (date.isToday()) return 'Today';
    let oneWeekAgo = dayjs().subtract(1, 'week');
    if (date.isAfter(oneWeekAgo)) {
        return date.format('dddd');
    }
    return date.format('MMM DD');
}

function copyObjToArray(dataObject) {
    return Object.entries(dataObject).map(([key, val]) => {
        return { ...val }; //spread operator prevents state mutation by creating shallow copy
    });
}

function flagMissingHealthChecks(array) {
    let activityArray = [...array]
    return activityArray.map((entry, i, activityArray) => {
        if (entry.type === 'meal') {
            entry.missingHealthCheck = true;
            if (i === 0) return entry;
            if (activityArray[i - 1].type !== 'healthCheck') return entry;
            entry.missingHealthCheck = false;
            return entry;
        }
        return entry;
    });
}

export const build = (activityEntriesObj) => {
    let activityEntriesArrSorted = copyObjToArray(activityEntriesObj).sort(
        (a, b) => b.time - a.time
    );
    // let activityEntriesArrFLagged = flagMissingHealthChecks(activityEntriesArrSorted)
    let activityArrayByDate = activityEntriesArrSorted.reduce(
        (output, currEntry, index, currArray) => {
            currEntry.date = unixTimeToDate(currEntry.time);
            if (index === 0) {
                output.push([currEntry]);
                return output;
            }
            let lastEntry = currArray[index - 1];
            if (lastEntry.date === currEntry.date) {
                output[output.length - 1].push(currEntry);
                return output;
            }
            output.push([currEntry]);
            return output;
        },
        []
    );
    return activityArrayByDate.map((dayOfActivity) => {
        return (flagMissingHealthChecks(dayOfActivity));
    });
};

//OLD HARD TO READ CODE

// export function create(dataObject) {
//     console.log(dataObject)
//     let dataArray = toSortedArray(dataObject)
//     return dataArray.reduce((acc, currentEntry) => {
//         currentEntry.date = toDate(currentEntry.time);
//         let lastSubArray = acc[acc.length - 1];
//         if (!lastSubArray) return [[currentEntry]];
//         let lastEntry = lastSubArray[lastSubArray.length - 1];
//         if (lastEntry.date === currentEntry.date) {
//             acc[acc.length - 1].unshift(currentEntry);
//             return acc;
//         }
//         acc.push([currentEntry]);
//         return acc;
//     }, []);
// }
