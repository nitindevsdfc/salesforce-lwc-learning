import { LightningElement } from 'lwc';

export default class ParentComponentApi extends LightningElement {
    // dataToChild = "Hii Passing to Child"

    // courses = ['Engineering Maths','Computer Organization & Architecture','Theory of Computation','Digital & Logic Design'];

    //  courses = 
    // {
    //     courseId: 'CRS001',
    //     courseName: 'Salesforce LWC Fundamentals',
    //     duration: '6 Weeks',
    //     level: 'Beginner',
    //     mode: 'Online'
    // };

courses = [
    {
        courseId: 'CRS001',
        courseName: 'Salesforce LWC Fundamentals',
        duration: '6 Weeks',
        level: 'Beginner',
        mode: 'Online'
    },
    {
        courseId: 'CRS002',
        courseName: 'Apex Programming',
        duration: '8 Weeks',
        level: 'Intermediate',
        mode: 'Offline'
    },
    {
        courseId: 'CRS003',
        courseName: 'Salesforce Integration',
        duration: '5 Weeks',
        level: 'Advanced',
        mode: 'Online'
    }
];


}