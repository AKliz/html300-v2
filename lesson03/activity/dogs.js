// Create the Dog class constructor
let barkLevel = 10;
let energyLevel = 0;

class dog{
  constructor(name, age, breed, color, barkLevel, energyLevel){
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.color = color;
    this.barkLevel = barkLevel;
    this.energyLevel = energyLevel;
  }
  pat(x){
    console.log(`START ${barkLevel} ${energyLevel}`);
    barkLevel = barkLevel - 1;
    energyLevel = energyLevel + 1;
    console.log(barkLevel , energyLevel);
  }
}
// Create Marty
const Marty = new dog('Marty', 4, 'lab', 'chocolate', barkLevel, energyLevel);
// Pat him 5 times

console.log(Marty);

Marty.pat();
Marty.pat();
Marty.pat();
Marty.pat();
Marty.pat();
