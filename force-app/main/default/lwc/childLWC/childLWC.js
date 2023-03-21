import { LightningElement,api,track } from 'lwc';
import childtoparent from './childLWC.html';
import parenttochild from './childLWCone.html';

export default class ChildLWC extends LightningElement {
/* Child to Parent*/
   @api disableButton = false;
   @api receivedatafromparent;
   showChildToParent = false;
    trackingButtonClicks = 0;
  @track showValue = Number(this.receivedatafromparent);

    connectedCallback(){
        if(this.receivedatafromparent != undefined){
            this.showChildToParent = true;
        }
        else{
            this.showChildToParent = false;
        }
      
        if(this.trackingButtonClicks > 0){
            this.disableButton = false;
        }
        else{
            this.disableButton = true;
        }

    }
    handleSubs(){
        this.trackingButtonClicks--;
        if(this.trackingButtonClicks > 0){
            this.disableButton = false;
        }
        else if(this.trackingButtonClicks == 0){
            this.disableButton = true;
        }
        
        this.dispatchEvent(new CustomEvent('subs'));
    }

    handleAdd(){
        this.trackingButtonClicks++;
        if(this.trackingButtonClicks > 0){
            this.disableButton = false;
        }
        this.dispatchEvent(new CustomEvent('add'));
    }

    handleTwo(event){
        const multiplyNumber = event.target.value;
        this.trackingButtonClicks *= multiplyNumber
        this.dispatchEvent(new CustomEvent('multiplytwo',{
            detail : multiplyNumber
        }));
    }

    
    handleTen(event){
        const multiplyNumber = event.target.value;
        this.trackingButtonClicks *= multiplyNumber
        this.dispatchEvent(new CustomEvent('multiplyten',{
            detail : multiplyNumber
        }));
    }
    render(){
        return this.showChildToParent ?  parenttochild : childtoparent
    }

    @api handleAddTen(value){
        this.receivedatafromparent += Number(value);
    }
    @api makeZero(){
        this.receivedatafromparent = 0;
    }



}