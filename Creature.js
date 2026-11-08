import {Card} from './Card.js';
 
export const maxHand = 5;


export class Node {
    //node class for LinkedList
    //has data then points to next node
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

export class LinkedList{
    constructor(){
        this.head = null;
    }
    //linkedlist function, constructs with head
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
    //append data to the linkedlist
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
    //show what is in the linkedlist
}


export class Creature{
    health = 0;
    defense = 0;
    baseDef = 0;
    stamina;
    deck = [];
    discard = [];
    hand = [];  
    myTurn = false;
    name;
    //class vars 
    constructor(health, defense, name){
        this.health = health;
        this.baseDef = defense;
        this.defense = this.baseDef;
        this.name = name;
        //console.log(`player created: ${this}`)
    }
    //construct creature wit  health, defense   

    PlayCard(index, target){
        console.log(`${this.hand[index].name} has been used against ${target.name}`);
        const card = this.hand[index];
        const type = this.hand[index].cardType;
        //card and type of that card
        if (type == "attack"){
            //reduce opponent's health by amount
            target.health -= card.effect; 
            console.log(target.health);
        }
        else if(type == "defense"){
            //user's defense raised by number
            target.defense += card.effect;
            console.log(target.defense);
        }
        else if(type == "heal"){
            //user heals health equal to value
            target.health += card.effect;
            console.log(target.health);
        }
        else if(type == "attDebuff"){
            //reduces attack of opponent
            for (const cyard of target.deck) {
                if(cyard.cardtype == "attack"){
                    cyard.effect -= card.effect;
                }
            }
        }
        else if(type == "defDebuff"){
            //reduce target's defense by effect
            target.defense -= card.effect;
        }

        //remove the played card from hand and add to discard array
        this.discard.push(this.hand.splice(index, 1));
        
    }

    RefreshDeck(){
        //used to refill deck when empty
        if(this.deck.length == 0){
            //check to see if cards are available to draw 
            this.deck = this.discard;
            //discard becomes the deck
            for(index =0; index <= this.deck.length; index++){
                this.discard.pop();
                //removes all items from discard
            } 
        } 
    }

    DrawCard(){ 
        console.log("DrawCard has been called")
        let num = 10; //base value; math.floor returns number between 0 - 9
        if(this.deck.length > 10 && this.deck.length < 101){ //when there are more than 10 cards in the deck
            num = 100; //set the math.floor value to return a number from 0 - 99
            
        }
        let ran;
        while (this.hand.length < maxHand){
            this.RefreshDeck();
            //while size of hand is less than the maximum hand size
            let random = () => 
                {
                    //gets random number for an index of the deck
                    
                    
                    
                    ran = Math.floor(Math.random() * num); //set the random value to be random between either 0 - 9 or 0 - 99
                    if(ran > this.deck.length){ //if the number generated is greater than the number of cards in the deck
                        ran = this.deck.length; //random number becomes the last card in deck
                        ran -= 1;
                     }
                    return ran; //random returns the random number

                    //this should account for it being increased AND decreased, good thing to consider...
                     
                }
            random();
            
            const cardDrawn = this.deck[ran];
            //choose random card from deck
            this.deck.splice(ran, 1);
            //remove chosen card from deck
            this.hand.push(cardDrawn);
            //add chosen card to hand

        }
        
    }

    FlushHand(){
        while(this.hand.length != 0){
            //while hand has cards in it

            this.discard.push(this.hand.pop());
            //remove card from hand
        }
        this.DrawCard();
        //call DrawCard to get hand to full again with different cards
    }

}

//extending from Player extends to Creature class
export class Player extends Creature{
    constructor(health, defense, name){
        super(health, defense, name);
        this.stamina = 3;
        //this.CreateDeck;
        //this.DrawCard;
        // for (let index = 0; index < 10; index++) {
        //     if(index < 5){
        //         let element = new Card("attack", 7)
        //         this.deck.push(element);
        //     }
        //     else{
        //         let  element = new Card("defense", 2);
        //         this.deck.push(element);
        //     } 
        // }
        //why is this here? should just get rid of it considering right below this is the function for it
    }
    
    //create a hand with these cards
    //function in this context cant happen inside of a class, you would have to move it out
    CreateDeck(){
        console.log("CreateDeck has been called")
        for (let index = 0; index < 10; index++) {
            //for index in array, element equal to this index of the deck
            let card = new Card("")
            if (index < 5) {
                this.deck.push(new Card("attack", 7));
            }
            else{
                this.deck.push(new Card("defense", 2));
            }
        }
        //then show hand
    }
    
    DisplayHand(){
        for (let index = 0; index < this.hand.length-1; index++) {
            //for each item in hand
            const element = this.hand[index];
            console.log(`Card #${index + 1}: ${element.Print()}`);
            //log  that element
        }
    }
    
    ShowDiscard(){
        //works same as DisplayHand but for discard array
        for (let index = 0; index < this.discard.length; index++){
            const element = this.discard[index];
            console.log(`Card #${index + 1}: ${element.Print}`);
        }
    }

    ShowDeck(){
        //works same as DisplayHand but for deck array
        for(let index = 0; index < this.deck.length; index++){
            const element = this.discard[index];
            console.log(`Card #${index + 1}: ${element.Print}`); 
        }
    }
    
}

export class Enemy extends Creature{
    //Something sam was doing :)
    //something ill continue later
    constructor(health, defense, name){
        super(health, defense, name);
        this.stamina = 1;
        //this deck should be like different based on enemies
    }

    CreateDeckSwan(){
        console.log("CreateDeckSwan has been called")
        for (let index = 0; index < 10; index++) {
            //for index in array, element equal to this index of the deck
            //giving different quantities and values for the cards for different enemies
            if (index < 7) {
                //swan gets 7 strong attacks
                this.deck.push(new Card("attack", 10));
            }
            else{
                //swan gets 3 debuffs
                this.deck.push(new Card("defDebuff", 2));
            }
        }
    }

    CreateDeckPelican(){
        console.log("CreateDeckPelican has been called")
        for (let index = 0; index < 10; index++) {
            //for index in array, element equal to this index of the deck
            //giving different quantities and values for the cards for different enemies
            //pelican gets 4 attacks, 3 heals, and 3 defense
            if (index < 4) {
                
                this.deck.push(new Card("attack", 4));
            }
            else if (index >= 4 || index < 7){ 
                this.deck.push(new Card("heal", 6));
            }
            else{
                //pelican gets 3 defense
                this.deck.push(new Card("defense", 10));
            }
        }
    }

    CreateDeckGoose(){
        console.log("CreateDeckGoose has been called")
        for (let index = 0; index < 10; index++) {
            //for index in array, element equal to this index of the deck
            //giving different quantities and values for the cards for different enemies
            if (index < 10) {
                //goose gets 10 strong attacks
                this.deck.push(new Card("attack", 8));
                
            }
        }
    }
    
    CreateDeckRoboDuck(target){
        console.log("CreateDeckRoboDuck has been called")
        
        const playerDeck = target.deck;

        for(let index = 0; index < playerDeck.length; index++){
            //looks at player's deck and copies the contents (boss)
            this.deck.push(playerDeck[index]);
        } 
//geese flock, do we want them to share a deck?, make it double the size
    }    

    CreateDeckFlock(){
        console.log("CreateDeckFlock has been called")
        for (let index = 0; index < 20; index++) {
            //The flock has a bigger deck
            //gets 20 attacks, differing power
            if (index < 10) {
                this.deck.push(new Card("attack", 8));
            }
            else{
                this.deck.push(new Card("attack", 4));
            }
        }
    }
    
    
}

