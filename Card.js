
let effect;
const attack = false;
const defense = false;
const heal = false;
const attDebuff = false;
const defDebuff = false;


export class Card{
    cardType;
    effect;
    name;

   constructor(type, effectValue){
        this.cardType = type;
        if (type == "attack"){
            attack = true;
            this.name = "Brute Force Attack";
            this.effect = effectValue;
            console.log(`Effect: ${this.attack} ${this.effect}`)
        }
        else if (type == "defense"){
            defense = true;
            this.name = "Firewall"
            this.effect = effectValue;
            console.log(`Effect: ${this.defense} ${this.effect}`);
        }
        else if (type == "heal"){
            heal = true
            this.name = "Snapshot"
            this.effect = effectValue;
            console.log(`Effect: ${this.heal} ${this.effect}`)
        }
        else if (type == "attDebuff"){
            attDebuff = true;
            this.name = "Restricted Access";
            this.effect = effectValue;
            console.log(`Effect: ${this.attDebuff} ${this.effect}`);
        }
        else if (type == "defDebuff"){
            defDebuff = true;
            this.name = "Compromised";
            this.effect = effectValue;
            console.log(`Effect: ${this.defDebuff} ${this.effect}`);

        }
        
   }

   Print(){
    console.log(`Name: ${this.name} Type: ${this.cardType}, Effect Value: ${effect}`)
   } 



}

