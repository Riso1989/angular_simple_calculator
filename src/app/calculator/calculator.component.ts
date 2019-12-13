import { Component } from "@angular/core";

@Component({
  selector: "app-calculator",
  templateUrl: "./calculator.component.html",
  styleUrls: ["./calculator.component.scss"]
})
export class CalculatorComponent {
  currentNumber = '0';
  equation = '';
  firstNumber = null;
  operator = null;
  operatorUsed = false;
  secondNumberExpected = false;
  private round = 10000;

  constructor() { }

  ngOnInit() {
  }

  public setNumber(n: string) {
    if (!this.secondNumberExpected) {
      this.currentNumber === '0'|| this.currentNumber === 'NaN' ? this.currentNumber = n : this.currentNumber += n;

    } else {
      this.currentNumber = n;
      this.secondNumberExpected = false;

    }
  }

  getDecimal(){
    if(!this.currentNumber.includes('.')){
        this.currentNumber += '.'; 
    }
  }

  public getOperation() {
    let num = Number(this.currentNumber);
    if(this.operatorUsed){
    switch (this.operator){
      case '+':
      num = (Number(this.firstNumber) + Number(this.currentNumber)); 
      console.log(num)
      break;
      case '-': 
      num = (Number(this.firstNumber) - Number(this.currentNumber)); 
      break;
      case '*': 
      num = (Number(this.firstNumber) * Number(this.currentNumber));
      break; 
      case '/': 
      num = (Number(this.firstNumber) / Number(this.currentNumber)); 
      break;
    }
    this.equation += ' ' + this.currentNumber;
  }
    num = Math.round(num * this.round) / this.round;
    this.currentNumber = String(num);
    this.secondNumberExpected = true;
    this.operatorUsed = false;
  }



  public clear() {
  this.firstNumber = '0';
  this.currentNumber = '0';
  this.equation = '';
  }

  public setOperation(o: string) {
    this.secondNumberExpected = true;
    this.equation = this.currentNumber + ' ' + o; 
    switch (o){
      case '+-':
      this.currentNumber = String(Number(this.currentNumber) * -1);
      break;
      case '^': 
      this.currentNumber = String(Number(this.currentNumber) * Number(this.currentNumber));
      break;
      case 'sqrt': 
      this.currentNumber = String(Math.sqrt(Number(this.currentNumber)));
      break;
      case '<': 
      if (this.currentNumber.length > 1) {
      this.currentNumber = this.currentNumber.substring(0, this.currentNumber.length - 1);
      } else {
        this.currentNumber = '0';
      }
      break; 
      default: 
      this.firstNumber = this.currentNumber;
      this.operator = o;
      this.operatorUsed = true;
    }
    this.currentNumber = String( Math.round(Number(this.currentNumber) * this.round) / this.round);
  }
}