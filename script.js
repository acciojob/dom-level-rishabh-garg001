//your JS code here. If required.
let element = document.elementById("level")
let level = 0
while( element !== null ){
	level++
	element = element.parentElement
}

alert("The level of the element is: " + level)