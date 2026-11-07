const maxHand = 5;

class Creature{
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

class Player extends Creature{
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
        for (let index = 0; index < this.deck.length; index++) {
            const element = this.deck[index];
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
        
        return this.discard;
    }

    ShowDeck(){
        const deck = new LinkedList();
        return deck.showList;
    }
}

class Enemy extends Creature{
    CreateSwan(someCreature){
        this.heatlh = 200;
        this.defense = 15;
        this.myTurn = false;
        
    }

    
}

