import { LightningElement, wire, api } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import LAST_NAME_FIELD from '@salesforce/schema/Contact.LastName'
import EMAIL_FIELD from '@salesforce/schema/Contact.Email'

export default class WireServiceContact extends LightningElement {

    @api recordId;
    _lastName;
    _email;
    wiredData;

    constructor(){
        super();
        console.log('Constructor Called.....');
    }

    connectedCallback(){
        console.log('ConnectedCallback Invoked......');
    }

    renderedCallback(event){
        
        console.log('renderedCallback Invoked........');
        if(this.wiredData){
            console.log('Data', this.wiredData);
            console.log('Email :', this._email);
            console.log('LastName :', this._lastName);
        }
    }


    
    @wire(
        getRecord,
        {
         recordId : '$recordId',
         fields : [LAST_NAME_FIELD, EMAIL_FIELD]
        }
    )


    // Function is used to get the stram of data from wire service 
    contactDetailsFunction({data, error}){

        console.log('Inside Wire Service........');
        console.log('Data', data);
        console.log('Error', error);
        

        if(data){
            this.wiredData = data;
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
            recordId : '$recordId',
            fields : [LAST_NAME_FIELD, EMAIL_FIELD]
        }
    )

    contactDetailsProperty;
    
}