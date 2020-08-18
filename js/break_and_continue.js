var isMyNumberOdd = function (input) {
    input = prompt('Type in an odd number from 1 to 50.');
   for (var i = 1; i <=50; i++) {
       if (input % 2 !== 0 && input < 50 && input > 0) {
           alert(input + " is an odd number!");
           break;
       } else {
           input = prompt('Type in an odd number from 1 to 50.');
       }
   }
}
isMyNumberOdd();

var isMyNumberOddList = function (input) {
    input = +prompt('Type in an odd number from 1 to 50.');
    console.log("Number to skip is: " + input);
    for (var i = 1; i <=50; i++) {
        if (i % 2 !== 0 && i !== input) {
            console.log("Here is an odd number: " + i);
        } else if (i === input && input % 2 !== 0) {
            console.log("Yikes! Skipping number: " + input);
        } else if (!(input % 2 !== 0)){
            input = prompt('Type in an odd number from 1 to 50.');
        } else {
            continue;
        }
    }
}
isMyNumberOddList();


