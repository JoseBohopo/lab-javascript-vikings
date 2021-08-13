// Soldier
class Soldier{
  
  constructor(health, strength) {
    this.health = health
    this.strength = strength
  }
  attack(){
    return this.strength
  }
  receiveDamage(dmg) {
    this.health = this.health - dmg
  }
 }

// Viking
class Viking extends Soldier{

  constructor(name,health,strength){
    super(health,strength)
    this.name = name
  }

  receiveDamage(dmg) {
    this.health = this.health - dmg
    if(this.health > 0){
      return `${this.name} has received ${dmg} points of damage`;
    }else{
      return `${this.name} has died in act of combat`
    }
 }

 battleCry(){
   return "Odin Owns You All!"
}
}

// Saxon
class Saxon extends Soldier {

 
  receiveDamage(dmg){
    this.health = this.health - dmg

    if ( health > 0) {
      return `A Saxon has received ${dmg} points of damage`;
    } else {
      return "A Saxon has died in combat"
    }

  }
  saxonDies = function(){
    return "Odin Owns You All!"
 }
}

// War
class War {
  vikingArmy = []
  saxonArmy = []
  addViking = function (viking) {
    this.vikingArmy.push(viking)
  }
  addSaxon = function (saxon) {
    this.saxonArmy.push(saxon)
   
  }
  vikingAttack = function () {
    expect(this.viking).toEqual(this.saxon);
  }
  saxonAttack = function () {
    
  }
  showStatus = function () {
    
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
