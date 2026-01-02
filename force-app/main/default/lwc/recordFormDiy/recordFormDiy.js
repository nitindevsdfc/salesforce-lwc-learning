import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import CASE_OBJECT from '@salesforce/schema/Case';
import SUBJECT_FIELD from '@salesforce/schema/Case.Subject';
import STATUS_FIELD from '@salesforce/schema/Case.Status';
import PRIORITY_FIELD from '@salesforce/schema/Case.Priority';
import ORIGIN_FIELD from '@salesforce/schema/Case.Origin';
import DESCRIPTION_FIELD from '@salesforce/schema/Case.Description';

export default class RecordFormDiy extends LightningElement {

    objectApiName = CASE_OBJECT;

    caseFields = [
        SUBJECT_FIELD,
        STATUS_FIELD,
        PRIORITY_FIELD,
        ORIGIN_FIELD,
        DESCRIPTION_FIELD
    ];

    handleOnSuccess(event) {
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Case Saved',
                message: 'Case updated successfully. Id: ' + event.detail.id,
                variant: 'success'
            })
        );
    }

    handleOnError(event) {
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Error',
                message: event.detail.message,
                variant: 'error'
            })
        );
    }
}
