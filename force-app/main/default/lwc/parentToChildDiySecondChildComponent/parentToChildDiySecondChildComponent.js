import { LightningElement , api} from 'lwc';

export default class ParentToChildDiySecondChildComponent extends LightningElement {

    @api teamScorecard;
    topPlayer;

    @api topScorer(){

        if(this.teamScorecard.length === 0){
            this.topPlayer = null;
            // return null;
        }

    this.topPlayer = this.teamScorecard.reduce((topPlayer, currentPlayer) => {
        return Number(topPlayer.Score) > Number(currentPlayer.Score)
            ? topPlayer
            : currentPlayer;
        });

    // If multiple players in team have same sccore
    
    const top = this.topPlayer.Score;
        
    this.topPlayer = this.teamScorecard.filter((player)=>player.Score===top)



    }

}