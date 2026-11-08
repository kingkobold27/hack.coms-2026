import {maxHand, Creature, Player, Enemy} from './Creature.js';
import {Card} from './Card.js';



window.onload = () => {
    let player = new Player(50, 5);
    StartGame(player);
}
function StartGame(player){
    
    player.CreateDeck();
    console.log(player)
    player.DrawCard();
    console.log(player)
    player.DisplayHand();
    console.log(player);
    
}

function PathSelect(){
    
}

function RoundStart(){

}

// TurnManager(){
    
// }