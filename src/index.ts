import { Hero } from "./class/hero";
import { Good } from "./class/good";
import { Weapon } from "./class/weapon";
import { Bad } from "./class/bad";
import { Game } from "./class/game";

//lancement nouvelle partie 
//var partie = new Partie();

let name = "Hercule";
let pv = 200;
let pvMax = 250;
let def = 200;
let minAttack = 50;
let maxAttack = 200;
let criticalShot = 400;
// let weapon = new Weapon (minAttack, maxAttack, criticalShot);
// let good = new Good (name);
// let bad = new Bad (name);

// console.log("Heros", good);
// console.log("Monstre", bad);


//lancement nouvelle partie 
//var partie = new Partie();

//console.log("Heros", hero);
// console.log("Monstre", monster);

function partieStart(){
    new Game().initGame();
}
partieStart();