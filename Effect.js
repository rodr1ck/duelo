const { Card }  = require('./Card.js');
const { Unit }  = require('./Unit.js');

class Effect extends Card{
    
    constructor(name, cost,text,stat,magnitude){
        super(name,cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    apply(target){
        if(target instanceof Unit){
            console.log(`${this.name} effects to ${target.name}`)
            target[this.stat] = target[this.stat] + this.magnitude;
        } else {
            throw Error('You can only attack another Unit'); 
        }
    }

}

module.exports = {
    Effect
};