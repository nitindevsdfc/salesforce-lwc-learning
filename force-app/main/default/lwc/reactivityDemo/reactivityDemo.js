import { LightningElement, track } from 'lwc';

export default class ReactivityDemo extends LightningElement {
    @track course = ['Algebra', 'Calculus', 'Geometry', 'Trigonometry'];
    @track QASlot = {
        Session : '8PM',
        Date : '2022-08-01',
        Duration : '1hr',
    };

    newCourse = '';
    removeCourse = '';
    
    handleSessionChange(event){
        this.QASlot.Session = event.target.value;
    }

    handleCourseChange(event){
        this.newCourse = event.target.value;
    }


    // Function to Add a course

    handleAddCourse() {
        if (!this.newCourse || this.newCourse.trim() === '') {
            alert('Please enter a course name');
            return;
    }

        this.course = [...this.course, this.newCourse.trim()];
        this.newCourse = '';
    }


    // Functin to Remove a course

    removeCourseChange(event){
        this.removeCourse = event.target.value;
    }

    handleRemoveCourse() {
        if (!this.removeCourse || this.removeCourse.trim() === '') {
            alert('Please enter a course name');
            return;   
        }

        if (!this.course.includes(this.removeCourse.trim())) {
            this.removeCourse = '';
            alert('Course not found');
            return;
        }

        this.course = this.course.filter(
            c => c !== this.removeCourse.trim()
        );

        this.removeCourse = '';
    }


}
