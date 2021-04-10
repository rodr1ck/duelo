const { Card }  = require('./Card.js');

class Unit extends Card{
    constructor(name,cost,power,res){
        super(name,cost);
        this.power=power;
        this.res=res;
    }

    attack(target){
        if(target instanceof Unit){
            console.log(`${this.name} attacks to ${target.name}`)
            target.res = target.res - this.power;
        } else {
            throw Error('You can only attack another Unit'); 
        }
    }
}

module.exports = {
    Unit
};