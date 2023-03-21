import { LightningElement,track } from 'lwc';
import parentToChild from './parent_1.html';
import childToParent from './parent.html';

export default class Parent extends LightningElement {
    /* Child to Parent*/

    count = 0;
    showTemplateOne = true;


    handleSubs(){
        console.log('Trigger Subs')
        this.count--;
    }

    handleAdd(){
        console.log('Trigger')
        this.count++;
    }
    constructor(){
        super();
        console.log('Parent Constructor Called');
    }

    connectedCallback(){
        console.log('Parent Connected Call back method Called');
    }

    handleMultiplyByTwo(e){
        const multiNumber = e.detail;
        this.count *= multiNumber;
    }

    handleMultiplyByTen(e){
        const multiNumber = e.detail;
        this.count *= multiNumber;
    }

    handleClear(){
        this.count = 0;
    }

    handleMove(){
       
        if(this.showTemplateOne){
            this.showTemplateOne = false;
        }
        else{
            this.showTemplateOne = true;
        }
       
    }

    render(){
        
        return this.showTemplateOne ? childToParent : parentToChild;
    }

   /* Child to Parent*/
    @track numVal = 0;

    handleChange(e){
        this.numVal = Number(e.target.value);
    }

    handleAddValue(e){
        let val = e.target.value;
        this.template.querySelector('c-child-l-w-c').handleAddTen(val);
    }

    handleClear_1(){
        this.template.querySelector('c-child-l-w-c').makeZero();
    }




    // render(){
    //     console.log('Render method Called');
    // }
    
    // renderedCallback(){
    //     console.log('Parent Rendered Call Back method called');
    // }

    // disconnectedCallback(){
    //     console.log('Disconnected Call Back method Called');
    // }

    // errorCallback(){
    //     console.log('Error Call Back Method called');
    // }
}