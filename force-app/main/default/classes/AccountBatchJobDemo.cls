public class AccountBatchJobDemo Implements Database.Batchable<Sobject> {
    
    // Start Method
    public Database.QueryLocator start(Database.BatchableContext context){
        System.debug('Start');
        String query = 'Select Id, Name From Account';
        return Database.getQueryLocator(query);
    }
    
    // Execute Method : For each batch execute method gets implemented 
    public void execute(Database.BatchableContext context, List<Account> scope){
        System.debug('Execute');
    }
    
    // Finish Method
    public void finish(Database.BatchableContext context){
        System.debug('Finish');
    }

}