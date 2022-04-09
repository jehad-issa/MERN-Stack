class Ninja{
    constructor(name){
        this.name = name;
        this.health = 10;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log(`your name is ${this.name}`);
    }
    showStats(){
        console.log(`Ninja name: ${this.name}`);
        console.log(`Health: ${this.health}`);
        console.log(`Speed: ${this.speed}`);
        console.log(`Strength: ${this.strength}`);

    }
    drinkSake(){
        this.health += 10;
    }
}
const ninja1 = new Ninja("jehad");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();


