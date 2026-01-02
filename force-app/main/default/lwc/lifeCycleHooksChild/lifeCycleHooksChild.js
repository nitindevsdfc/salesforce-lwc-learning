import { LightningElement } from 'lwc';

export default class LifeCycleHooksChild extends LightningElement {
    constructor(){
        super();
        console.log('Child Component Conntructor !!');
        console.log("IN contructor  child component :: IS component inserted in to the DOM ? "+ this.isConnected);
    }

    connectedCallback(){
        console.log("Child Component connectedCallback !!");
        console.log("IN connectedCallback  child component :: IS component inserted in to the DOM ? "+ this.isConnected);
    }

    renderedCallback(){
        console.log("Child Component rendeeredCallback() !!");
    }


}