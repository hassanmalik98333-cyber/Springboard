// data attributes allows us to store meta data(associated info) for a given element without showing it to the user.

// these are things that a user should not see, but is accessible info in css and JS.

// these attributes start with data- (data-anything you want).

// ex in html

// <ul>
//   <li data-model="model 3" data-year="1436h">Tesla</li>
//   <li data-model="cry" data-year="1439h">Toyota</li>
// </ul>

// the data is not shown to he user, but is known in the background(or if the user looks at the source code). Can add as many data-whatever as you want.

// can access the data- by using events (upon a click for example).

const ul = document.querySelector('#cars');
// remember to use the parent element as a delegator.

ul.addEventListener('click', function(e){
    // console.log(e.target.getAttribute('data-year'));
    console.log(e.target.dataset.year);//gives same result as above.
    // console.log(e.target.dataset);// this displays all the data sets in an object.

    e.target.dataset.year = '1443h'; // this will change the year on every li you click. Ths one does not make sense for obvious reasons.

    e.target.dataset.sold ='true';// this will add a new data called sold.
    console.log(e.target.dataset.sold);
});

// if you have a data base and you want to remove a car for example, it is not enough to remove it from the DOM, you must inform the data base the id of the car that needs to be removed(in this case use data-id). You can also do setAttribute to add an attribute: e.target.setAttribute('data-window', 'tinted').

// if you want to access all the data attributes for a given element by using dataset (above). It looks and behaves like an object.

// you can add values and change them as well.