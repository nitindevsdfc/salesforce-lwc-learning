import { LightningElement } from 'lwc';

export default class DataBindingCSSDIY3 extends LightningElement {
    chosenstyle = "background";
    userinputvariable;
    outputvariable;

    handleinputchange(event){   
        this.userinputvariable = event.target.value;
    }

    checkinfo(){
        switch(this.userinputvariable){
            case '%':
                this.outputvariable = 'mod operator';
                break;
            case '{}':
                this.outputvariable = 'Object literal';
                break;
            case '[]':
                this.outputvariable = 'Create an array';
                break;
            case '=>':
                this.outputvariable = 'Arrow Function';
                break; 
            case '!':
                this.outputvariable = 'Not Operator';
                break; 
            case '==':
                this.outputvariable = 'Equal to operator';
                break;
            case '===':
                this.outputvariable = 'Strict equal to operator';
                break;
            case '||':
                this.outputvariable = 'Logical OR operator';
                break;
            case '&&':
                this.outputvariable = 'Logical AND operator';
                break;
            default:
                this.outputvariable = 'Please enter a valid input'; 
        }
        this.userinputvariable = null;
    }

}