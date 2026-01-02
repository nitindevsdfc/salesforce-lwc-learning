import { LightningElement, api } from 'lwc';

export default class ChildProgressDemo extends LightningElement {

    progress=0;
    IntervalId = null;
    @api start(){

        if(this.IntervalId){
            return;
        }

        this.IntervalId = setInterval(()=>{
            this.progress++;
        },1000)

    }

    @api stop(){
        clearInterval(this.IntervalId);
        this.IntervalId = null;
    }

    @api reset(){
        this.stop();
        this.progress=0;   
    }

}