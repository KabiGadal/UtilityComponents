import {LightningElement,wire } from 'lwc';
import updateRecord from '@salesforce/apex/examRegistration.updateRecord';
import getUserList from '@salesforce/apex/examRegistration.getUserList';

export default class PasswordValidation extends LightningElement {
@wire(getUserList) User_Detail__c;

email;
Password;
Id;


handleEmail(e){
    this.email = e.target.value;
}


handleChange(e){
    this.Password = e.target.value;
}

handleUpdate (){

    if(this.email != null && this.Password != null){
        for(let i = 0; i < this.User_Detail__c.data.length;i++){
            if(this.email == this.User_Detail__c.data[i].Email__c){
                this.Id = this.User_Detail__c.data[i].Id
                updateRecord({
                    updateArg1: this.Id,
                    updateArg2: this.Password            
                })
                .then(result =>{
                    console.log("success");
                    alert('Password Updated Successfully!...');
                    this[NavigationMixin.Navigate]({
                        type:"standard__component",
                        attributes:{
                            componentName:"c__navigateToLWCLogin"
                        }
                    }); 
                }).catch(error=>{
                    console.log(error.body.message);
                   alert(error.body.message)
                })
                }
            }
    }
}
}