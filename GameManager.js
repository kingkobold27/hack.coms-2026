import {maxHand, Creature, Player, Enemy} from './Creature.js';
import {Card} from './Card.js';
let input = document.querySelector("#cmdLine");
let terminal = document.querySelector("#terminal");
let display = document.querySelector("#playArea");
let logs = document.querySelector("#prevInput");
let submitLine = document.querySelector("#submitLine");

let body = document.querySelector("body");
let blockout = document.createElement("div");
blockout.style.color = "black";
body.appendChild(blockout);

let player = new Player(50, "darien");
let goose = new Enemy(100, "sam");
let flock = new Enemy(150, "vi");
let swan = new Enemy(125, "chris");
let pelican = new Enemy(175, "peter");
let roboDuck = new Enemy(200, "alex");

let iter = 0;
let whoTurn = 1;



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
    //TurnManager(pelican);
    RoundStart(goose);
    PathSelect();
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
    let start = false;
    let level1 = false;
    let level2 = false;
    let level3 = false;
    let level4 = false;
    let level5 = false;
    let boss = false;

    let startToFinish = [start, level1, level2, level3, level4, level5, boss];
    let playerPath = [];
    let current = startToFinish[iter];

    blockout.innerHTML += `<button type='button' id='continue'> Continue to next stage </button>`;
       
    playerPath.push(current);
    current = startToFinish[iter++];
    current = true;
    console.log(`This means that the list has ${current} and ${startToFinish[2]}`);
        


    
    
}

function RoundStart(eenemy){
    console.log(`An Encounter Begins! Fighting: ${eenemy.name}`); 
    //initialize player and opponent
    player.myTurn = true;
    
    while(true){
        if(player.myTurn == true){
            logs.innerHTML += `<br>Your turn start <br>Enter a function:`;
            //waitFunction();
        }
        else{

            player.myTurn = true;
        }
        if(player.health <= 0){
            GameLoss();
            break;
        }
        else if(eenemy.health <= 0){
            RoundWin(eenemy);
            break;
        }
    }
    
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

function waitFunction(){
    console.log("this should go first");

    setTimeout(() => TurnManager(pelican), 5000);
    //should be a timeout for 90 seconds on TurnManager
}

async function TurnManager(pelican){
    submitLine.onclick = chooseFunction(pelican);
    logs.innerHTML += input.value;
    input.value = "";
    player.myTurn = false;
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