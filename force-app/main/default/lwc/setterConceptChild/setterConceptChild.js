import { api, LightningElement } from 'lwc';

export default class SetterConceptChild extends LightningElement {

    _rcbPlayers = [];
    _cskPlayers = [];

    get rcbPlayers() {
        return this._rcbPlayers;
    }

    get cskPlayers() {
        return this._cskPlayers;
    }

    @api
    get totalPlayers(){
        return this._cskPlayers.length + this._rcbPlayers.length;
    }

    // set totalPlayers(value) {

    //     this._rcbPlayers = value.filter(p => p.team === 'RCB').map((player)=>{
    //         return {
    //             ...player,
    //             name : player.name.toUpperCase()
    //         }
    //     })
        
    //     this._cskPlayers = value.filter(p => p.team === 'CSK').map((player)=>{
    //         return {
    //             ...player,
    //             name : player.name.toUpperCase()
    //         }
    //     })
    // }


set totalPlayers(value) {

    const formattedPlayer = value.reduce((acc, player) => {

        const updatedPlayer = {
            ...player,
            name: player.name.toUpperCase()
        };

        if (player.team === 'RCB') {
            acc.rcb.push(updatedPlayer);
        } 
        else if (player.team === 'CSK') {
            acc.csk.push(updatedPlayer);
        }

        return acc;
    }, { rcb: [], csk: [] });

    this._rcbPlayers = [...formattedPlayer.rcb];
    this._cskPlayers = [...formattedPlayer.csk];
}

}
