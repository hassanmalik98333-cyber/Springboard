
const brandName = document.querySelector('input[name ="brandname"]');
const brandColor = document.querySelector('input[name ="brandcolor"]');
const brandFont = document.querySelector('input[name ="fontsize"]');
const form = document.querySelector('#logoform');
const results = document.querySelector('#results');

function makeLogo(text,color,size) {
    const logo = document.createElement('h2');
    logo.innerText = text;
    logo.style.color = color;
    logo.style.fontSize = size + 'px'; // have to do + 'px' or it will not work because size 200 is not a thing, it needs to be size 200px or rem or em....
    return logo;
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    const newLogo = makeLogo(brandName.value, brandColor.value, brandFont.value);
    //(brandName.value, brandColor.value, brandFont.value) the argument
    results.appendChild(newLogo);
    // brandName.value = ''; // this will make it so that the brand name input dissapears when the form is submitted(not needed).
});

// the makeLogo function could be bellow or above the event listener, it does not matter.