import { LightningElement, api } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact'
import FIRST_NAME from '@salesforce/schema/Contact.FirstName'
import LAST_NAME from '@salesforce/schema/Contact.LastName'
import EMAIL from '@salesforce/schema/Contact.Email'
import ACCOUNTID from '@salesforce/schema/Contact.AccountId'
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { RefreshEvent } from 'lightning/refresh';



export default class WireCreateContactRecord extends LightningElement {

    @api recordId;
    firstName;
    lastName;
    email;

    handleChange(event) {
        const input = event.target;
        const { name, value } = input;
        
        this[name] = value;

        console.log(this.firstName, this.lastName, this.email);
    }


    connnectedCallback(){
        console.log('recordId', this.recordId);
    }

    handleCreateContact() {

            const fields = {};
            fields[FIRST_NAME.fieldApiName] = this.firstName;
            fields[LAST_NAME.fieldApiName]  = this.lastName;
            fields[EMAIL.fieldApiName]      = this.email;
            fields[ACCOUNTID.fieldApiName]  = this.recordId; 

            const recordInput = {
                apiName: CONTACT_OBJECT.objectApiName,
                fields
            };

        createRecord(recordInput)
            .then(result => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Contact created successfully',
                        variant: 'success'
                    })
                );
            this.resetFields();
            this.dispatchEvent(new RefreshEvent());
            })
            .catch(error => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error',
                        message: error.body.message,
                        variant: 'error'
                    })
                );
            });
    }

    resetFields() {
            this.firstName = '';
            this.lastName  = '';
            this.email     = '';

            const inputs = this.template.querySelectorAll('lightning-input');
            inputs.forEach(input => {
                input.value = '';
            });
    }



}