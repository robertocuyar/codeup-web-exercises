"use strict";
console.log("Hello from external JavaScript");

alert("Welcome to my Website!");
var response = prompt("What is your favorite color?");
console.log(response);
alert(response + " is my favorite color too!");

var mermaid = prompt("How many days did you rent The Little Mermaid for?");
var brother = prompt("How many days did you rent Brother Bear for?");
var hercules = prompt("How many days did you rent Hercules for?");
var days = prompt("How much does it cost to rent a movie per day?");
var total = Number(days) * (Number(mermaid) + Number(brother) + Number(hercules));
alert("You now owe $" + total);

var google = prompt("How much does Google pay?");
var amazon = prompt("How much does Amazon pay?");
var facebook = prompt("How much does Facebook pay?");
var googleTime =prompt("How many hours did you work for Google?");
var amazonTime =prompt("How many hours did you work for Amazon?");
var facebookTime =prompt("How many hours did you work for Facebook?");

var moneyTotal = Number(google) * Number(googleTime) + Number(amazon) * Number(amazonTime) + Number(facebook) * Number(facebookTime);
alert("Congratulations! You have made $" + moneyTotal);

var classStatus = confirm("Is the class you are trying to enroll open?");
var classSchedule = confirm("Do you have an open slot for the class time in your current schedule?");
var enrollment = classStatus && classSchedule;
alert("Your enrollment status is " + enrollment);

var items = confirm("Did you buy more than 2 items?");
var offer = confirm("Has the super special offer on our product expired?");
var member = confirm("Are you a super special premium member?");

var eligibility = (items || member) && !offer;
alert("Your claim to the offer is " + eligibility + '!');
/*if (eligibility == true) {alert("You have been approved for the offer!")}
    else {alert("You have not been approved for the offer.")};*/
