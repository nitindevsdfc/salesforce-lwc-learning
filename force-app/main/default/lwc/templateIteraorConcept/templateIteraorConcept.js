import { LightningElement, track } from 'lwc';

export default class TemplateIteraorConcept extends LightningElement {

    @track employees = [
    {
        empId: 1,
        name: 'Rahul Sharma',
        role: 'Developer',
        department: 'IT',
        salary: 60000
    },
    {
        empId: 2,
        name: 'Anita Verma',
        role: 'Tester',
        department: 'QA',
        salary: 50000
    },
    {
        empId: 3,
        name: 'Amit Singh',
        role: 'Manager',
        department: 'HR',
        salary: 80000
    },
    {
        empId: 4,
        name: 'Rajesh Kumar',
        role: 'Developer',
        department: 'IT',
        salary: 60000
    },
    {
        empId: 5,
        name: 'Sandeep Verma',
        role: 'Tester',
        department: 'QA',
        salary: 50000
    }
];



}