import { LightningElement, wire, api } from 'lwc';
import { getRecord, updateRecord, generateRecordInputForUpdate } from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/Account.Name'
import ANNUAL_REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue'
import EMAIL_FIELD from '@salesforce/schema/Account.Email__c'
import { ShowToastEvent } from 'lightning/platformShowToastEvent';



export default class WireUpdateAccountRecord extends LightningElement {

    @api recordId;
    name;
    annualRevenue;
    email;
    wiredData;

    @wire(
        getRecord,
        {
            recordId : '$recordId',
            fields : [NAME_FIELD, ANNUAL_REVENUE_FIELD, EMAIL_FIELD]
        }
    )

    getAccountData({data, error}){
        if(data){
            console.log('Data',data);
            this.wiredData = data;
            this.name = data.fields.Name.value;
            this.annualRevenue = data.fields.AnnualRevenue.value;
            this.email = data.fields.Email__c.value;
        }
    }

    // store the updated value in the local variable 
    handleChange(event) {
        const input = event.target;
        const { name, value, label } = input;

        
        if (!value) {
            input.setCustomValidity(`Please fill ${label}`);
        } else {
            input.setCustomValidity('');
            this[name] = value;   
        }

        input.reportValidity();
    }



    handleUpdateRecord(event){

        const RecordInput = generateRecordInputForUpdate(this.wiredData);

        RecordInput.fields[NAME_FIELD.fieldApiName] = this.name;
        RecordInput.fields[ANNUAL_REVENUE_FIELD.fieldApiName] = this.annualRevenue;
        RecordInput.fields[EMAIL_FIELD.fieldApiName] = this.email;

        updateRecord(RecordInput)
        .then(result=>{
            this.dispatchEvent(new ShowToastEvent({
                title : 'Success',
                message : 'Record Updated Successfully',
                variant : 'success'
            }))
        })
        .catch(error =>{
            this.dispatchEvent(new ShowToastEvent({
                title : 'Error',
                message : error.body.message,
                variant : 'error'
            }))
        })
    }   
}