import { LightningElement, api, wire } from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';

export default class WireGetObjectMetadataInfo extends LightningElement {

    @api objectApiName;
    objectData={};
    objectFields;
    objectRecordTypeInfo;


    @wire(
        getObjectInfo,
        {
            objectApiName : '$objectApiName'
        }
    )

    objectDetails({data, error}){
        if(data){
            
           console.log(data); // object
           this.objectData = data;

           console.log(typeof(data.fields)); // object
           this.objectFields = Object.values(this.objectData.fields); // convert to array

           console.log(JSON.stringify(this.objectFields,null,2)); // array presentation
           console.log(typeof(data.recordTypeInfos));

           this.objectRecordTypeInfo = Object.values(this.objectData.recordTypeInfos); // convert to array
           console.log(JSON.stringify(this.objectRecordTypeInfo,null,2)); // array presentation

        }else if(error){
            console.error(error);
        }
    }

    get customFields(){
       if(this.objectFields){
            return this.objectFields.filter(value => value.apiName.endsWith('__c')).length;
       }
    }

    get standardFields(){
        if(this.objectFields){
            return this.objectFields.filter(value => !value.apiName.endsWith('__c')).length;
        }
    }

    get totalRecordTypes(){
        if(this.objectRecordTypeInfo){
            return this.objectRecordTypeInfo.length;
        }
    }

    get recordTypeNames(){
        if(this.objectRecordTypeInfo){
            return this.objectRecordTypeInfo.map(rt => rt.name);
        }
    }


    get cardTitle(){
        return `Metadata Info of ${this.objectApiName}`
    }
}