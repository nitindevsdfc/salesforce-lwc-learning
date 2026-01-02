import { LightningElement } from 'lwc';

export default class ParentToChildDiyFirst extends LightningElement {

    handleStartClick(){
        this.refs.childcomponent.start();
        this.refs.refStopButton.disabled=false;
        this.refs.refResetButton.disabled=false;
    }

    handleStopClick(){
        this.refs.childcomponent.stop();
         this.refs.refStopButton.disabled=true;
        this.refs.refResetButton.disabled=false;
    }

    handleResetClick(){
        this.refs.childcomponent.reset();
        this.refs.refStopButton.disabled=true;
        this.refs.refResetButton.disabled=true;
    }
}