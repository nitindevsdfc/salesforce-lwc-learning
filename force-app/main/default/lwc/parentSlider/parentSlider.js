import { LightningElement } from 'lwc';

export default class ParentSlider extends LightningElement {
    currentValue;
    silderChange(event){
        this.currentValue = event.target.value;
    }
}