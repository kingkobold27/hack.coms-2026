import {Card} from './Card.js';
 
export const maxHand = 5;


export class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

export class LinkedList{
    constructor(){
        this.head = null;
    }

    append(data){
        const newNode = new Node(data);
        if (!this.head){
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next){
            current = current.next;
        }
        current.next = newNode;
    }
    
    showList(){
        let current = this.head;
        let index = 0;

        if(!current){
            console.log("Empty LinkedList")
            return;
        }
        while(current !== null){
            console.log(`Index: ${index} | Name: ${current.data}`);
            current = current.next;
            index++;
        }
    }
}


export class Creature{
    health;
    defense;
    deck = new Array[10];
    discard = new Array[0];
    hand = new Array[0];
    myTurn = false;

    constructor(health, defense){
        this.health = health;
        this.defense = defense;
    }
        

    PlayCard(index){

    }

    DrawCard(){
        const min = 0;
        
        while (this.hand.length < maxHand){
            const random = Math.floor(Math.random() * 10);
            const cardDrawn = deck[random];
            this.deck.splice(random, 1);
            this.hand.push(cardDrawn);

        }
        
    }

    FlushHand(){
        while(this.hand.length != 0){
            this.hand.pop();
        }
        this.DrawCard();
    }

}

export class Player extends Creature{
    health = 50;
    defense = 5;
    myTurn = true;

    CreateHand(){
        for (let index = 0; index < this.deck.length; index++) {
            const element = this.deck[index];
            if(index < 5){
                element = new Card("attack", 7)
            }
            else{
                element = new Card("defense", 5)
            }
            console.log(element);
        }
        this.DisplayHand()
    }
    
    DisplayHand(){
        for (let index = 0; index < this.hand.length; index++) {
            const element = this.hand[index];
            console.log(`Card #${index + 1}: ${element.Print}`);
        }
    }

    EndTurn(){
        const turn = true;
        while(turn == true){
            //something something player can act, maybe need a bool for that too?
        }
        //create turn managing system
    }

    ShowDiscard(){
        for (let index = 0; index < this.discard.length; index++){
            const element = this.discard[index];
            console.log(`Card #${index + 1}: ${element.Print}`);
        }
    }

    ShowDeck(){
        for(let index = 0; index < this.deck.length; index++){
            const element = this.discard[index];
            console.log(`Card #${index + 1}: ${element.Print}`); 
        }
    }
}

export class Enemy extends Creature{
    

    
}

