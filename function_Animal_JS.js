function animal(name,eyes,ears,nose,legs,fur) {
	this.name = name;
	this.eyes = eyes;
	this.ears = ears;
	this.nose = nose;
	this.legs = legs;
	document.write("<br><br>Species: " + this.name);
	document.write("<br>Eyes: " + this.eyes);
	document.write("<br>Ears: " + this.ears);
	document.write("<br>Nose: " + this.nose);
	document.write("<br>Legs: " + this.legs);
	document.write("<br>Fur: "  + this.fur);
	
	var zebra = new animal("zebra",2,2,1,4,true);
	var snake = new animal("snake",2,0,1,0,false);
}