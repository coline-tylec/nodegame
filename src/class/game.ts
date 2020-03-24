import { Bad } from "./bad";
import { Good } from "./good";
import { Weapon } from "./weapon";

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


export class Game {

    //variable d'instance
    private tabHeros : string[] = ["toto", "tata", "Billy"];
    private tabMechants : string[] = ["ogre", "gobelin", 'orque'];

    constructor(){

    }

    // Methode lancement de la partie 
    // @return 

    initGame = () => {
        rl.question('Nom de votre heros? ', (answer : string) => {
            let nom = answer;
            let hero = new Good(nom);
            let bad = new Bad("");
            console.log("Heros", hero);
            console.log("Bad", bad);
            this.launchGame(hero, bad);
            rl.close();
        });

        
        
        // lancementPartie.question('Voulez-vous démarrez une partie ? (O/N)', (answer)); 
        // if (answer == 'O' || answer == 'o') { const reponse = console.log("lancement de la partie");
        // } else {
        //     const reponse = console.log("retour a la question")
        // }
        // return reponse;
    }

    launchGame = (good: Good, bad: Bad) => {
        let alea = Math.random();
        let firstPlayer;
        let secondPlayer;
        if (alea > 0.5) {
            firstPlayer = good;
            secondPlayer = bad;
            console.log("The Good side plays first");
        } else {
            firstPlayer = bad;
            secondPlayer = good;
            console.log("The Bad side plays first");
        }

        // firstPlayer.attack(secondPlayer);
        // console.log(secondPlayer);

        do {
            firstPlayer.attack(secondPlayer);
            if (secondPlayer.Pv > 0) {
                secondPlayer.attack(firstPlayer);
            }
        }while(firstPlayer.Pv > 0 && secondPlayer.Pv > 0)

        if(firstPlayer.Pv > 0) {
            console.log(firstPlayer.Name + " a gagné !")
        } else {
            console.log(secondPlayer.Name + " a gagné !")
        }

        
    }

    // Methode creation du méchant 
    // @return 

    createMechant = () => {
        return console.log("test lien index");

    }


}