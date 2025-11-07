// getElementsByTagName allows the user to for example select all images on a page or all paragraphs, all anchor tags, etc...

// ex. document.getElementsByTagName('img')

// right I am just selecting the images with this, this is the first step, then write JS code that says when you hover over an image, do something with it.

// if you write document.getElementsByTagName('p'), you will see al paragraphs and underneath all the paragraphs, you can see everything about the paragraph including the children elements.

// unlike getElementById, getElementsByTagName is case insensitive so ('img')=('IMG')

// if you assign it to a variable let images = document.getElementsByTagName('img'), you can access each individual image like you would in an array so, images[0] will give the first image. if you type images without console.dir, it will should the images in an array like format. Can write images.length. You cannot to images.push or pop inclueds or images.forEach, none of these would work because it is not an actual array.