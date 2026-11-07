const Type = {
        ATTACK: 1,
        BUFFHEAL: 1,
        BUFFBLOCK: 1,
        DEBUFFATTACK: 1, 
        DEBUFFDEFENSE: 1, 
        DEFEND: 1, 
   };

class Card{
    cardType;
   attackValue;
   blockValue;
   buffHealValue;
   buffBlockValue;
   debuffDefenseValue;
   debuffAttackValue;

   constructor(type, effectValue){
        this.cardType = type;
        if (type == Type.ATTACK){
            this.attackValue = effectValue;
        }
        else if (type == Type.BUFFHEAL){
            this.buffHealValue = effectValue;
        }
        else if (type == Type.BUFFBLOCK){
            this.buffBlockValue = effectValue;
        }
        else if (type == Type.DEBUFFATTACK){
            this.debuffAttackValue = effectValue;
        }
        else if (type == Type.DEBUFFDEFENSE){
            this.debuffDefenseValue = effectValue;
        }

   }

   DeclareAttack(attackValue){

   }
    



}

