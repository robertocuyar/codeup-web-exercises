"use strict";
var returnMultiplicationTable = function () {
    var output ="";
    for (var i = 1; i < 11; i++) {
       var x = "7 x " + i + " = " + i * 7;
       if (i !== 10) {
           output = output.concat(x + "\n");
       }else {
           output = output.concat(x);
       }
        }
    return output;
}
var returnEvenOddMessage = function(input) {
    var output ="";
    input= Math.floor(Math.random() * 200);
    if (input % 2 === 0 ) {
        output = input + " is even"
    } else {
        output = input + " is odd"
    }
    return output
}
//var randomNumber = Math.floor(Math.random() * 200);
var returnTenEvenOddMessages = function(input){
    var response ="";

    for (var i = 0; i < 9; i++) {
        response = response.concat(returnEvenOddMessage(input) + "\n")
        if (i === 8) {
            response = response.concat(returnEvenOddMessage(input))
        }
    }
    return response;
}
var returnNumberSail = function() {
    let output = ""
    for (var i = 1; i <= 9; i++) {
        var row = ("" + i).repeat(i);
        if (i !== 9) {
            output = output.concat(row + "\n");
        } else {
            output = output.concat(row);
        }
    }
    return output;
}

var returnCountDownFrom100InFives = function(){
    let output = '';
    for (var i = 0; i <= 19; i++) {
        var row = 100 - 5 * i;
        if (i !== 19) {
            output = output.concat(row + '\n');
        } else { output = output.concat(row);}
    }
return output;
}







