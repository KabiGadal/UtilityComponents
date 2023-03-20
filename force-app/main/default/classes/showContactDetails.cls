public with sharing class showContactDetails {
    public showContactDetails() {

    }

    @AuraEnabled(cacheable=true)
    public static list<Contact> getRecordDetails(Id recId,String searchKeys){
       System.debug('Null Check==>'+searchKeys);
        if(searchKeys != null && searchKeys != ''){
            String searchString = '%'+ searchKeys + '%';
        list<Contact> result = [SELECT id,Name,Email,AccountId FROM Contact WHERE AccountId =:recId AND Name LIKE :searchString];
        return result;
        }
        else {
            list<Contact> recList = [SELECT id,Name,Email,Phone,AccountId FROM Contact WHERE AccountId =: recId];
            if(!recList.isEmpty()){
                return recList;
                }
            return null;
        
    }
}
}