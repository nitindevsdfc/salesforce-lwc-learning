import { LightningElement, track } from 'lwc';

export default class ConditionalRendering extends LightningElement {

    isShoppingChosen=false;
    isReadingChosen=false;
    ischosen = "red";
    
    handleShoppingChange(event){
        this.isShoppingChosen = event.target.checked;
        this.isReadingChosen = false;
        // this.template.querySelector(".readCheck").checked = false;
        this.refs.readCheck.checked=false;
        console.log(`Shopping : ${this.isShoppingChosen}`);
    }

    handleReadingChange(event){
        this.isReadingChosen = event.target.checked;
        this.isShoppingChosen = false;
        // this.template.querySelector(".shopCheck").checked = false;
        this.refs.shopCheck.checked=false;
        console.log(`Reading : ${this.isReadingChosen}`);
    }
}