import { LightningElement, track } from 'lwc';

export default class TemplateLooping extends LightningElement {

    newCourseName = '';

    @track course = [];

    handleCourseChange(event) {
        this.newCourseName = event.target.value;
    }

    addNewCourse() {
        if (this.newCourseName) {
            this.course.push(this.newCourseName);
            // this.course = [...this.course, this.newCourseName];
            this.newCourseName = '';
        }
    }

    get IsArrayEmpty() {
        return this.course.length > 0;
    }
}
