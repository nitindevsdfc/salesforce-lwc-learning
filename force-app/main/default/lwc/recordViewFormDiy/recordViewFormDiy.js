import { LightningElement, api } from 'lwc';

import BLOOD_DONOR_OBJECT from '@salesforce/schema/Blood_Donar__c';

import NAME_FIELD from '@salesforce/schema/Blood_Donar__c.Name__c';
import BLOOD_GROUP_FIELD from '@salesforce/schema/Blood_Donar__c.Blood_Group__c';
import AGE_FIELD from '@salesforce/schema/Blood_Donar__c.Age__c';
import EMAIL_FIELD from '@salesforce/schema/Blood_Donar__c.Email__c';
import PHONE_FIELD from '@salesforce/schema/Blood_Donar__c.Phone_No__c';
import LAST_DONATED_FIELD from '@salesforce/schema/Blood_Donar__c.Last_Donated_Date__c';

export default class RecordViewFormDiy extends LightningElement {
    @api recordId;
    objectApiName = BLOOD_DONOR_OBJECT;

    NAME_FIELD = NAME_FIELD;
    BLOOD_GROUP_FIELD = BLOOD_GROUP_FIELD;
    AGE_FIELD = AGE_FIELD;
    EMAIL_FIELD = EMAIL_FIELD;
    PHONE_FIELD = PHONE_FIELD;
    LAST_DONATED_FIELD = LAST_DONATED_FIELD;
}
