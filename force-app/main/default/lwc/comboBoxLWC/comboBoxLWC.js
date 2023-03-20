import { LightningElement,track } from 'lwc';
import accList from '@salesforce/apex/comboBox.getAccountList';

export default class ComboBoxLWC extends LightningElement {
    @track showLabel = 'No Value';
    @track optionValues = [];


    connectedCallback(){
        accList()
            .then(result =>{
                let arr = [];
                for(let i = 0;i < result.length;i++){
                    arr.push({ label:result[i].Name, value:result[i].Id});
                }
                this.optionValues = arr;
            })
        .catch(error =>{
            console.log('Error Occured',error);
        })

    }

    get options(){
        return this.optionValues;
    } 

    handleChange(e){
        this.showLabel = e.detail.value;
    }

}