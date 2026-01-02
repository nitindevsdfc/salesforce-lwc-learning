import { LightningElement } from 'lwc';

export default class ParentProgressDemo extends LightningElement {

    handleStartClick(event){
        // this.template.querySelector('c-child-progress-demo').start();
        this.refs.childcomponent.start();
        this.refs.refStopButton.disabled=false;
        this.refs.refResetButton.disabled=false;
    }

    handleStopClick(event){
        this.refs.childcomponent.stop();
        this.refs.refStopButton.disabled=true;
        this.refs.refResetButton.disabled=false;
    }

    handleResetClick(event){
        this.refs.childcomponent.reset();
        this.refs.refStopButton.disabled=true;
        this.refs.refResetButton.disabled=true;
    }
}