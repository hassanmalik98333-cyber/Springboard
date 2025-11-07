// JS is a single threaded language, a thread represents a single process that is running at some given point of time. Some languages are multi threaded, they can have multiple threades going at the same time. Sometimes JS being single threaded can cause problems(ex bellow).

function greet(){
    console.log('hi');
}

function diss(){
    console.log('you are bad')
}

greet();
alert('I am alert');
diss();

//if you just run greet and diss, they will both run hi, you are bad. Since JS is single threaed it goes one thread at a time, so it goes from greet to alert to diss, this means that diss will not run until you click ok on alter in the browser, this is the flaw. Diss and anything afterwards would not run until you click ok on the alert. JS cannot have alert(in this case) running at the same time as the code after. There are ways to get around this. This is an issue if you have a timer for ex because the code will not run until the timer expires(there are ways to get around this flaw in the next video).