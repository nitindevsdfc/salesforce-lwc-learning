import { LightningElement, wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccountList';

const COLUMNS = [
    { label: 'Name', fieldName: 'Name', type: 'text' },
    { label: 'Industry', fieldName: 'Industry', type: 'text' },
    { label: 'Rating', fieldName: 'Rating', type: 'text' }
];

export default class AccountDatatable extends LightningElement {
    columns = COLUMNS;
    accounts;
    selectedRating;

    ratingOptions = [
            { label: 'All', value: '' },
            { label: 'Hot', value: 'Hot' },
            { label: 'Warm', value: 'Warm' },
            { label: 'Cold', value: 'Cold' }
        ];   

    handleRatingChange(event){
        this.selectedRating = event.detail.value;
    }

    @wire(
        getAccountList,
        {
            rating : '$selectedRating'
        }
    )
    wiredAccounts({ data, error }) {
        if (data) {
            this.accounts = data;
        } else if (error) {
            console.error(error);
        }
    }
}
