import { LightningElement, wire,track } from 'lwc';
import getRandomRecipe from '@salesforce/apex/Spoonacular.getRecipeSearch';

export default class Recipe extends LightningElement {
@track totalData;

@wire(getRandomRecipe)
wiredContact({error,data}){
    if(data){
       console.log('data-->' + data);
        this.totalData = data;
    }
    if(error){
        console.log('error-->' + error);
    }
}

@track check = false;
@track result;

handleClick(){

        if(this.check == false){
            this.check = true;
            this.result = JSON.parse(this.totalData).results;
            console.log('result-->'+this.result);
        }
        else{
            this.check = false;
        }
    }

}