import {maxHand, Creature, Player, Enemy} from './Creature.js';
import {Card} from './Card.js';
let input = document.querySelector("#cmdLine");
let terminal = document.querySelector("#terminal");
let display = document.querySelector("#playArea");
let logs = document.querySelector("#prevInput");
let buttons = document.querySelectorAll("button");
let playerSprite = document.querySelector("#playerimg");
let enemySprite = document.querySelector("#enemyimg");

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
let combat = true;
let enemyArray = [goose, swan, flock, pelican, roboDuck];


function StartGame(){
    
    player.CreateDeck();
    // console.log(player)
    player.DrawCard();
    // console.log(player)
    player.DisplayHand();
    // console.log(player);
    
    goose.CreateDeckGoose();
    // console.log(goose);
    flock.CreateDeckFlock();
    // console.log(flock);
    swan.CreateDeckSwan();
    // console.log(swan);
    pelican.CreateDeckPelican();
    // console.log(pelican);
    roboDuck.CreateDeckRoboDuck(player);
    // console.log(roboDuck);
    
    
    //player.PlayCard(0, player);
    //console.log(player.health, player.defense);
    //TurnManager(pelican);
    while(iter <=4){
        let enemy = enemyArray[iter];
        RoundStart(enemy);
        player.FlushHand();
        player.DisplayHand();
        
        PathSelect();
        if(player.health <= 0){
            GameLoss();
            combat = false;
        }
        else if(enemy.health <= 0){
            RoundWin(enemy);
            combat = false;
        }
    }

    GameWin();
    //GameLoss();
}
StartGame();

function PathSelect(){
    //options on screen
    //pick path option
    //continue to location
    //encounter
    //end
    //something about after leaving a location blocking out it
    let level1 = false;
    let level2 = false;
    let level3 = false;
    let level4 = false;
    let boss = false;

    let startToFinish = [level1, level2, level3, level4, boss];
    let playerPath = [];
    let current = startToFinish[iter];

    blockout.innerHTML += `<button type='button' id='continue'> Continue to next stage </button>`;
       
    playerPath.push(current);
    current = startToFinish[iter++];
    current = true;
    console.log(`This means that the list has ${current} and ${startToFinish[2]}`);
        


    
    
}

function RoundStart(eenemy){
    if(enemyArray[iter] == goose){
        enemySprite.innerHTML = `<img src='https://drive.google.com/file/d/1Q-7NFiQ1NQ7GpUjQL75GMUpXnVwXAbRp/view'`;
    }
    //console.log(`An Encounter Begins! Fighting: ${eenemy.name}`); 
    //initialize player and opponent
    player.myTurn = true;
    

    logs.innerHTML += `<br>Your turn start <br>Enter a function:`;
    NewTurns(eenemy);
    // if(player.myTurn == true){
    //         logs.innerHTML += `<br>Your turn start <br>Enter a function:`;
    //         waitFunction();
    //     }
    //     else{
    //         player.myTurn = true;
    //     }
    //     if(player.health <= 0){
    //         GameLoss();
    //     }
    //     else if(eenemy.health <= 0){
    //         RoundWin(eenemy);
    //     }
    
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



function EnemyTurn(){
    logs.innerHTML += `<br>something should have happened`;
    if(player.health > 0){

        waitFunction();
    }
    else{
        GameLoss();
    }
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}


 function NewTurns(enemy){
    combat = true;
    while(combat){
        if(player.myTurn = true){
            if(player.stamina == 0){
                player.myTurn = false;
                player.hand.FlushHand();
            }
            else{
                player.DisplayHand();
                buttons[0].addEventListener("click", Attack(enemy));
                buttons[1].addEventListener("click", Heal());
                buttons[2].addEventListener("click", AttDebuff(enemy));
                buttons[3].addEventListener("click", DefDebuff(enemy));
                buttons[4].addEventListener("click", Exit());
            }
            

        }
        else{
            //choose random # 0-4
            //play card at that index in enemy's hand
            let randCard = getRandomArbitrary(0,4);
            enemy.PlayCard(hand[randCard], player);
            enemy.FlushHand();
        }
        
    }
 }
 function GetCard(type){
    let chosenCard;
    for (const card of player.hand) {
        if(card.cardType == type){
            chosenCard = card;
            break;
        }
    }
    if(!chosenCard){
        chosenCard = null;
    }
    return chosenCard;
 }
 function Attack(enemy){
    let chosenCard = GetCard("attack");
    if(chosenCard == null){
        logs.innerHTML += `no card of the chosen type found in hand`;
    }
    else{
        player.PlayCard(player.hand.indexOf(chosenCard), enemy);
        player.stamina -= 1;
    }
    
 }
 function Heal(){
    let chosenCard = GetCard("heal");
    if(chosenCard == null){
        logs.innerHTML += `no card of the chosen type found in hand`;
    }
    else{
        player.PlayCard(player.hand.indexOf(chosenCard), player);
        player.stamina -= 1;
    }
    
 }
 function AttDebuff(enemy){
    let chosenCard = GetCard("attDebuff");
    if(chosenCard == null){
        logs.innerHTML += `no card of the chosen type found in hand`;
    }
    else{
        player.PlayCard(player.hand.indexOf(chosenCard), enemy);
        player.stamina -= 1;
    }
    
 }
 function DefDebuff(enemy){
    let chosenCard = GetCard("defDebuff");
    if(chosenCard == null){
        logs.innerHTML += `no card of the chosen type found in hand`;
    }
    else{
        player.PlayCard(player.hand.indexOf(chosenCard), enemy);
        player.stamina -= 1;
    }
    
 }
 function Exit(){
    player.myTurn = false;
    player.stamina = 3;
 }