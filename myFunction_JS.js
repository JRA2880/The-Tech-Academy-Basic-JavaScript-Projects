function myFunction(make,model) {
	this.make = make;
	this.model = model;
	document.write(this.make + " : " + this.model);
};
	var myCar1 = new myFunction("Ford","Mustang");
	var myCar2 = new myFunction("Ford", "Fl50");