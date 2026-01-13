import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import NAME_FIELD from '@salesforce/schema/Account.Name';
import ANNUAL_REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';



export default class WireCreateRecordDemo extends LightningElement {

    name;
    annualRevenue;

    handleChange(event){
        if(event.target.name === 'Name'){
            this.name = event.target.value;
        }else if(event.target.name === 'AnnualRevenue'){
            this.annualRevenue = event.target.value;
        }

        console.log(this.name, this.annualRevenue);
    }

    handleCreate(event){

        const fields = {}

        fields[NAME_FIELD.fieldApiName] = this.name,
        fields[ANNUAL_REVENUE_FIELD.fieldApiName] = this.annualRevenue
        
        
        const recordInput = {
            apiName : ACCOUNT_OBJECT.objectApiName,
            fields : {
                Name : this.name,
                AnnualRevenue : this.annualRevenue
            }
        }

        // This call will pass input to server for create record.
        
        // this createRecord function returns promise object.

        createRecord(recordInput)
        .then(result => {
            this.dispatchEvent(new ShowToastEvent({
                title : 'Success',
                message : 'Record Created Successfully',
                variant : 'success'
            }))
        })
        .catch(error=>{
            this.dispatchEvent(new ShowToastEvent({
                title : 'Error',
                message : error.body.message,
                variant : 'error'
            }))
        })
    }
}