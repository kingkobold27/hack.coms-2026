class Creature{
    health;
    defense;
    deck = new Array[10];
    discard = new Array[0];
    hand = new Array[5];

    constructor(heatlh, defense, deck, discard, hand){
        this.health = heatlh;
        this.defense = defense;
        this.cards = deck;
        this.discard = discard;
        this.hand = hand;
    }
    

    DisplayHand(){
        for (const index of deck){
            return 
        }
    }

    EndTurn(){
        //create turn managing system
    }

    PlayCard(index){

    }

    ShowDiscard(){
        const discard = new LinkedList();
        return discard.showList();
    }

    ShowDeck(){
        const deck = new LinkedList();
        return deck.showList;
    }

    DrawCard(){
        const deck = new LinkedList();
        
    }

}

class Player extends Creature{

}

class Enemy extends Creature{
    CreateSwan(someCreature){
        this.heatlh = 200;
        this.defense = 15;
        this.deck = deck * 2; //correct this syntax
        this.hand = this.hand; //create draw function

    }
}

