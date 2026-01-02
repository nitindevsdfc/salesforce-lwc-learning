import { LightningElement } from 'lwc';

export default class EbChild extends LightningElement {
    
    handleClick(event){
        this.dispatchEvent(new CustomEvent('close',{bubbles : true, composed : true}))
    }
}