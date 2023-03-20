public with sharing class comboBox {
    public comboBox() {

    }

    @AuraEnabled
    public static list<Account> getAccountList(){
        list<Account> accList = [SELECT Id,Name from Account];
        return accList;
    }
}