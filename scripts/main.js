let myImage = document.querySelector("img");

myImage.addEventListener("click", function() {
	let mySrc = myImage.getAttribute("src");
	if(mySrc === "images/dino-kawaii.png"){
	  myImage.setAttribute("src", "images/dino-kawaii2.png");
	} else {
	  myImage.setAttribute("src", "images/dino-kawaii.png");
	}
});