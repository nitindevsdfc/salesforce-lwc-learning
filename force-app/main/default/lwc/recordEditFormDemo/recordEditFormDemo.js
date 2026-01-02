/*
===============================================================================
REVISION NOTES – recordEditFormDemo.js
-------------------------------------------------------------------------------
RESPONSIBILITIES:
• Intercept form submission
• Apply business validation
• Modify field values before save
• Submit form programmatically
• Handle success, error, and cancel actions

EVENT FLOW (VERY IMPORTANT):
1. Save clicked
2. handleSubmit()  → validation + field update
3. myForm.submit() → actual save
4. handleSuccess() → record saved (Id available here)

BUSINESS RULES IMPLEMENTED:
• If Title = "Vice President"
    → Account is mandatory
    → Description = "VIP CONTACT"
• Else
    → Description = "GENERAL CONTACT"

KEY TAKEAWAYS:
• event.detail.fields → editable before submit
• event.detail.id     → ONLY available in onsuccess
• preventDefault()    → required for custom validation
• reset()             → restores last loaded values
===============================================================================
*/

import { LightningElement, api } from 'lwc';
// Used for showing toast messages
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class RecordEditFormDemo extends LightningElement {

    // Object API name passed from parent
    @api objectApiName;

    // Record Id (present in edit mode)
    @api recordId;

    // Fired when Save button is clicked (before actual save)
    handleSubmit(event){
        // Prevent default auto-submit to perform validation & field updates
        event.preventDefault();

        // Debug logs using lwc:ref
        console.log('Account field value:', this.refs.AccountName.value);
        console.log('Title field value:', this.refs.MyTitle.value);

        // Accessing field value using querySelector
        console.log(this.template.querySelector(".LastName").value);

        // All field values that will be submitted
        console.log(event.detail.fields);

        // Validation:
        // If Title = Vice President, Account must be filled
        if (
            this.refs.MyTitle.value.toLowerCase() === 'vice president' &&
            (!this.refs.AccountName.value || this.refs.AccountName.value.trim() === '')
        ) {

            // Show informational toast and block save
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Information',
                    message: 'Account Name cannot be empty',
                    variant: 'info'
                })
            );
        }
        else {

            // If Title is Vice President, mark as VIP contact
            if (this.refs.MyTitle.value.toLowerCase() === 'vice president') {
                event.detail.fields.Description = 'VIP CONTACT';
            }
            // For all other titles, mark as General contact
            else {
                event.detail.fields.Description = 'GENERAL CONTACT';
            }

            // Manually submit the form with updated field values
            this.refs.myForm.submit(event.detail.fields);

            // Toast indicating submit action started
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Submitted',
                    message: 'Record Submitted Successfully',
                    variant: 'success'
                })
            );
        }
    }

    // Fired AFTER record is successfully saved
    handleSuccess(event){
        // event.detail.id contains the saved record Id
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Saved',
                message: 'Record Saved Successfully ' + event.detail.id,
                variant: 'success'
            })
        );
    }

    // Fired when save fails
    handleError(event){
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Error',
                message: 'Error Occurred',
                variant: 'error'
            })
        );
    }

    // Cancel button handler
    handleCancel(event){
        // Get all lightning-input-field elements
        const inputFields = this.template.querySelectorAll('lightning-input-field');

        // Reset each field to its previously loaded value
        if (inputFields.length > 0) {
            inputFields.forEach(field => field.reset());
        }
    }
}
