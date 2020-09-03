const Holidays = require('date-holidays');

const hd = new Holidays('US', 'CO');

const thisYear = (new Date()).getFullYear();
const nextYear = thisYear + 1;

const hdDates = hd.getHolidays(nextYear).map(item => item.date);

console.log("@@@");
console.log(hdDates)



const dataFromDB = [
    {
        date: new Date("2020-08/30"),
        section: "morning"
    },
    {
        date: new Date("2020-09/05"),
        section: "morning"
    },
    {
        date: new Date("2020-09/05"),
        section: "afternoon"
    },
    {
        date: new Date("2020-09/07"),
        section: "morning"
    },
    {
        date: new Date("2020-09/07"),
        section: "morning"
    },
    {
        date: new Date("2020-09/23"),
        section: "morning"
    },
    {
        date: new Date("2020-09/27"),
        section: "morning"
    },
    {
        date: new Date("2020-09/27"),
        section: "afternoon"
    },
]

const shouldBlock = [];

// suppose that the date should be blocked if the date has its dupilcate in database. 
// didn't count on how many duplicates there are. it should be no more than 2 duplicates since there are no more than 2 sections per day
// for simplicity, we don't consider abnormal case that has more than 2 duplicates.
for(let i = 0; i < dataFromDB.length - 1; i++) {
    for(let j = i + 1; j < dataFromDB.length; j++) {
        if(dataFromDB[j].date.getTime() === dataFromDB[i].date.getTime()) {
            shouldBlock.push(dataFromDB[i]);
        }
    }
}
console.log(dataFromDB)
console.log(shouldBlock);

function checkIfdisable(selectedDate) {
    let disableMorning = false;
    let disableAfternoon = false;
    dataFromDB.forEach(item => {
        if (item.date === selectedDate) {
            if (item.section === "morning") {
                disableMorning = true
            } else if (item.section === "afternoon") {
                disableAfternoon = true
            }
        }
    });
}