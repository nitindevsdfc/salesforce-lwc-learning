import { LightningElement, track } from 'lwc';

export default class TemplateLoopingDIY extends LightningElement {
    leadName;
    leadSource;
    annualRevenue;
    email;
    showLeads = false;
    wantToDeleteLeads = false;
    leadEmail='';

    @track leadDetails = [];
    
    handleLeadNameChange(event){
        this.leadName = event.target.value;
    }

    handleLeadSourceChange(event){
        this.leadSource = event.target.value;
    }

    handleAnnualRevenueChange(event){
        this.annualRevenue = event.target.value;
    }

    handleEmailChange(event){
        this.email = event.target.value;
    }

    addLead(){

        if(this.leadName == '' || this.leadSource == '' || this.annualRevenue == '' || this.email == ''){
            alert('Please fill all the fields');
            return;
        }
        
        const status = this.leadDetails.find(lead => lead.email === this.email);
        if(status){
            alert('Email already exists');
            this.email = '';
            return;
        }

    const newLead = {
        leadName: this.leadName,
        leadSource: this.leadSource,
        annualRevenue: this.annualRevenue,
        email: this.email
    };

    
    this.leadDetails = [...this.leadDetails, newLead];
    this.showLeads = false;
    console.log(JSON.stringify(this.leadDetails, null, 2));
    };

    
    clearLead(){
        this.leadName = '';
        this.leadSource = '';
        this.annualRevenue = '';
        this.email = '';
    }

    // displayLead() {
    //     this.showLeads = true; 
    // }

    
    // get displayLead(){
    //     hasleads = this.leadDetails.length > 0 && this.showLeads = true
    //     return hasleads;
    // }

    displayLead(){
        this.showLeads = true;
        // return this.leadDetails.length > 0;
    }

    get showLeads(){
        if(this.leadDetails.length > 0 && this.showLeads === true){
            return true;
        }else{
            return false;
        }
    }

    handleCheckboxChange(event){
        this.wantToDeleteLeads = event.target.checked;
    }

    handleLeadEmailChange(event){
        this.leadEmail = event.target.value;
    }

    deleteLead(){

        if(this.leadEmail == ''){
            alert('Please enter email');
            return;
        }

        const status = this.leadDetails.find(lead => lead.email === this.leadEmail);
        console.log(JSON.stringify(this.status,null,2));
        console.log(!JSON.stringify(this.status,null,2));
        if(!status){
            alert('Email does not exist');
            this.leadEmail = '';
            return;
        }

        this.leadDetails = this.leadDetails.filter(lead => lead.email !== this.leadEmail);
        this.leadEmail = '';
        this.wantToDeleteLeads = false;
        this.showLeads = false;
    }

}