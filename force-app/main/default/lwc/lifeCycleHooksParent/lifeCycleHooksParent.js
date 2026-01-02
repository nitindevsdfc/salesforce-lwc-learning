import { LightningElement } from 'lwc';

export default class LifeCycleHooksParent extends LightningElement {

    value;
    hansRendered=true;

    constructor(){
        super();
        console.log("Parent Constructor Called !!");
        console.log("IN constructor Parent Component :: IS component inserted in to the DOM ? "+ this.isConnected);
        // console.log(this.refs.pTag.innerText); 

    }

    connectedCallback(){
        console.log("Parent Connected Callback !!");
        console.log("IN connectedCallback Parent component :: IS component inserted in to the DOM ? "+ this.isConnected);
        // console.log(this.refs.pTag.innerText);
    }

    renderedCallback(){
        if(this.hansRendered){
        console.log("Parent component renderedCallback called !!");
        console.log(this.refs.pTag.innerText);
        this.hansRendered=false;
        }
    }

    handleChange(event){
        this.value = event.target.value;
    }
}