import { LightningElement } from 'lwc';
import Static_Resource from '@salesforce/resourceUrl/Static_Resource';

export default class DownloadExcel extends LightningElement {

    handleDownload(e){
      const resourcePath = Static_Resource;
      
      window.open(resourcePath,'_blank');
      

    }
}