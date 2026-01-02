import { LightningElement } from 'lwc';

export default class MemberRegistration extends LightningElement {

    defaultValue = "background-color";
    isMemberLogin = false;
    isMemberSignUp = false;

    isRegistered = "";
    afterMessage = "";
    wrongAttemptLogin = "";

    firstName = "";
    lastName = "";
    email = "";
    password = "";

    userDetails = [];

    
    clearMessages() {
        this.isRegistered = "";
        this.afterMessage = "";
        this.wrongAttemptLogin = "";
    }

    
    handleMembersLogin(event) {
        this.isMemberLogin = event.target.checked;
        this.isMemberSignUp = false;
        this.clearMessages();
        this.template.querySelector(".signupCheck").checked = false;
    }

    
    handleNewMemberSignUp(event) {
        this.isMemberSignUp = event.target.checked;
        this.isMemberLogin = false;
        this.clearMessages();
        this.template.querySelector(".loginCheck").checked = false;
    }

    
    handleInputFirstName(event) { 
        this.firstName = event.target.value; 
    }
    handleInputLastName(event) { 
        this.lastName = event.target.value; 
    }
    handleInputEmail(event) { 
        this.email = event.target.value; 
    }
    handleInputPassword(event) { 
        this.password = event.target.value; 
    }

    
    handleSignUp() {

        this.clearMessages(); 

        if (this.firstName && this.lastName && this.email && this.password) {

            this.userDetails.push({
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                password: this.password
            });

            console.log("USER LIST → ", JSON.stringify(this.userDetails, null, 2));

            this.isRegistered = "true";
            this.afterMessage = "Registration Successful";
            alert("User Registered Successfully");
        } 
        else {
            this.isRegistered = "false";
            this.afterMessage = "Please fill up all details for registration.";
            alert("Please fill all fields");
        }

        this.firstName = "";
        this.lastName = "";
        this.email = "";
        this.password = "";
    }

    
    handleLogin() {

        this.clearMessages(); 

        console.log("CURRENT USER LIST → ", JSON.stringify(this.userDetails, null, 2));

        
        const userByEmail = this.userDetails.find(
            user => user.email === this.email
        );

        console.log(userByEmail);

        if (!userByEmail) {
            this.wrongAttemptLogin = "Email does not exist!";
            alert("Email does not exist");
            this.email = "";
            this.password = "";
            return;
        }

        
        if (userByEmail.password !== this.password) {
            this.wrongAttemptLogin = "Incorrect Password!";
            alert("Incorrect Password");
            this.password = "";
            return;
        }

        
        this.wrongAttemptLogin = "";
        alert("Login Successful");

        this.email = "";
        this.password = "";
    }
}
