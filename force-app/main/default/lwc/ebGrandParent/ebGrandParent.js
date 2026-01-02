import { LightningElement } from 'lwc';

export default class EbGrandParent extends LightningElement {
    message;
    handleClose(event){
        console.log('GrandParent Called');
        this.message = 'GrandParent Called';
    }
}