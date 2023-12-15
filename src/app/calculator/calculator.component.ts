
import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  towrite = '0';
  currentvalue = '';
  historyList: string[] = [];

  writetoinput(value: string) {
    this.currentvalue = this.currentvalue + value;
    this.towrite = this.currentvalue;
  }


  equal() {
    const result = eval(this.currentvalue);
    const calculation = `${this.currentvalue} = ${result}`;
    this.towrite = result.toString();
    this.currentvalue = this.towrite;

    this.historyList.push(calculation);
    // this.showHistory();
  }



  clear() {
    this.currentvalue = '';
    this.towrite = '0';
   
  }

  back() {
    this.currentvalue = this.currentvalue.slice(0, -1);
    this.towrite = this.currentvalue;
    if (this.towrite === '') {
      this.towrite = '0';
    }
  }

  showHistory() {


    // console.log(this.historyList);


  }
  clearHistory(){
    this.historyList = [];
  }
}
