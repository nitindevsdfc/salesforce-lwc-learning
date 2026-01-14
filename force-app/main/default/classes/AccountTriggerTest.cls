@IsTest(seeAllData = False)
public class AccountTriggerTest {
	
    @isTest
    public static void beforeInsert(){
        
        List<Account> accList = new List<Account>();
        Account accountRecord = new Account();
        accountRecord.Name = 'Test Account Record';
        //accountRecord.Rating = 'Hot';
        //accountRecord.phone = '9856324589';
        accList.add(accountRecord);
        
        Account accountRecord1 = new Account();
        accountRecord1.Name = 'Test Account Record';
        accountRecord1.Rating = 'Hot';
        accList.add(accountRecord1);
        
        Account accountRecord2 = new Account();
        accountRecord2.Name = 'Test Account Record1';
        accountRecord2.Rating = 'Warm';
      //  accountRecord2.phone = '9856324519';
       
        try {  
            Insert accList;
            Insert accountRecord2;
            
        }
        
        catch(System.DmlException ex){
            System.debug('Exception found!');
        }
        

    }
    
    @isTest
    public static void afterInsert(){
        
    }
    
    @isTest
    public static void beforeUpdate(){
        
    }
    
    @isTest
    public static void afterUpdate(){
        
    }
    
    @isTest
    public static void beforeDelete(){
        
    }
    
    @isTest
    public static void afterDelete(){
        
    }
    
    @isTest
    public static void afterUndelete(){
        
    }
}