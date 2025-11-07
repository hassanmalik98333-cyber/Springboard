// local storage is not a replacement for an actual server with a data base

// you dont have to come up with everything on your own, there a bunch of toggle switches that people made online using css and html, just coppy that.

const toggleSwitch = document.querySelector('input[type ="checkbox"]');

// on every check box you can look at the check property by typing in the console by doing: toggleSwitch.checked will show true or false.

// will create a class called dark that will be styled in css.

if(localStorage.getItem('darkMode')){// this is because if it is unchecked, darkMode will be deleted from localStorage(it is only there when the toggle switch is true). Basically if toggle switch is false, darkMode will not be a thing in localStorage.    if(localStorage.getItem('darkMode')) means if it exists in localStorage then do the bellow.
       document.body.className = 'dark';
       toggleSwitch.checked = true;// this will keep the toggle switch on the correct side (on or off). Without it, it would always reset to the off position even if dark mode was enabled.
};

toggleSwitch.addEventListener('click', function(e){
    // document.body.classList.toggle('dark');
    const checked = toggleSwitch.checked;// or can do {checked}=toggleSwitch
    if(checked){ // this is the same as saying if(checked=== true)
        localStorage.setItem('darkMode', true);
    }else{
        localStorage.removeItem('darkMode');
    }
    document.body.className = checked ? 'dark' : ''; // this means      condition ? valueIfTrue : valueIfFalse
   
    

})

// with this when you reload the page, it will keep the dark mode enables or disabled depending on what the user set it as(using localStorage).

// this is a bit complex, so study it.