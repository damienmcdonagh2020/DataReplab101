class Vechile {
   
    // Constructor used to initalize Data
    // in the class
   
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
    //class to methos make model year and take information in from user
    information(){
        console.log(`make: ${this.make}`);
        console.log(`model: ${this.model}`);
        console.log(`year: ${this.year}`);
    }

}

// Create instance of the class
let myVechile = new Vechile('Vw', 'Polo', '141');
// View the instance
myVechile.information();

//Wrtie a child class
class Car extends Vechile{

    //constructor 4 arguments
    constructor(make, model, years, doors){
        super(make,model,years);
        this.doors = doors;
    }

    information(){
        //calling parent method
        super.information();
        console.log(`doors: ${this.doors}`);
    }
}

let newcar = new Car('Vw', 'Polo', '141', '5');
newcar.information();
