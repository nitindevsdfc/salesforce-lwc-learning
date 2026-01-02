import { api, LightningElement } from 'lwc';

export default class ParentToChildDiyFirstChildComponent extends LightningElement {

    value = 0;
    intervalID = null;

    @api
    start() {
        // Prevent multiple intervals
        if (this.intervalID) {
            return;
        }

        this.intervalID = setInterval(() => {
            this.value++;
        }, 1000);
    }

    @api
    stop() {
        clearInterval(this.intervalID);
        this.intervalID = null;
    }

    @api
    reset() {
        this.stop();
        this.value = 0;
    }

    get formattedTime() {
        const mins = Math.floor(this.value / 60);
        const secs = this.value % 60;

        return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }
}
