import { LightningElement, wire, api } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import LAST_NAME_FIELD from '@salesforce/schema/Contact.LastName'
import EMAIL_FIELD from '@salesforce/schema/Contact.Email'

export default class WireServiceContact extends LightningElement {

    @api recordId;
    _lastName;
    _email;

    @wire(
        getRecord,
        {
         recordId : '003dM00001TES01QAH',
         fields : [LAST_NAME_FIELD, EMAIL_FIELD]
        }
    )


    // Function is used to get the stram of data from wire service 
    contactDetailsFunction({data, error}){
        if(data){
            console.log(data);
            console.log(data.fields);
            console.log(data.fields.Email.value);
            console.log(data.fields.LastName.value);
            this._email = data.fields.Email.value;
            this._lastName = data.fields.LastName.value;
        }else if(error){
            console.log(error);
        }
    }


    @wire(
        getRecord,
        {
            recordId : '003dM00001TES01QAH',
            fields : [LAST_NAME_FIELD, EMAIL_FIELD]
        }
    )

    contactDetailsProperty;
}