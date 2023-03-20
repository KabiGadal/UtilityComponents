import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';

export default class Navigation extends NavigationMixin(LightningElement) {
    
    handleRegister(){
        this[NavigationMixin.Navigate]({
            type:"standard__component",
            attributes:{
                componentName:"c__navigateToLWCAura"
            }
        });
    }

}