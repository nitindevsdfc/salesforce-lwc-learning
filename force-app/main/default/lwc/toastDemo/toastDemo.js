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
                    'warning'
                );
                break;

            case 'Info':
                this.showToast(
                    'Info',
                    'System maintenance on 15/01/2025',
                    'info'
                );
                break;

            case 'Error':
                this.showToast(
                    'Error',
                    'Error while creating Account record',
                    'error',
                    null,
                    'sticky'
                );
                break;
        }
    }

    
    showToast(title, message, variant, messageData = null, mode = 'dismissable') {
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
