import {Player} from './player.js';
export default class Enemy extends Player {
    lookForPlayer() {
        console.log('search');
    }
}