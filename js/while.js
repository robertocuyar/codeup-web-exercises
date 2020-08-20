var exponent = 1;
function exponentialProblem () {
    while (exponent <= 16) {
        console.log(Math.pow(2, exponent));
        exponent++;
    }
}
exponentialProblem();

var allCones = Math.floor(Math.random() * 50) + 50;

function areThereEnoughCones () {

    do {
        var soldCones = Math.floor(Math.random() * 5) + 1;
        console.log (soldCones + ' cones sold');
        if (soldCones < allCones) {
            console.log(soldCones + ' cones sold');
            console.log(allCones = allCones - soldCones);
        } else if (soldCones > allCones && allCones !== 0) {
            console.log("Cannot sell you " + soldCones + " cones. I only have " + allCones + " left.");
            break;
        } else if(allCones === 0){
            console.log("Yay! I sold them all!");
        }
    } while (0 < allCones);

}
areThereEnoughCones();


