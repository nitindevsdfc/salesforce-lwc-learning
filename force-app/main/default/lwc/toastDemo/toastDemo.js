import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class DemoToast extends LightningElement {

    handleClick(event) {
        const label = event.target.label;

        switch (label) {

            case 'Success':
                this.showToast(
                    'Success',
                    '{0} Account created successfully {1}',
                    'success',
                    'pester',
                    [
                        'Salesforce',
                        {
                            url: 'https://www.salesforce.com',
                            label: 'View Account'
                        }
                    ]
                );
                break;

            case 'Warning':
                this.showToast(
                    'Warning',
                    'You do not have sufficient permissions to perform this action',
                    'warning',
                    'dismissable',
                    null
                );
                break;

            case 'Info':
                this.showToast(
                    'Info',
                    'System maintenance on 15/01/2025',
                    'info',
                    'dismissable',
                    null
                );
                break;

            case 'Error':
                this.showToast(
                    'Error',
                    'Error while creating Account record',
                    'error',
                    'sticky',
                    null
                );
                break;
        }
    }

    showToast(title, message, variant, mode, messageData) {
        this.dispatchEvent(
            new ShowToastEvent({
                title,
                message,
                variant,
                mode,
                messageData
            })
        );
    }
}
