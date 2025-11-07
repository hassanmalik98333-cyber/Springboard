function countDown(time){
    let timer = setInterval(function(){
      try{
      if (time<0){
         console.log('number cannot be negative');
      }} catch(e){
        console.log('number must be greater than 0')
      }} else if(time>0){
console.log(time)
time=time-1
        
        
      time--;
      if(time <= 0){
        clearInterval(timer);
        console.log('DONE!');
      }
      else {
        console.log(time);
      }
      
    },1000)}
  // if it is a negative number, type input must be greater that 0. And if the input is not a number, it should return a message, only numbers are accepted. The input should always be an integer(whole number). Strings should not be accepted.
  
  function randomGame(){
    let num;
    let times = 0;
    let timer = setInterval(function(){
      num = Math.random();
      times++
      console.log(num);
      if(num > .75) {
        clearInterval(timer);
        console.log("It took " + times + " try/tries.");
      }
    },1000)
  } 


