import { LightningElement } from 'lwc';

export default class TwoWayCSSDataBinding extends LightningElement {
    age;
    name;
    chosenStyle;
    handleAgeChange(event){
        this.age = event.target.value;
    }

    handleNameChange(event){
        this.name = event.target.value;
    }

    handleEligible(){
        if(this.age >= 18){
            this.chosenStyle = "backGroundGreen"
            this.age = null
            this.name = null
        }
        else{
            this.chosenStyle = "backGroundRed"
            this.age = null
            this.name = null
        }
    }
}