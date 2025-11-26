
// !! 8.2 html(for vid 3).HTML!!
// <p>dasdasdsa</p> the text in between the paragraph tags is the innter text

 // you can do let h1 = document.querySelector('h1'), then type h1.innerText to get the innter text of this element.

 // you can change the inner text by doing h1.innerText = "Hello", it will change to hello. This is modifying the DOM.

 // inner text seems easy, and for h1 it is, but some inner text has nested content like a link inside of a paragraph.

 // the first paragraph has nested content if you do    let p = document.querySelector('p'),    and p.innerText, it will give all the content including the <i><Sequoiadendron giganteum/i> tag nested in the paragraph.

 // to get the <i> nested inside of the <p> you have to do                             i = document.querySelector('p i'), then i.innerText, will give 'Sequoiadendron giganteum' you can do caps = i.innerText.toUpperCase() then do i.innerText = caps, to change the inner text to upper case, or do i.innerText=i.innerText.toUpperCase()

 // if you do this with an unordered list and replace the inner text of the  unordered list, it will remove every list inside of ul list. innerText is great for changing tiny text like an h1. Other ways to change more complext elements with nested content.

 //!! textContent !! 8.2(vid 3 part 2).HTML!!

 // another way to change is, textContent, it is similar to innerText and is used the same way but has some differences.
// textContent will show everything including the style tags   h1 {
     //   color: pink;
   // } and console.log("HELLOO!!!!"), innerText does not show this.

   // you can hide content in the html by doing <h4 style = 'display:none'><h4>. innerText will not show this, but textContent will show this.
   
   //!! DIFFERENCES

   //    innerText is aware of the rendered appearance of text, while textContent is not. textContent does not take into account what is hidden on the page(runs in the background) vs what is actually shown on the screen.
   // inner text only shows 'human readable' content, text content shows every element including CSS styling which would not show up on the actual screen.