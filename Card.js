
let effect;
// let attack = false;
// let defense = false;
// let heal = false;
// let attDebuff = false;
// let defDebuff = false;

export class Card{
    cardType;
    effect;
    name;

   constructor(type, effectValue){
        this.cardType = type;
        if (type == "attack"){
            //setup for attack cards
            //attack = true;
            this.name = "Brute Force Attack";
            this.effect = effectValue;
            console.log(`Effect: ${this.cardType} ${this.effect}`)
        }
        else if (type == "defense"){
            //setup for defense cards
            //defense = true;
            this.name = "Firewall"
            this.effect = effectValue;
            console.log(`Effect: ${this.cardType} ${this.effect}`);
        }
        else if (type == "heal"){
            //setup for heal cards
            //heal = true
            this.name = "Snapshot"
            this.effect = effectValue;
            console.log(`Effect: ${this.cardType} ${this.effect}`)
        }
        else if (type == "attDebuff"){
            //setup for attack debuff cards
            //attDebuff = true;
            this.name = "Denial of Service";
            this.effect = effectValue;
            console.log(`Effect: ${this.cardType} ${this.effect}`);
        }
        else if (type == "defDebuff"){
            //setup for defense debuff cards
            //defDebuff = true;
            this.name = "Compromised";
            this.effect = effectValue;
            console.log(`Effect: ${this.cardType} ${this.effect}`);

        }
        
    
   }

   GetCardType(){
        //returns cardtype for this card
        return this.cardType;
   }

   GetCardEffect(){
        //returns effect of card
        return this.effect;
   }

   Print(){
    console.log(`Name: ${this.name} Type: ${this.cardType}, Effect Value: ${effect}`)
   } 



}

