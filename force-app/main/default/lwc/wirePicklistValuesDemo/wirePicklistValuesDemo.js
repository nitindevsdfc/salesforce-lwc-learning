import { LightningElement, wire } from 'lwc';
import { getPicklistValuesByRecordType, getObjectInfo } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';

export default class WirePicklistValuesDemo extends LightningElement {

    defaultRecordTypeId;
    recordTypeArray = [];
    picklistArray = [];
    picklistValues = [];
    picklistValuesObject;

    
    @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
    objectInfo({ data, error }) {
        if (data) {
            console.log(data);
            console.log(typeof (data.recordTypeInfos));
            this.recordTypeArray = Object.values(data.recordTypeInfos);
            this.recordTypeArray = this.recordTypeArray.map(rt => ({
                label : rt.name,
                value : rt.recordTypeId
            }))
            console.log(JSON.stringify(this.recordTypeArray,null,2));
        }
        if (error) {
            console.error(error);
        }
    }


    handleRecordTypeChange(event){
        console.log(event);
        console.log(event.detail.value);
        this.defaultRecordTypeId = event.detail.value;
    }

    
    @wire(getPicklistValuesByRecordType, {
        objectApiName: ACCOUNT_OBJECT,
        recordTypeId: '$defaultRecordTypeId'
    })
    picklistData({ data, error }) {
        if (data) {
            console.log('Picklist Data:', data);
            console.log(data.picklistFieldValues);
            this.picklistValuesObject = data.picklistFieldValues;
            this.picklistValues = Object.values(data.picklistFieldValues);
            this.picklistArray = Object.keys(data.picklistFieldValues);
            this.picklistArray = this.picklistArray.map(key => ({
                label : key,
                value : key
            }))
            console.log(JSON.stringify(this.picklistArray, null, 2));
        }
        if (error) {
            console.error(error);
        }
    }


    handlePicklistChange(event) {
        const selectedPicklist = event.detail.value;

        this.picklistValues =
            this.picklistValuesObject[selectedPicklist].values.map(item => ({
                label: item.label,
                value: item.value
            }));


        console.log(JSON.stringify(this.picklistValues, null, 2));
    }

}
