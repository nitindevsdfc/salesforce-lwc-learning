import { LightningElement, wire, api } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';

import DONAR_ID_FIELD from '@salesforce/schema/Blood_Donar__c.Name';
import DONAR_NAME_FIELD from '@salesforce/schema/Blood_Donar__c.Name__c';
import DONAR_BLOOD_GROUP from '@salesforce/schema/Blood_Donar__c.Blood_Group__c';
import DONAR_AGE from '@salesforce/schema/Blood_Donar__c.Age__c';

import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class WireServiceBloodDonar extends LightningElement {

    _donarId;
    _donarName;
    _donarBloodGroup;
    _donarAge;
    @api recordId;

    @wire(getRecord, {
        recordId : '$recordId',
        fields : [
            DONAR_ID_FIELD,
            DONAR_NAME_FIELD,
            DONAR_BLOOD_GROUP,
            DONAR_AGE
        ]
    })
    BLoodDonarDetailsFunciton({ data, error }) {
        console.log(data);
        if (data) {
            this._donarId = data.fields.Name.value;
            this._donarName = data.fields.Name__c.value;
            this._donarBloodGroup = data.fields.Blood_Group__c.value;
            this._donarAge = data.fields.Age__c.value; 
        } else if (error) {
            console.error(error);
        }
    }

    checkEligibility() {
        if (this._donarAge > 18) {   
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success',
                    message: `${this._donarName} eligible for Donation`,
                    variant: 'success'
                })
            );
        } else {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Stop Please',
                    message: `${this._donarName} not eligible Sorry....`,
                    variant: 'error'
                })
            );
        }
    }
}
