import { LightningElement } from 'lwc';
import enrollement from './enrollement.html';
import alumini from './alumini.html';
import demoRender from './demoRender.html';

export default class DemoRender extends LightningElement {


    chosenTemplate;

    render(){
        return this.chosenTemplate === 'New Enrollement' ? enrollement : this.chosenTemplate === 'Alumini' ? alumini : demoRender;
    }

    handleClick(event){
        this.chosenTemplate = event.target.label;
    }
}