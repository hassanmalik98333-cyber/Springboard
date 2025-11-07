// inner html referes to all of the content of a given element                          document.querySelector('p').innerHTML will show eveneryting inside of the first paragraph including the tags <li class=''>... basically it shows the html.

// you can replace the html of one element with another element,                   let p = document.querySelector('p') and let ol = document.querySelector('ol'), to replace the paragraph with the content of the first ol do: p.innerHTML=ol.innerHTML

// you can add an image into the paragraph by, p.innerHTML = '<img src="https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg"/ width="200px">'

//to add onto existing content in an elelment without completely replacing it do:       p.innerHTML += '<img src="https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg"/ width="200px">'

// innerHTML is less common, one reason is that you need the string to be valid HTML for everything to work, which can be quite tedious to build. 