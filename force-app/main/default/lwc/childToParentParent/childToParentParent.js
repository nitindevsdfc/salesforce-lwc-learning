import { LightningElement } from 'lwc';

export default class ChildToParentParent extends LightningElement {
    showChild;
    handleClick(event){
        this.showChild=true;
    }
    handleChildClose(event){
        this.showChild=false;
        let childData = {...event.detail};
        // console.log(childData.name);
        // console.log(childData.city);
        // console.log(childData.country);
        console.log(JSON.stringify(childData,null,2));
    }
}