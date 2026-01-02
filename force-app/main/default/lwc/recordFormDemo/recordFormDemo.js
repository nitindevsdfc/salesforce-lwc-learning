import { LightningElement, api } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
// import Account_Object from '@salesforce/schema/Account';
// import Account_Name from '@salesforce/schema/Account.Name';
// import Annual_Revenue from '@salesforce/schema/Account.AnnualRevenue';
// import Phone from '@salesforce/schema/Account.Phone';


export default class RecordFormDemo extends LightningElement {
    @api objectApiName;
    @api recordId;
    // fields=[Account_Name,Annual_Revenue,Phone]; 

    handleOnSuccess(event){
        console.log(event.detail);
        const evt = new ShowToastEvent({
            title : 'Account',
            message : 'Account Updated'+ ' ' +event.detail.id,
            variant : 'success'
        })
        this.dispatchEvent(evt);
    }
}