/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

 function createEmployeeRecord(array){
    let object = {
        firstName:array[0],
        familyName:array[1],
        title:array[2],
        payPerHour:array[3],
        timeInEvents:[],
        timeOutEvents:[]
    }
    return object;
}
function createEmployeeRecords(array){
    let newObject;
    let resultArray = [];
    array.forEach((array) => {
        newObject = createEmployeeRecord(array);
        resultArray.push(newObject);
    });
    return resultArray;
}
let arrayOfArrays = [['Dennis','Rotich','Senior Dr.',250],['Derrick','Rotich','Junior Dr.',150]];

function createTimeInEvent(dateStamp){
    dateStamp = dateStamp.split('');
    let TimeIn = {};
    let timeStamp = [];
    let date = [];
    date = [...dateStamp].splice(0,10);
    timeStamp = [...dateStamp].splice(11,4);
    timeStamp = timeStamp.join('');
    date = date.join('');
    TimeIn.hour = parseInt(timeStamp);
    TimeIn.date = date;
    TimeIn.type = "TimeIn";
    this.timeInEvents.push(TimeIn);
    return this;
 }

function createTimeOutEvent(dateStamp){
    dateStamp = dateStamp.split('');
    let TimeOut = {};
    let timeStamp = [];
    let date = [];
    date = [...dateStamp].splice(0,10);
    timeStamp = [...dateStamp].splice(11,4);
    timeStamp = timeStamp.join('');
    date = date.join('');
    TimeOut.hour = parseInt(timeStamp);
    TimeOut.date = date;
    TimeOut.type = "TimeOut";
    this.timeOutEvents.push(TimeOut);
    return this;
}

function hoursWorkedOnDate(date){
    const timeIn = this.timeInEvents.find(e => e.date === date);
    const timeOut = this.timeOutEvents.find(e => e.date === date);
    if(!timeIn || !timeOut){ return 0};
    let timeInHour = timeIn.hour.toString();
    let timeOutHour = timeOut.hour.toString();
    timeInHour = parseInt(timeInHour.slice(0,(timeInHour.length - 2),10));
    timeOutHour = parseInt(timeOutHour.slice(0,(timeOutHour.length - 2),10));
    return timeOutHour - timeInHour;
}

function wagesEarnedOnDate(date){
    const workedHours = hoursWorkedOnDate.call(this,date);
    const hourlyRate = this.payPerHour;
    return workedHours * hourlyRate;
}

function findEmployeeByFirstName(array,firstName){
    return array.find(record => record.firstName === firstName);
}

function calculatePayroll(array){
    let total = 0;
    array.forEach((employee)=>{
        total += allWagesFor.call(employee);
    })
    return total;
}
