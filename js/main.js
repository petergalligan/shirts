function shirts(name, color, size, available, image) {
  this.name = name
  this.color = color
  this.size = size
  this.available = available
  this.image = image
}

var arguingT = new shirts('Argue', 'White', 'M', 12, 'img/arguing.jpg')
var glassesT = new shirts('Glasses', 'Blue', 'L', 4, 'img/glasses.jpg')
var guyT = new shirts('That Guy', 'Red', 'S', 7, 'img/guy.jpg')
var lionKingT = new shirts('Lion King', 'Yellow', 'XL', 2, 'img/lionKing.jpg')
var mehT = new shirts('Meh', 'Green', 'M', 10, 'img/meh.jpg')
var tubeT = new shirts('Tube', 'Black', 'XL', 6, 'img/tube.jpg')


var shirtArray = []
shirtArray.push(arguingT)
shirtArray.push(glassesT)
shirtArray.push(guyT)
shirtArray.push(lionKingT)
shirtArray.push(mehT)
shirtArray.push(tubeT)


//CREATE ELEMENTS FOR DISPLAY
for (var i = 0; i < shirtArray.length; i++){
var divElement = document.createElement('div')
var tNameElement = document.createElement('h2')
var tColorElement = document.createElement('h3')
var tSizeElement = document.createElement('h3')
var tAvailableElement = document.createElement('h3')
var tImageElement = document.createElement('img')

//CREATE TEXT NODES
var tNameText = document.createTextNode(shirtArray[i].name)
var tColorText = document.createTextNode("Color: " + shirtArray[i].color)
var tSizeText = document.createTextNode("Size: " + shirtArray[i].size)
var tAvailableText = document.createTextNode("In Stock: " + shirtArray[i].available)
var tImage = shirtArray[i].image

//ADDING CLASSES
tImageElement.className = "img-responsive"
divElement.className = "col-sm-3"


//ADD TEXT TO ELEMENTS
tNameElement.appendChild(tNameText)
tColorElement.appendChild(tColorText)
tSizeElement.appendChild(tSizeText)
tAvailableElement.appendChild(tAvailableText)
tImageElement.src = tImage

//APPEND FULL ELEMENTS TO DIV
divElement.appendChild(tNameElement)
divElement.appendChild(tImageElement)
divElement.appendChild(tColorElement)
divElement.appendChild(tSizeElement)
divElement.appendChild(tAvailableElement)



//APPEND FULL DIV TO HTML
document.getElementById("displayGallery").appendChild(divElement)
}




















