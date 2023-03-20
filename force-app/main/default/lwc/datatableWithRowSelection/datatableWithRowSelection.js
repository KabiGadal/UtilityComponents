import { LightningElement,track,wire,api } from 'lwc';
import contactRecord from '@salesforce/apex/showContactDetails.getRecordDetails';

const columns = [
    {label:'Name',fieldName:'Name'},
    {label:'Phone',fieldName:'Phone'},
    {label:'Email',fieldName:'Email'},
]

export default class DatatableWithRowSelection extends LightningElement {

    buttonLabel = 'Show Contacts'
    isVisible;
    @track columns = columns;
    @api recordId;          // stores the current page record id
    @track data = [];
    @api searchKey = '';

    connectedCallback(){
        console.log('Record id==>',this.recordId);
        contactRecord({recId : this.recordId})
        .then(result =>{
            this.data = result;
        })
        .catch(error =>{
            console.log('Error Occured ==>',error);
        })
    }

    getSelectedName(e){
        let selectedRow_Details = e.target.selectedRows;
        alert(JSON.stringify(selectedRow_Details))
        let convertedSelectedRow = JSON.stringify(selectedRow_Details);
        console.log('Details==>',convertedSelectedRow);
        window.alert(convertedSelectedRow);
    }

    buttonChange(e){
        let currentLabel = e.target.label;

        if(currentLabel === 'Show Contacts'){
            this.buttonLabel = 'Hide Contacts';
            this.isVisible = true;
        }
        else if(currentLabel  === 'Hide Contacts'){
                this.buttonLabel = 'Show Contacts';
                this.isVisible = false;
        }
    }

    handleChange(e){
        this.searchKey = e.target.value;
        console.log('this==>',this.searchKey);
        console.log(JSON.stringify(this.searchKey));

        contactRecord({ searchKeys:this.searchKey, recId:this.recordId})
        .then(result =>{
            this.data = result;
            console.log('success');
        })
        .catch(error =>{
            console.log('error');
        })
    }
}