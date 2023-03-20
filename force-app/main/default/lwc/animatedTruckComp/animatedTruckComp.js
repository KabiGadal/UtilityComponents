import { LightningElement,wire,track,api} from 'lwc';
import getTruckdetails from '@salesforce/apex/animatedTruck.getTruckdetails';



export default class AnimatedTruckComp extends LightningElement {
@api recordId
@track totalData;

@wire(getTruckdetails,{ orderID: '$recordId'}) 
wiredContact({error, data}){
     if(data){
        console.log('data-->' + data);
        this.totalData = data;
        this.handleChange();
      
        console.log('recordId-->'+this.recordId);
       
  }
    if(error){
     console.error(error);
    }
}

@track result = false;

handleChange(){
    this.totalData.forEach(element => {
       let d =  element.Status;
       console.log('check status-->' + d);
       if(d == 'Activated') {
        this.result = true;
       }
     
    });
    
}


}