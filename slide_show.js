
var slideimages = new Array() // create new array to preload images
slideimages[0] = new Image() // create new instance of image object
slideimages[0].src = "images/dsIII-0.jpg" // set image src property to image path, preloading image in the process
slideimages[1] = new Image()
slideimages[1].src = "images/dsIII-1.jpg"
slideimages[2] = new Image()
slideimages[2].src = "images/dsIII-2.jpg"
slideimages[3] = new Image()
slideimages[3].src = "images/dsIII-3.jpg"

var step=0

function slideit(){

 if (!document.images)   //if browser does not support the image object, exit.
  return
 document.getElementById('slide').src = slideimages[step].src
 if (step<3)
  step++
 else
  step=0
 //call function "slideit()" every 2.5 seconds
 setTimeout("slideit()",2500)
}

slideit()