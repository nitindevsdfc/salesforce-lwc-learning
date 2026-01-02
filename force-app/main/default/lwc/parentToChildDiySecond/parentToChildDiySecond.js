import { LightningElement } from 'lwc';

export default class ParentToChildDiySecond extends LightningElement {

    playerName = '';
    playerScore = '';
    playerTeam = '';
    isChecked = false;
    squad = [];

    setPlayerName(event){
        this.playerName = event.target.value;
    }

    setScore(event){
        this.playerScore = Number(event.target.value);
    }

    setTeam(event){
        this.playerTeam = event.target.value;
    }

    addToSquad(){
        const player = {
            Name: this.playerName,
            Score: this.playerScore,
            Team: this.playerTeam
        };

        this.squad = [...this.squad, player];

        // uncheck checkbox after add
        this.isChecked = false;
        if(this.squad.length > 0){
            this.refs.refTopPlayer.disabled = false;
        }
        console.log(JSON.stringify(this.squad,null,2));
    }

    addMore(event){
        this.isChecked = event.target.checked;

        // if (this.isChecked) {
        //     this.playerName = '';
        //     this.playerScore = '';
        //     this.playerTeam = '';
        // }


        const elements = this.template.querySelectorAll(".refTagP");

            elements.forEach(el => {
                el.value = '';
            });
    }

    findTopScorer(){
        this.refs.childcomponent.topScorer();
    }
}
