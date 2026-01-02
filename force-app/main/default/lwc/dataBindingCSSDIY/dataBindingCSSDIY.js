import { LightningElement } from 'lwc';

export default class DataBindingCSSDIY extends LightningElement {
    screeninput;
    chosenStyle;
    allowedClasses = ['color-Red', 'color-Green', 'background-color:yellow','italic','Bold']; 


    handleinputchange(event){
        this.screeninput = event.target.value;
    }

    handlestyle() {
        if (this.allowedClasses.includes(this.screeninput)) {
            this.chosenStyle = this.screeninput;
        } else {
            alert('Invalid style name!');
        }
        this.screeninput = null;
    }

}