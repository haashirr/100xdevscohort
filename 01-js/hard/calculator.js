/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor() {
    this.result=0;
  }
  add(num) {
    this.result+=num;
    return this;
  }
  subtract(num) {
    this.result-=num;
    return this;
  }
  multiply(num) {
    this.result *= num;
    return this;
  }
  divide(num) {
    if(num==0) {
      throw new Error('Division by zero is not possible');
    }
    this.result /= num;
    return this;
  }
  clear() {
    this.result = 0;
    return this;
  }
  getResult() {
    return this.result;
  }
  calculate(exp) {
    const new_exp = exp.replace(/\s+/g, '');
    if(/[^0-9+\-*/().]/.test(new_exp)) {
      throw new Error("Invalid expression.");
    }
    if (new_exp.includes('/0')) {
      throw new Error('Division by zero is not possible');
  }
    try {
      this.result = eval(new_exp);
      return this.result;
    }
    catch(e) {
      throw new Error("Error evaluating expression.");
    }
  }
}
const calc = new Calculator();
//calc.add(5);
//console.log(calc.getResult()); 
//calc.subtract(2);
//console.log(calc.getResult());  

//calc.multiply(3);
//console.log(calc.getResult()); 

//calc.divide(3);
//console.log(calc.getResult());  

// Test complex expression
//console.log(calc.calculate("10 + 2 * (6 - (4 + 1)) + 7")); 
module.exports = Calculator;
