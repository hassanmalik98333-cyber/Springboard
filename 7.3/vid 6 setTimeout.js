
function greet(){
    console.log('hi');
}

function diss(){
    console.log('you are bad')
}

// greet());
// wait5seconds()); //This would hold all the code up for 5 econds due to single thread.
// diss();

//there are two different functions that have to do with timers

//1. set timeout:
// will wiat a number of ms like 1000ms before is calls some code setTimeout()) is build in(does not need to be defined).
// setTimeout accepts a function to call and a delay(func,delay), the delay number is ms, so 3000 is 3000ms. for the function you do not want to put in () as this would execute it immediately (so diss not diss()).

greet()
setTimeout(diss,3000); //Of you run this, you will get greet() immediate and diss after 3000ms.
setTimeout(diss,2000);
greet()
// unlike before this would execute immediately and would not have to wait for setTimeout, with alert, this code would only run after you click ok for the alert. This happens because the timers 3000ms is not handled by javascript, it is handled by the browser, so i by passes the single threaded nature of JS. Every line after setTimeout would execute before the the 3000ms. Can havemultiple setTimeout, they are independent.

const id = setInterval(diss,1000)

//this will call the diss function every 2000ms, continuously. You can clear this ins the console by typeing this into the console and seeing the number, lets say it is 1, then putting clearInterval(1). Can also save it into a variable and can clear the interval using the variable, clearInterval(id).