import {maxHand, Creature, Player, Enemy} from './Creature.js';
import {Card} from './Card.js';
let input = document.querySelector("#cmdLine");
let terminal = document.querySelector("#terminal");
let display = document.querySelector("#playArea");



let player = new Player(50, 5, "darien");
let goose = new Enemy(100, 5, "sam");
let flock = new Enemy(150, 5, "vi");
let swan = new Enemy(125, 5, "chris");
let pelican = new Enemy(175, 8, "peter");
let roboDuck = new Enemy(200, 10, "alex");

function StartGame(){
    
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
    
    player.PlayCard(0, player);
    //console.log(player.health, player.defense);
}
StartGame();

function PathSelect(){
    //options on screen
    //pick path option
    //continue to location
    //encounter
    //end
    //something about after leaving a location blocking out it
    
}

function RoundStart(){
    console.log(`An Encounter Begins! Fighting: ${goose.name}`);
    //initialize player and opponent
    player.myTurn = true;
    
}

function RoundWin(){
    //if( <CURRENT ENEMY.health <= 0){
        //you win screen
        // add to deck reward
        //deck.addCard
        //return to map
    //}
    
}

function GameWin(){
    if(roboDuck.health <= 0){
        //beat the game screen
        //restart button
    }
    
}

function GameLoss(){
    if(player.health <= 0){
        //show game over screen
        //restart button
    }
}

function chooseFunction(target){
    if(input.value == "./attack.sh"){
        //input attack command
        // const index = player.hand.findIndex(player => player.hand.cardType == 'attack');
        let playedCard;
        for (let index = 0; index < player.hand.length; index++) {
            const element = player.hand[index];
            if(element.cardType == "attack"){
                playedCard = index;
                break;
            }
        }
        player.PlayCard(playedCard, target);
        console.log(player.health);
    }
    else if(input.value == "firewall-cmd"){
        //input defense command
        let playedCard;
        for (let index = 0; index < player.hand.length; index++) {
            const element = player.hand[index];
            if(element.cardType == "defense"){
                playedCard = index;
                break;
            }
        }
        player.PlayCard(playedCard, target);
        console.log(player.health);
    }
    else if(input.value == "git revert"){
        //input heal command
        let playedCard;
        for (let index = 0; index < player.hand.length; index++) {
            const element = player.hand[index];
            if(element.cardType == "heal"){
                playedCard = index;
                break;
            }
        }
        player.PlayCard(playedCard, target);
        console.log(player.health);
    }
    else if(input.value == "setenforce 1"){
        //input attack debuff
        let playedCard;
        for (let index = 0; index < player.hand.length; index++) {
            const element = player.hand[index];
            if(element.cardType == "attDebuff"){
                playedCard = index;
                break;
            }
        }
        player.PlayCard(playedCard, target);
        console.log(player.health);
    }
    else if(input.value == "ping 127.0.0.1"){
        //input defense debuff
        let playedCard;
        for (let index = 0; index < player.hand.length; index++) {
            const element = player.hand[index];
            if(element.cardType == "defDebuff"){
                playedCard = index;
                break;
            }
        }
        player.PlayCard(playedCard, target);
        console.log(player.health);
    }
    else if(input.value == "exit"){
        //exit (end turn)
        if(player.stamina != 0){
            console.log("You still have stamina remaining for more actions!");
        }
        else{
            player.myTurn = false;
        }
    }
    else if(input.value == "ls -a /duck/hand"){
        //view hand
        player.DisplayHand();
    }
    else if(input.value == "ls -a /duck/discards"){
        //view discards
        player.ShowDiscard();
    }
    else if(input.value == "ls -a /duck/deck"){
        //view deck
        player.ShowDeck();
        //(???)
    }
    else{
        //inputted wrong syntax
        //turn does nothing "syntax error"
        
        //hi sam :)
        //sam rock paper scissors
        //I choose rock
        //I also choose rock
    }
    player.stamina -= 1;
}

function PlayerTurn(target){

    while(player.myTurn == true){
        input.addEventListener("keydown", chooseFunction(target));
    }
    
    
}

function TurnManager(pelican){
    RoundStart();
    let whoTurn = 1;
    while(true){
        if(whoTurn % 2 != 0){
            player.myTurn = true;
            PlayerTurn(pelican);
        }
        else{
            player.myTurn = false;
        }
        if(player.health <= 0){
            GameLoss();
            break;
        }
        else if(player.health <= 0 && pelican.health <= 0){
            GameLoss();
            break;
        }
        if(pelican.health <= 0){
            RoundWin();
            break;
        }
        whoTurn++;
    }
}

function TurnManagerBoss(roboDuck){
    RoundStart();
    let whoTurn = 1;
    while(true){
        if(whoTurn % 2 != 0){
            player.myTurn = true;
        }
        else{
            player.myTurn = false;
        }
        if(player.health <= 0){
            GameLoss();
            break;
        }
        else if(player.health <= 0 && roboDuck.health <= 0){
            GameLoss();
            break;
        }
        if(roboDuck.health <= 0){
            GameWin();
            break;
        }
        whoTurn++;
    }
}