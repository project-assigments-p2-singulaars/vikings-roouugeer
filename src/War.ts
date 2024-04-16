import { Viking } from "./Viking";
import { Saxon } from "./Saxon";


export class War {
    vikingArmy: Viking[] = [];
    saxonArmy: Saxon[] = [];

    addViking(viking: Viking) {
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon: Saxon) {
        this.saxonArmy.push(saxon)
    }
    
    
    
    vikingAttack() {
        let randomVikingNumber = Math.floor(Math.random() * this.vikingArmy.length)
        let randomSaxonNumber = Math.floor(Math.random() * this.saxonArmy.length);
        let result = this.saxonArmy[randomSaxonNumber].receiveDamage(this.vikingArmy[randomVikingNumber].strength)
        
        if (this.saxonArmy[randomSaxonNumber].health <= 0){
            this.saxonArmy.splice(randomSaxonNumber,1)
        } 
        return result
            
    } 
    saxonAttack() {
        let randomVikingNumber = Math.floor(Math.random() * this.vikingArmy.length)
        let randomSaxonNumber = Math.floor(Math.random() * this.saxonArmy.length);
        let result = this.vikingArmy[randomVikingNumber].receiveDamage(this.saxonArmy[randomSaxonNumber].strength)

        if (this.vikingArmy[randomVikingNumber].health <= 0){
            this.vikingArmy.splice(randomVikingNumber,1)}

        return result
    } 
    
    
    showStatus() {
        if (this.saxonArmy.length === 0) {
     return "Vikings have won the war of the century!"
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survive another day..."
        } else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
    
}