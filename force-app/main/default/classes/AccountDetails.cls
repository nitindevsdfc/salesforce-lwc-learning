public class AccountDetails {

   	private string accountName;
   	
    public string rating {get; private set; }
    public string getName(){
        return this.accountName;
    }
    
    public void setName(String name){
        this.accountName = name;
    }
    
     public class InnerClass {
        public void display() {
            System.debug('Hello from Inner Class!');
        }
    }
    
}