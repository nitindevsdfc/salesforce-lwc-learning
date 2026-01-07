import { LightningElement , api} from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';


export default class RecordEditFormDiy extends LightningElement {
    
    @api objectApiName;
    @api recordId;

    handleSubmit(event){

        // Prevent default auto-submit to perform validation & field updates
        event.preventDefault();

        console.log(this.refs.myLeadSource.value);

        console.log(this.refs.myEmail.value);

        console.log(this.refs.myPhone.value);

        // if(this.refs.myLeadSource.value == 'Web' && (this.refs.myEmail.value.trim() === '' || !this.refs.myEmail.value)){

        if(this.refs.myLeadSource.value == 'Web' && (this.refs.myEmail.value.trim() === '')){

            this.dispatchEvent(new ShowToastEvent(
                {
                    title : 'Information',
                    message : 'Email Field cannot be blank !!',
                    variant : 'info'
                }
            ));
        }else if(this.refs.myLeadSource.value == 'Phone Inquiry' && (!this.refs.myPhone.value || this.refs.myPhone.value.trim() === '')){

            this.dispatchEvent(new ShowToastEvent(
                {
                    title : 'Information',
                    message : 'Phone Field cannot be blank !!',
                    variant : 'info'
                }
            ));
        }else {

            this.refs.myContactForm.submit(event.detail.fields);

            this.dispatchEvent(new ShowToastEvent(
                {
                    title : 'Submitted',
                    message : 'Record Submitted Successfully !!',
                    variant : 'success'
                }
            ));
        }
    }


    handleSuccess(event){

        this.dispatchEvent(new ShowToastEvent(
            {
                title : 'Saved',
                message : 'Record Saved Successfully !! ' + event.detail.id,
                variant : 'success'
            }
        ));
    }

    handleError(event){
        
        console.log(event);

        this.dispatchEvent(new ShowToastEvent(
            {
                title : 'Error',
                message : event.detail.detail,
                variant : 'error'
            }
        ));
    }

    handleCancel(event){

        const inputfields = this.template.querySelectorAll('lightning-input-field');

        if(inputfields.length > 0 ){

            inputfields.forEach(field => field.reset());
        }


    }
}