import { LightningElement,api } from 'lwc';

export default class Example extends LightningElement {
 
    renderedCallback(){
        this.template.querySelector('myId').innerHTML = 'Hell Guys I am here';
    }
}