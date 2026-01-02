import { LightningElement , track} from 'lwc';
import normalCalculator from './normalCalculator.html'
import scientificCalculator from './scientificCalculator'
import calculator from './calculator.html'

export default class Calculator extends LightningElement {

    chosenCalculatorType;
    @track currentValue = '';

    render(){
        return this.chosenCalculatorType === 'CALCULATOR' ? normalCalculator 
        : this.chosenCalculatorType === 'SCIENTIFIC CALCULATOR' ? scientificCalculator : calculator;
    }

    handleClick(event){
        this.chosenCalculatorType = event.target.label;
    }

    handleInput(event) {
        const value = event.target.dataset.val;
        this.currentValue += value;
    }

    calculate() {
        try {
            this.currentValue = Function(`return (${this.currentValue})`)().toString();
        } catch {
            this.currentValue = 'Error';
        }
    }

    handleMath(event) {
        const func = event.target.dataset.val;

        try {
            let value = Number(this.currentValue);
            let result;

            switch (func) {
                case 'sin':
                    result = Math.sin(value * Math.PI / 180); // degree → radian
                    break;

                case 'cos':
                    result = Math.cos(value * Math.PI / 180);
                    break;

                case 'tan':
                    result = Math.tan(value * Math.PI / 180);
                    break;

                case 'log':
                    result = Math.log10(value);
                    break;

                case 'sqrt':
                    result = Math.sqrt(value);
                    break;

                case 'cbrt':
                    result = Math.cbrt(value);
                    break;

                default:
                    return;
            }

            this.currentValue = result.toString();
        } catch {
            this.currentValue = 'Error';
        }
    }

    clearAll() {
         this.currentValue = '';
    }

    clearEntry() {
        if (!this.currentValue) return;

        // remove last number after operator
        this.currentValue = this.currentValue.replace(/[\d.]+$/, '');
    }




    backspace() {
        if (this.currentValue.length > 0) {
            this.currentValue = this.currentValue.slice(0, -1);
        }
    }



    closeCalculator(event){
        this.currentValue = '';
        this.chosenCalculatorType = 'calculator';
    }


}