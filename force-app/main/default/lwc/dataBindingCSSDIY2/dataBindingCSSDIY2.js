import { LightningElement } from 'lwc';

export default class DataBindingCSSDIY2 extends LightningElement {
    userinputvariable;
    chosenstyle;
    outputvariable;

    handleinputchange(event){
        this.userinputvariable = event.target.value;
    }

    ischeckpalindrome(){
        // const result = this.isPalindrome(this.userinputvariable.toLowerCase());
        const reverese = [...this.userinputvariable].reverse().join('');
        const result = this.userinputvariable.toLowerCase() === reverese.toLowerCase();
        this.outputvariable = 'Is ' + this.userinputvariable + ' a palindrome: ' + result;
        if(result){
            this.chosenstyle = 'true';
        }
        else{
            this.chosenstyle = 'false';
        }
        this.userinputvariable = null;
    }

    // isPalindrome(str) {
    // let left = 0;
    // let right = str.length - 1;

    // while (left < right) {
    //     if (str[left] !== str[right]) {
    //     return false;
    //     }
    //     left++;
    //     right--;
    // }

    //     return true;
    // }
}