import { LightningElement, track } from 'lwc';
// import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import createRecord from '@salesforce/apex/examRegistration.createRecord';
import {NavigationMixin} from 'lightning/navigation';




export default class ExamRegistration extends NavigationMixin(LightningElement) {

    FirstName;
    LastName;
    email;
    Password;
    Mobile;



    handleName (e){
       this.FirstName= e.target.value; 
    }

    handleLastName(e){
        this.LastName=e.target.value;
    }

    handleEmail(e){
        this.email = e.target.value;
    }

    handlePassword(e){
        this.Password = e.target.value;
    }

    handleMobile(e){
        this.Mobile = e.target.value;
    }

    handleClick(){
    if(
        (this.FirstName != null && this.LastName != null && this.email != null && this.Password != null && this.Mobile != null)
        ){

            createRecord({arg1: this.FirstName, 
                arg2:this.LastName,
                arg3:this.email,
                arg4:this.Password,
                arg5:this.Mobile,
            })
            .then(result =>{
                console.log("success");
                alert('User Created Successfully!...');
                this[NavigationMixin.Navigate]({
                    type:"standard__component",
                    attributes:{
                        componentName:"c__navigateToLWCLogin"
                    }
                });
                this.refresh();
            }).catch(error=>{
                console.log(error.body.message);
               alert(error.body.message)
            })
        }else{
            this.errormsg = "Please review the Error";
        }
    
      
    }

    refresh(){
        this.FirstName = {};
        this.LastName = {};
        this.Mobile = {};
        this.Password = {};
        this.email = {};
    };
   

  
}