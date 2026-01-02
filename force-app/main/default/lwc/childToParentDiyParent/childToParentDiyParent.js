import { LightningElement } from 'lwc';

export default class ChildToParentParent extends LightningElement {
    showChild;
    childMonumentArray = [];
    handleClick(event){
        this.showChild=true;
    }
    handleChildClose(event){
        this.showChild=false;
        this.childMonumentArray = [...event.detail]
    }

    get arrayCheck(){
        return this.childMonumentArray.length > 0;
    }
}