import { LightningElement } from 'lwc';

export default class ChildToParentChild extends LightningElement {

    personDetails = {
        name : 'Nitin',
        permanentAddress : {
            city : 'Bengaluru',
            state : 'Karnatka',
            coutry : 'India'
        },
        temporaryAddress : {
            city : 'Pune',
            state : 'Maharashtra',
            coutry : 'India'
        }
    }

    handleClick() {
        this.dispatchEvent(new CustomEvent('close',{detail : this.personDetails}));
    }
}
