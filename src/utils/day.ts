import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

/**
 * @example
 * timeToX('1990-01-01') // "31 years ago"
 * @param {Date} date date to be compare
 * @returns {String} of relative time to X.
 */

// function timeToX(data:Date|string):string{
//     return dayjs().to(dayjs());
// }

 function timeToX(dateString:string) {
   const inputDate = new Date(dateString);
   const currentDate = new Date();

   const timeDifference = currentDate.getTime() - inputDate.getTime();
   const secondsDifference = timeDifference / 1000;
   const minutesDifference = secondsDifference / 60;
   const hoursDifference = minutesDifference / 60;
   const daysDifference = hoursDifference / 24;
   const weeksDifference = daysDifference / 7;
   const monthsDifference = daysDifference / 30;

   if (monthsDifference >= 1) {
     return `${Math.floor(monthsDifference)} month${
       Math.floor(monthsDifference) > 1 ? "s" : ""
     } ago`;
   } else if (weeksDifference >= 1) {
     return `${Math.floor(weeksDifference)} week${
       Math.floor(weeksDifference) > 1 ? "s" : ""
     } ago`;
   } else if (daysDifference >= 1) {
     return `${Math.floor(daysDifference)} day${
       Math.floor(daysDifference) > 1 ? "s" : ""
     } ago`;
   } else if (hoursDifference >= 1) {
     return `${Math.floor(hoursDifference)} hour${
       Math.floor(hoursDifference) > 1 ? "s" : ""
     } ago`;
   } else if (minutesDifference >= 1) {
     return `${Math.floor(minutesDifference)} minute${
       Math.floor(minutesDifference) > 1 ? "s" : ""
     } ago`;
   } else if (secondsDifference >= 1) {
     return `${Math.floor(secondsDifference)} second${
       Math.floor(secondsDifference) > 1 ? "s" : ""
     } ago`;
   } else {
     return "just now";
   }
 }

export { timeToX };

