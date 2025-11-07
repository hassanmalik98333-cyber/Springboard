// local storage is a way of storing info in a browser(not a data base), not used for large applications(which goes to a data base). 

// a website which stores the data so that when the user refreshed the page, the info is remembered(not lost), this is because it is using local storage.

// type in localStorage in the console to see this(it stores the users info).

// there is also sessionStorage(very similar to localStorage). The difference is that localStorage has no expiration time, whereas sessionStorage does(whenever the browser session is done, basically whenever the tab is closed). 

// other than this, the same methods are used.

// !! 3(localStorage setItem/getItem) !! //

// all the keys that are stored in local and session storage, must be strings. Local storage will store everything as a string(even if it isnt a string).

// you can access it by using localStorage or window.localStorage, they are the same.

// to add local storage(use setItem): 

// localStorage.setItem('name', 'Hassan'). when you type this and refresh the page and go back to it and type localStorage in the console, it will still remain.

// if you do localStorage.setItem('count', 63), the 63 when inspected on the console when typing localStorage will appear as a string(can still get the number back the, does not mean that you can never turn it back to a number).

// to retrieve info(use getItem):

// localStorage.getItem('name') will return 'Hassan' (setItem from before). Can also do localStorage.name to get the same result.

// localStorage.count will give '63'. To get it back as a number you have to do:       const count = parseInt(localStorage.count), or parseFloat.

// can do let countPlus = count + 7; then do localStorage.setItem('count', countPlus), then do localStorage.count and it will be updated to '70'.

// all of this works with session storage as well.

// there are 2 quick methods to clear;

//1. localStorage.removeItem('name'); will remove just this

//2. localStorage(); will clear everything.