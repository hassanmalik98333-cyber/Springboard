// will make a color picker where the user sees the color on the pag and when they click it, it will copy the color hex code.

// will add multiple buttons and each button will be one of the colors, when you click on it, it will change the background color to that color.


     const colorsSection = document.querySelector('#colors');

     colorsSection.addEventListener('click', function(e){
       console.log(e.target.dataset.hex);
       let backgroundColor = e.target.dataset.hex;
       document.body.style.backgroundColor = backgroundColor;
     })