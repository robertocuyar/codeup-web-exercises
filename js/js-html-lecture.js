"use strict";
console.log("The other js document says hello too!");
var candy = 150;

var chocolate = 123;
function message () {
    alert("Why are you looking at this page?");

    var response = confirm("Do you like bricks?");
    console.log("User Response: " + response);

    var response2 = prompt("What is the meaning of life?");
    console.log("User Second Response: " + response2);
}


function happyBirthday(name){
    console.log("Happy Birthday to You");
    console.log("Happy Birthday to You");
    console.log("Happy Birthday dear " + name);
    console.log("Happy Birthday to You!");
}
/*var adjective = "super";
var favoriteColor = function(color) {
    var question = "What is your favorite color?";
    var response = prompt(question);
    alert("Great, " + response + " is " + adjective + "! " + color + " is my favorite color!");
    console.log(question);
}

console.log(favoriteColor("yellow"));*/

var problem = function(a) {
    var answer = a + 3;
    return answer;
}
console.log(problem(3));
console.log(problem(6));