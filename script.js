//your JS code here. If required.
const myInput = document.getElementById("fname");

myInput.addEventListener("blur", function onBlur() {
	myInput.value= myInput.value.toUpperCase();
	
})