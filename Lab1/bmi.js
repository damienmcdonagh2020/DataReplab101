    // indindation
    // shift alt f
     //comment code
    // control K
    // Control C
    // uncomment
    // control K
    // Control u
class BMI {
   
    // Constructor used to initalize Data
    // in the class
   
    constructor(height, weight) {
      this.height = height;
      this.weight = weight;
    }

    //Method to calculate BMI
    calculateBMI()
    {
        let BMI = this.weight/(this.height**2);
        return BMI
    }
  }

  //instance of the class
  //Callling the class
  let myBMI = new BMI(2,100);

  //calling the method and viewing it in console . log
  console.log(myBMI.calculateBMI());