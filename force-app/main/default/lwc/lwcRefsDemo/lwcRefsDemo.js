import { LightningElement } from 'lwc';

export default class LwcRefsDemo extends LightningElement {
    age;
    name;

    handleAgeChange(event){
        this.age = event.target.value;
    }

    handleNameChange(event){
        this.name = event.target.value;
        this.refs.refAgeInput.required=true;
    }

    handleEligibility(){
        if(this.age > 18){
            this.refs.Eligible.innerText = "Eligible for Driving"
            this.refs.refJoinButton.disabled = false;
            // this.refs.refTagP.innerText="Changed"
            const elements = this.template.querySelectorAll(".refTagP");

            elements.forEach(el => {
                el.innerText = "changed";
            });
        }
        else{
            this.refs.Eligible.innerText = "Not Eligible for Driving"
            this.refs.refJoinButton.disabled = true;
        }
    }

    handleJoinClick(){
        alert(`Welcome ${this.name} to join our Driving School`)
    }
}