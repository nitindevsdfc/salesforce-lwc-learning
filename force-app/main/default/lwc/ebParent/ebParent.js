import { LightningElement } from 'lwc';

export default class EbParent extends LightningElement {
    message;
    handleClose(event){
        console.log('Parent Called');
        this.message = 'Parent Called';
    }

    handleDivClose(event){
        console.log('DIV CALLED!');
    }
}