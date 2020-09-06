// import dependencies
const Holidays = require('date-holidays');

const hd = new Holidays('US', 'CO');

const thisYear = (new Date()).getFullYear();
const nextYear = thisYear + 1;

// get holidays for this year and next year
const hdDatesThisYear = hd.getHolidays(thisYear).map(item => item.date);
const hdDatesNextYear = hd.getHolidays(thisYear).map(item => item.date);

// merge tow arrays together
const hdDates = hdDatesThisYear.concat(hdDatesNextYear)



export function findBlockDates(jobs) {
   
    const bookedDates = [];

    // suppose that the date should be blocked if the date has its dupilcate in database. 
    // didn't count on how many duplicates there are. it should be no more than 2 duplicates since there are no more than 2 sections per day
    // for simplicity, we don't consider abnormal case that has more than 2 duplicates.
    for(let i = 0; i < jobs.length - 1; i++) {
        for(let j = i + 1; j < jobs.length; j++) {
            if(jobs[j].selectedDate.getTime() === jobs[i].selectedDate.getTime()) {
                bookedDates.push(jobs[i].selectedDate);
            }
        }
    }
    
    const blockDates = bookedDates.concat(hdDates);

    return bookedDates;

}