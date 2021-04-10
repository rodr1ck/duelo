const { Effect } = require('./Effect.js');
const { Unit }  = require('./Unit.js');

const effect1 = new Effect("Algoritmo Difícil", 2, "aumentar la resistencia del objetivo en 3", "res", 3);
const effect2 = new Effect("Rechazo de promesa no manejado", 1, "reducir la resistencia del objetivo en 2", "res", -2);
const effect3 = new Effect("Programación en pareja", 3, "aumentar el poder del objetivo en 2", "power", 2);

//El jugador 1 convoca a "Ninja Cinturón Rojo"
const ninja1 = new Unit("Red Belt Ninja",3,3,4);

//El jugador 1 juega "Algoritmo duro" en "Ninja Cinturón Rojo"
console.table({effect1,ninja1});
effect1.apply(ninja1);
console.table({effect1,ninja1});

//El jugador 2 convoca a "Ninja Cinturón Negro"
const ninja2 = new Unit("Black Belt Ninja",4,5,4);

//El jugador 2 juega "Rechazo de promesa no controlada" en "Ninja Cinturón Rojo"
console.table({effect2,ninja1});
effect2.apply(ninja1);
console.table({effect2,ninja1});

//El jugador 1 juega "Programación en pareja" en "Ninja Cinturón Rojo"
console.table({effect3,ninja1});
effect3.apply(ninja1);
console.table({effect3,ninja1});

//El jugador 1 tiene el ataque "Ninja Cinturón Rojo" "Ninja Cinturón Negro"
console.table({ninja1,ninja2});
ninja1.attack(ninja2);
console.table({ninja1,ninja2});


