import { LightningElement, wire } from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import  ACCOUNT_OBJECT from '@salesforce/schema/Account'


export default class WireObjectInfoExplorer extends LightningElement {

    accountData={};
    accountChildRelationship=[];

    // wire Adaptor
    @wire(
        getObjectInfo,
        {
            objectApiName : ACCOUNT_OBJECT
        }
    )

    // wire property
    objectInfo({data,error}){
        if(data){
            this.accountData = data;
            this.accountChildRelationship = this.accountData.childRelationships;
        }
    }   
}