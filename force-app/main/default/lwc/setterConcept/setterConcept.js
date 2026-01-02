import { LightningElement } from 'lwc';
import PLAYER_IMAGES from '@salesforce/resourceUrl/PLAYER_IMAGES';

export default class SetterConcept extends LightningElement {

    players = [
        {
            name: 'Virat Kohli',
            image: `${PLAYER_IMAGES}/playerImages/kohli.jpg`,
            team : 'RCB',
            description: 'RCB legend and modern great'
        },
        {
            name: 'AB de Villiers',
            image: `${PLAYER_IMAGES}/playerImages/abd.jpg`,
            team : 'RCB',
            description: 'Mr. 360 of cricket'
        },
        {
            name: 'Chris Gayle',
            image: `${PLAYER_IMAGES}/playerImages/gayle.jpg`,
            team : 'RCB',
            description: 'Universe Boss'
        },
        {
            name: 'Dale Steyn',
            image: `${PLAYER_IMAGES}/playerImages/steyn.jpg`,
            team : 'RCB',
            description: 'Legendary fast bowler'
        },
        {
            name: 'Tim David',
            image: `${PLAYER_IMAGES}/playerImages/timdavid.jpg`,
            team : 'RCB',
            description: 'Explosive finisher'
        },
        {
            name: 'MS Dhoni',
            image: `${PLAYER_IMAGES}/playerImages/dhoni.jpg`,
            team : 'CSK',
            description: 'Captain Cool'
        },
        {
            name: 'Suresh Raina',
            image: `${PLAYER_IMAGES}/playerImages/raina.jpg`,
            team : 'CSK',
            description: 'Mr. IPL'
        },
        {
            name: 'Ravindra Jadeja',
            image: `${PLAYER_IMAGES}/playerImages/jadeja.jpg`,
            team : 'CSK',
            description: 'World-class all-rounder'
        },
        {
            name: 'Ravichandran Ashwin',
            image: `${PLAYER_IMAGES}/playerImages/ashwin.jpg`,
            team : 'CSK',
            description: 'Intelligent spinner'
        },
        {
            name: 'Faf du Plessis',
            image: `${PLAYER_IMAGES}/playerImages/faf.jpg`,
            team : 'CSK',
            description: 'Consistent top-order batsman'
        }
    ];
}
