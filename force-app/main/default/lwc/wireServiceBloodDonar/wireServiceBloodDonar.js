import { LightningElement, wire, api } from 'lwc';
import { getFieldValue, getRecord } from 'lightning/uiRecordApi';

import DONAR_ID_FIELD from '@salesforce/schema/Blood_Donar__c.Name';
import DONAR_NAME_FIELD from '@salesforce/schema/Blood_Donar__c.Name__c';
import DONAR_BLOOD_GROUP from '@salesforce/schema/Blood_Donar__c.Blood_Group__c';
import DONAR_AGE from '@salesforce/schema/Blood_Donar__c.Age__c';
import ELIGIBLE_FOR_DONATION from '@salesforce/schema/Blood_Donar__c.Eligible_For_Blood_Donation__c';
import LAST_DONATED_DATE from '@salesforce/schema/Blood_donar__c.Last_Donated_Date__c';

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
            DONAR_AGE,
            ELIGIBLE_FOR_DONATION,
            LAST_DONATED_DATE
        ]
    })

    // wire function
    // BLoodDonarDetailsFunciton({ data, error }) {
    //     console.log(data);
    //     if (data) {
    //         this._donarId = data.fields.Name.value;
    //         this._donarName = data.fields.Name__c.value;
    //         this._donarBloodGroup = data.fields.Blood_Group__c.value;
    //         this._donarAge = data.fields.Age__c.value; 
    //     } else if (error) {
    //         console.error(error);
    //     }
    // }

    // wire property
    bloodDobarDetails;

    get donarId(){
        return getFieldValue(this.bloodDobarDetails.data, DONAR_ID_FIELD);
    }

    get donarName(){
        return getFieldValue(this.bloodDobarDetails.data, DONAR_NAME_FIELD);
    }

    get donarBloodGroup(){
        return getFieldValue(this.bloodDobarDetails.data, DONAR_BLOOD_GROUP);
    }

    get eligibleForDonation(){
        return getFieldValue(this.bloodDobarDetails.data, ELIGIBLE_FOR_DONATION);
    }

    get lastDOnatedDate(){
        return getFieldValue(this.bloodDobarDetails.data, LAST_DONATED_DATE);
    }

    checkEligibility() {

        const donarAge = getFieldValue(this.bloodDobarDetails.data, DONAR_AGE);
        const donarName = getFieldValue(this.bloodDobarDetails.data, DONAR_NAME_FIELD);
        console.log(donarAge);
        console.log(donarName);

        if (donarAge > 18) {   
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success',
                    message: `${donarName} eligible for Donation`,
                    variant: 'success'
                })
            );
        } else {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Stop Please',
                    message: `${donarName} not eligible Sorry....`,
                    variant: 'error'
                })
            );
        }
    }
}
