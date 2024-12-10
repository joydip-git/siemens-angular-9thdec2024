import { Component } from '@angular/core';

@Component({
    selector: 'app-calculator',
    templateUrl: './calculator.component.html',
    styleUrl: './calculator.component.css'
})

export class CalculatorComponent {
    choice = 0;
    firstValue = 0;
    secondValue = 0;
    resultValue = 0;

    updateChoice(value: number) {
        this.choice = value
    }
    updateFirstValue(value: number) {
        this.firstValue = value
    }
    updateSecondValue(value: number) {
        this.secondValue = value
    }
    calculate() {
        switch (this.choice) {
            case 1:
                this.resultValue = this.firstValue + this.secondValue
                break;
            case 2:
                this.resultValue = this.firstValue - this.secondValue
                break;
            case 3:
                this.resultValue = this.firstValue * this.secondValue
                break;
            case 4:
                this.resultValue = this.firstValue / this.secondValue
                break;

            default:
                break;
        }
    }
}