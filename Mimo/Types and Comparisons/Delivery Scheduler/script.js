const firstDay = "Monday";
const secondDay = "Friday";
const deliveryDay = "Friday";
const firstDayCheck = deliveryDay === firstDay;
const secondDayCheck = deliveryDay === secondDay;
const dayResult = firstDayCheck || secondDayCheck;
const requestAfterTime = 8;
const requestBeforeTime = 10;
const deliveryTime = 9;
const afterTimeCheck = deliveryTime >= requestAfterTime;
const beforeTimeCheck = deliveryTime <= requestBeforeTime;
const timeResult = beforeTimeCheck === afterTimeCheck;
const overallCheck = timeResult === dayResult;
console.log("Available days: " + firstDay + " and " + secondDay);
console.log("Delivery Day: " + deliveryDay);
console.log("Successful delivery on the first day? " + firstDayCheck);
console.log("Successful delivery on the second day? " + secondDayCheck);
console.log("Fulfilled Sheila's day preference? " + dayResult);
console.log(
  "Request delivery after " +
    requestAfterTime +
    " but before " +
    requestBeforeTime
);
console.log("Delivery Time: " + deliveryTime);
console.log("Delivery is after " + requestAfterTime + "? " + afterTimeCheck);
console.log("Delivery is before " + requestBeforeTime + "? " + beforeTimeCheck);
console.log("Fulfilled Sheila's time preference? " + timeResult);
console.log("Program scheduled well? " + overallCheck);
