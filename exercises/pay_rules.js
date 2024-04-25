/* var payRate = 17.3;
var hoursWorked = 45;
var overTime = 40;
var grossPay;

if (hoursWorked > 40) {
    grossPay = (payRate * overTime) + ((payRate * 1.5) * Math.abs(overTime - hoursWorked))
    console.log(grossPay)
} else {
    grossPay = (payRate * hoursWorked);
    console.log(grossPay)
}
 */


var payRate = 12.5;
var hoursWorked = 20;
var overTime = 40;
var grossPay;

if (hoursWorked > 40) {
    grossPay = (payRate * overTime) + ((payRate * 1.5) * Math.abs(overTime - hoursWorked))
    console.log(grossPay)
} else {
    grossPay = (payRate * hoursWorked);
    console.log(grossPay)
}


