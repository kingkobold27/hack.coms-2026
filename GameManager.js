import {maxHand, Creature, Player, Enemy} from './Creature.js';
import {Card} from './Card.js';



window.onload = () => {
    let player = new Player(50, 5);
    let goose = new Enemy(100, 5);
    let flock = new Enemy(150, 5);
    let swan = new Enemy(125, 5);
    let pelican = new Enemy(175, 8);
    let roboDuck = new Enemy(200, 10);
    StartGame(player, goose, flock, swan, pelican, roboDuck);
}
function StartGame(player, goose, flock, swan, pelican, roboDuck){
    
    player.CreateDeck();
    console.log(player)
    player.DrawCard();
    console.log(player)
    player.DisplayHand();
    console.log(player);
    
    goose.CreateDeckGoose();
    console.log(goose);
    flock.CreateDeckFlock();
    console.log(flock);
    swan.CreateDeckSwan();
    console.log(swan);
    pelican.CreateDeckPelican();
    console.log(pelican);
    roboDuck.CreateDeckRoboDuck(player);
    console.log(roboDuck);
}

function PathSelect(){
    
}

function RoundStart(){

}

// TurnManager(){
    
// }