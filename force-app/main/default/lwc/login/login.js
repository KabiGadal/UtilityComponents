import { LightningElement, wire } from 'lwc';
import getUserList from '@salesforce/apex/examRegistration.getUserList';
import {NavigationMixin} from 'lightning/navigation';


export default class Login extends NavigationMixin(LightningElement) {
   @wire(getUserList) User_Detail__c;
  
   email;
   Password;


   handleEmail(e){
   this.email = e.target.value;
   }

   handlePassword(e){
    this.Password = e.target.value;
   }
   

    handleRegister(){

    let flag = false;
   

        if(this.email != null && this.Password != null){
            for(let i = 0; i < this.User_Detail__c.data.length;i++){
                if(this.email == this.User_Detail__c.data[i].Email__c && this.Password == this.User_Detail__c.data[i].Password__c){
                    flag = true;
                    alert("Logged in Successfully!...");
                    this[NavigationMixin.Navigate]({
                        type:"standard__component",
                        attributes:{
                            componentName:"c__navigateToQuestion"
                        }
                    });
                  
                }
            
            }
            if(flag == false){
                alert('Please Provide the valid Credentials')
            }
        }
        else{
            alert('Please fill both the fields')
        }

        this.updateRecordView();
        
    }

    updateRecordView() {
        this.email = {};
        this.Password = {};
     }


    handleClick(){
        this[NavigationMixin.Navigate]({
            type:"standard__component",
            attributes:{
                componentName:"c__navigateToLWCAura"
            }
        });
    }

    handleUpdate(){
        this[NavigationMixin.Navigate]({
            type:"standard__component",
            attributes:{
                componentName:"c__navigatoTOLWCForgot"
            }
        });
    }

}