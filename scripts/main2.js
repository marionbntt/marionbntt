"bouton d'utilisateur"
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");


function setUserName() {
	let myName = prompt("Veuillez saisir votre nom.");
    localStorage .setItem ("nom", myName) ;
	myHeading.textContent = ("Kakou Kakou " + myName );
}

if (!localStorage.getItem("nom")) {
	setUserName();
} else {
	let storeName = localStorage.getItem("nom");
	myHeading.textContent = "Kakou Kakou" + storeName ;
}

myButton.addEventListener("click", function () {
	setUserName();
});