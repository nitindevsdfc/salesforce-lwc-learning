import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import ANNUALREVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import ACCOUNTNUMBER_FIELD from '@salesforce/schema/Account.AccountNumber';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';

export default class RecordViewFormDemo extends LightningElement {
    objectApiName = ACCOUNT_OBJECT;
    NAME_FIELD = NAME_FIELD;
    INDUSTRY_FIELD = INDUSTRY_FIELD;
    ANNUALREVENUE_FIELD = ANNUALREVENUE_FIELD;
    ACCOUNTNUMBER_FIELD = ACCOUNTNUMBER_FIELD;
    PHONE_FIELD = PHONE_FIELD;
}

