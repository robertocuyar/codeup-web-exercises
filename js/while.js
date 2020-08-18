var exponent = 1;
function exponentialProblem () {

    while (exponent <= 16) {
        console.log(Math.pow(2, exponent));
        exponent++;
    }
}
exponentialProblem();

var allCones = Math.floor(Math.random() * 50) + 50;
var soldCones = Math.floor(Math.random() * 5) + 1;
function areThereEnoughCones () {

    do {
        console.log (soldCones + ' cones sold');
       console.log(allCones = allCones - soldCones);
    } while (soldCones <= allCones);
    if (soldCones < allCones) {
        console.log(soldCones + ' cones sold');
    } else if (soldCones > allCones) {
        console.log("Cannot sell you " + soldCones + " cones. I only have " + allCones + " left.");
    } else {
        console.log("Yay! I sold them all!");
    }
}
areThereEnoughCones();

