export class Partie {

    //variable d'instance
      tabHeros : string[] = ["toto", "tata", "Billy"];
      tabMechants : string[] = ["ogre", "gobelin", 'orque'];

    constructor(){

    }

    /
     * Methode lancement de la partie 
     * @return 
     /
    newPartie = () => {
        /const readline = require('readline');
        const lancementPartie = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        lancementPartie.question('Voulez-vous démarrez une partie ? (O/N)', (answer)); 
        if (answer == 'O' || answer == 'o') { const reponse = console.log("lancement de la partie");
        } else {
            const reponse = console.log("retour a la question")
        }
        return reponse;*/
    }

    /
     * Methode creation du méchant 
     * @return 
     */
    createMechant = () => {
        return console.log("test lien index");

    }


}