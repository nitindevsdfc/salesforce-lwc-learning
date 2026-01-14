import { LightningElement, wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccountList'

export default class LwcApexController extends LightningElement {

    ratingOptions = [
            { label: 'All', value: '' },
            { label: 'Hot', value: 'Hot' },
            { label: 'Warm', value: 'Warm' },
            { label: 'Cold', value: 'Cold' }
        ];

    accountData;
    selectedRating;

    handleRatingChange(event){
        this.selectedRating = event.detail.value;
    }

    @wire(
        getAccountList,
        {
            rating : '$selectedRating'
        }
    )

    accountDetails({data, error}){
        console.log(data);
        if(data){
            this.accountData = data;
            console.log('copied local data',this.accountData);
        }
    }


    
}