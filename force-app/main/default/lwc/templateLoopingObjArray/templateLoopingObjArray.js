import { LightningElement, track } from 'lwc';

export default class TemplateLoopingObjArray extends LightningElement {

        @track items = [
            { id: 1, name: "Apple",  price: 120 },
            { id: 2, name: "Banana", price: 40 },
            { id: 3, name: "Orange", price: 60 },
            { id: 4, name: "Grapes", price: 150 }
        ];

        @track cousre = [
            {Name : 'Salesforce', Duration : '3 Months', Fees : '10000', Batch : '2022-01-01', Trainer : 'John Doe'},
            {Name : 'Java', Duration : '6 Months', Fees : '20000', Batch : '2022-02-01', Trainer : 'Jane Doe'},
            {Name : 'Python', Duration : '9 Months', Fees : '30000', Batch : '2022-03-01', Trainer : 'Jack Doe'},
            {Name : 'C++', Duration : '12 Months', Fees : '40000', Batch : '2022-04-01', Trainer : 'Jill Doe'},
            {Name : 'C', Duration : '15 Months', Fees : '50000', Batch : '2022-05-01', Trainer : 'Joe Doe'}
        ]
}