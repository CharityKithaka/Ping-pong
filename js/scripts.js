$(document).ready(function ()  {
    //create an array
    var array = [];
    //begin the loop
    for (i = 1; i <= param; i++) {
        //detect values divisble by 3, 5 and 15
        if (i % 3 === 0 && i % 5 === 0 && i % 15 === 0 ) {
            //push to the array
            array.push("ping");
        }
        //detect values divisible by 3
        else if (i % 3 === 0) {
            array.push("pong");
        }
        //detect values divisible by 15
        else if (i % 15 === 0) {
            array.push("pingpong");
        }
    }
