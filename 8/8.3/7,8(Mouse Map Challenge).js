// make a page that has nothing on it but the background color changes depending on the mouse position on the screen.

// use the x and y coordinates and map that to generate a color. 

// use google to find the specific even and try those events to see which one is correct.

// you can attach the even listener to the document itself: 

document.addEventListener('mousemove',function(e){
    //    console.log(`X:${e.pageX} ;` , `Y:${e.pageY}`);
      let g= Math.round((e.pageX * 255) / window.innerWidth);
      let b = Math.round((e.pageY * 255) / window.innerHeight);
      console.log(0,g,b);
      document.body.style.backgroundColor = `rgb(0, ${g}, ${b})`;
     

});

//can do: console.log(e.pageX, e.pageY)