// Finally is not useful, but it is good to know that it exists.

// what ever code that is in finally will run regardless of an error or not.

try{
    undefined.pop();
} catch(e){
    console.log('Error')
    console.log(e);
}finally{
    console.log('finally');
}

//an example to use this in is when you have code to open a file and the finally section will close the file whether or not the file opens.

//You do not need a catch for finally.