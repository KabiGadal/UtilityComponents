import { LightningElement,track } from 'lwc';

export default class Parent extends LightningElement {


    count = 0;


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