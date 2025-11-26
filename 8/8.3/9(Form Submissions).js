// when you submit a form, the page refreshes(it used to). Now with JS there are single page apps

// in the form in html in the action="" you can type a url here, so that when you submit the form, it takes you to that page. It specifies where the form data is sent to. Ex when you search on a website, it takes you to a new page.

// on google maps when you type a location and the form is submitted, it does not take you to a new page, it takes you to that location( the page is the same, it is not refreshing). Same with youtube, it does not go to a new page(even tho the url is updating, the page is not refreshing). 

// to get it so that the page does not refresh, you have to attach the submit event via JS to the form, so that it does not refresh. How it looks like bellow:

const form = document.querySelector('#gymform');

form.addEventListener('submit',function(e){
    e.preventDefault();
    console.log ('You just submitted the form!');
    // alert('You just submitted the form!');
})// when you submit the form like this, it will display on the console for a moment, then disappear if you console.log and if you do alert, it will stay(the alert will). The problem is that as soon as you select ok, the page refreshes.If you have an action url link, it will still go there, it will not stop the default action of forms. If there was a lot of things going on, on the page, it would all be lost.

// To stop this you need to use, the event.preventDefault() method. Look above to see this. With this the screen will not refresh when the form is submitted. This will override the action url in the html(it will not go there). This is how you make a single page form(like the google map search and youtube search).

// you can use event.preventDefault()(or e or what even parameter you used); to prevent other types of default behaviour. Ex of anchor tage not ging to the link dwn bellow:

let a = document.querySelector('a');

a.addEventListener('click', function(e){
    e.preventDefault();
    console.log('No Google For You!');
}) // this will prevent the default behaviour of the link and will not take you to the url specified in the html.

// mostly done on a form.
