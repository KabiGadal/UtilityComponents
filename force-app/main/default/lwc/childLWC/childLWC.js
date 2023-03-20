import { LightningElement,api } from 'lwc';

export default class ChildLWC extends LightningElement {

   @api disableButton = false;
    trackingButtonClicks = 0;

    connectedCallback(){
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
}