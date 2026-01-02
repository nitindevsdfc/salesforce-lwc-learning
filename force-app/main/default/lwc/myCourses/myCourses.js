import { LightningElement } from 'lwc';

export default class MyCourses extends LightningElement {
    firstName = '';
    lastName = '';
    // fullName = this.firstName + ' ' + this.lastName
    email = 'nitin.bw.kumar@gmail.com'
    course = ['Algebra', 'Calculus', 'Geometry', 'Trigonometry']
    check =null;
    days = 189;
    QAAlot = {
        Session : '8PM',
        Date : '2022-08-01',
        Duration : '1hr',
    };
    isSlotAvailable = true


    // 1. Methods are invoked from HTML only or From Another Methods
    // 2. Methods inside class are not having function keyword.
    // getName(){
    //     this.firstName;
    // }

    // changeName(){
    //     this.getName();
    // }

     

handleChange(event) {
    this.firstName = event.target.value;
}

handleLastNameChange(event) {
    this.lastName = event.target.value;
}

checkcourse(event) {
    this.check = event.target.value.toLowerCase();
}

get fullName() {
    return this.firstName + ' ' + this.lastName;
}

get totalCourses() {
    return this.course.length;
}

get isPresent() {
    
    if (!this.check || this.check.trim() === '') {
        return 'Please enter a valid course name';
    }

    
    let lowerCaseCourse = this.course.map(course => course.toLowerCase());

    
    if (lowerCaseCourse.includes(this.check)) {
        return 'Yes Present';
    } else {
        return 'Not Present';
    }
}

get noOfWeeks() {
    return Math.round(this.days / 7);
}

}