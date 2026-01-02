import { LightningElement, api } from 'lwc';
import TEMPLE from '@salesforce/resourceUrl/TEMPLE';

export default class ChildToParentChild extends LightningElement {

    meenakshi = `${TEMPLE}/TEMPLE_PICTURE/meenakshi.png`;
    tajmahal  = `${TEMPLE}/TEMPLE_PICTURE/tajmahal.png`;
    qutub     = `${TEMPLE}/TEMPLE_PICTURE/qutub.png`;

    
    _monuments = [];

    @api
    set monumentsArray(value) {
        this._monuments = [...value]; 
    }
    get monumentsArray() {
        return this._monuments;
    }


    get isMeenakshiChecked() {
        return this._monuments.includes('Meenakshi Temple');
    }

    get isTajmahalChecked() {
        return this._monuments.includes('Taj Mahal');
    }

    get isQutubChecked() {
        return this._monuments.includes('Qutub Minar');
    }



    handleChange(event) {
        const value = event.target.value;
        const checked = event.target.checked;

        if (checked && !this._monuments.includes(value)) {
            this._monuments = [...this._monuments, value];
        } else if (!checked) {
            this._monuments = this._monuments.filter(v => v !== value);
        }

        console.log(JSON.stringify(this._monuments,null,2));
    }

    handleCancel() {
        this.dispatchEvent(new CustomEvent('close', {detail: this._monuments}));    
    }
}
