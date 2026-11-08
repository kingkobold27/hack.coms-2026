import {maxHand, Creature, Player, Enemy} from './Creature.js';
import {Card} from './Card.js';
let input = document.querySelector("#cmdLine");
let terminal = document.querySelector("#terminal");
let display = document.querySelector("#playArea");
let logs = document.querySelector("#prevInput");

let body = document.querySelector("body");
let blockout = document.createElement("div");
blockout.style.color = "black";
body.appendChild(blockout);

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
    GameLoss();
}
StartGame();

function PathSelect(){
    //options on screen
    //pick path option
    //continue to location
    //encounter
    //end
    //something about after leaving a location blocking out it
    const startToFinish = [start, level1, level2, level3, level4, level5, boss];
    const playerPath = [];
    let iter = 0;
    const current = startToFinish[iter];
    while(true){
        blockout.innerHTML += `<button type='button' id='continue'> Continue to next stage </button>`;
        //make button when pressed
        //continue to next stage
        //append current, make current start to finish plus 1
        playerPath.append(current);
        current = startToFinish[iter +1]
    }
    playerPath.append(current);
    


    
    
}

function RoundStart(){
    console.log(`An Encounter Begins! Fighting: ${goose.name}`);
    //initialize player and opponent
    player.myTurn = true;
    logs.innerHTML += `<br>Your turn start <br>Enter a function:`;
    
}

function RoundWin(enemy){
    //if( <CURRENT ENEMY.health <= 0){
        //you win screen
        // add to deck reward
        //deck.addCard
        //return to map
    //}
    let ran = Math.floor(Math.random() * 10);
    let newCard;
    if(ran == 0 || ran == 4 || ran == 8){
        newCard = new Card("attack", 7)
        player.deck.push(newCard);
    }
    else if(ran == 1 || ran == 5 || ran == 9){
        newCard = new Card("heal", 5)
        player.deck.push(newCard);
    }
    else if(ran == 2 || ran == 6){
        newCard = new Card("attDebuff", 3)
        player.deck.push(newCard);
    }
    else if(ran == 3 || ran == 7){
        newCard = new Card("attBuff", 4)
        player.deck.push(newCard);
    }
    logs.innerHTML += `<br>You defeated ${enemy}!`;
    logs.innerHTML += `<br>You added ${newCard} to your deck`;
}

function GameWin(){
    blockout.innerHTML = `<div><p>You win, yay, you are better, + W, + Skilled</p></div>`;
    blockout.innerHTML += `<button type='button' id='restart'> Restart :) </button>`;
}

function GameLoss(){
    
    blockout.innerHTML = `<div><p>You lost, lmao, get better, + L, + Ratio</p></div>`;
    blockout.innerHTML += `<button type='button' id='restart'> Restart :) </button>`;
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
    else if(input.value == "firewall-cmd"){
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
    }
    else{
        console.log("No Correlated Command. Try Again.");
    }
    player.stamina -= 1;
}

function PlayerTurn(target){

    while(player.myTurn == true){
        input.addEventListener("keydown", chooseFunction(target));
        logs.innerHTML += input.value;
        input.value = "";
    }
    
    
}

function TurnManager(pelican){
    RoundStart();
    let whoTurn = 1;
    while(true){
        player.health;
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